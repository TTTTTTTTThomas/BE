# Multi-stage build for production optimization
FROM node:20-alpine AS builder

# Set working directory with required naming convention
WORKDIR /lastName_firstName_ui_garden_build_checks

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Run code quality checks
RUN npm run prettier
RUN npm run lint
RUN npm test -- --watchAll=false

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built files to nginx
COPY --from=builder /lastName_firstName_ui_garden_build_checks/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8018
EXPOSE 8018

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:8018 || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

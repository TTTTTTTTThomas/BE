# Multi-stage build for production optimization
FROM node:20-alpine AS builder

# Set working directory with required naming convention
WORKDIR /guangxin_dai_ui_garden_build_checks

# Copy package files
COPY package*.json ./

# Clean npm cache and install dependencies with retry
RUN npm cache clean --force && \
    npm ci --prefer-offline --no-audit || \
    (npm cache clean --force && npm install --no-package-lock)

# Copy source code
COPY . .

# Run code quality checks
RUN npm run prettier
RUN npm run lint
RUN npm test -- --run

# Build the application
RUN npm run build-storybook

# Production stage
FROM nginx:alpine

# Copy built files to nginx
COPY --from=builder /guangxin_dai_ui_garden_build_checks/storybook-static /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8018
EXPOSE 8018

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:8018 || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

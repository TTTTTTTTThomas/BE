# Guangxin Dai UI Garden - Coding Assignment 13

A React component library built with TypeScript, Vite, and Storybook, featuring comprehensive code quality checks and CI/CD pipeline.

## 🚀 Quick Start

### Prerequisites

- Docker installed on your system
- Git (for cloning the repository)

### Running the Application

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd BE
   ```

2. **Build and run the Docker container:**
   ```bash
   docker build -t guangxin_dai_coding_assignment13 .
   docker run -d -p 8018:8018 --name assignment13_storybook guangxin_dai_coding_assignment13
   ```

3. **Access the application:**
   Open your browser and navigate to: `http://localhost:8018`

The application will be running on **port 8018** as required.

## 📦 Project Structure

```
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   └── Button.stories.ts
│   │   └── Card/
│   │       ├── Card.tsx
│   │       ├── Card.test.tsx
│   │       └── Card.stories.ts
│   └── index.ts
├── .storybook/
├── .github/workflows/
├── .husky/
├── Dockerfile
├── nginx.conf
└── package.json
```

## 🔧 Docker Configuration

### Container Details
- **Container Name:** `guangxin_dai_coding_assignment13`
- **Working Directory:** `/guangxin_dai_ui_garden_build_checks`
- **Port:** 8018
- **Base Images:** 
  - Build stage: `node:20-alpine`
  - Production stage: `nginx:alpine`

### Multi-Stage Build Process
1. **Build Stage:**
   - Installs dependencies
   - Runs code quality checks (Prettier, ESLint, Tests)
   - Builds Storybook for production
2. **Production Stage:**
   - Serves static files with nginx
   - Configured for optimal performance

## ✅ Code Quality Checks

The project enforces strict code quality standards through:

### Pre-commit Hooks (Husky)
Located in `.husky/pre-commit`, automatically runs:
- **Prettier:** Code formatting check
- **ESLint:** Code quality and best practices
- **Tests:** Unit tests with React Testing Library

### Available Scripts
```bash
npm run prettier      # Check code formatting
npm run prettier:fix  # Fix formatting issues
npm run lint          # Run ESLint
npm run lint:fix      # Fix linting issues
npm test              # Run tests
npm run test:coverage # Run tests with coverage
npm run storybook     # Start development Storybook
npm run build-storybook # Build Storybook for production
```

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow
Located in `.github/workflows/ci-cd.yml`, provides:

1. **Continuous Integration:**
   - Runs on push to `main` and `develop` branches
   - Tests against Node.js 18.x and 20.x
   - Executes all code quality checks
   - Generates coverage reports

2. **Quality Gates:**
   - All commits must pass Prettier formatting
   - All commits must pass ESLint rules
   - All tests must pass
   - Coverage reports uploaded to Codecov

3. **Build Process:**
   - Builds Docker image
   - Runs end-to-end tests
   - Deploys to staging/production

### Enforcement Strategy
- **Local Development:** Pre-commit hooks prevent bad code from being committed
- **Remote Repository:** GitHub Actions prevent bad code from being merged
- **Double Protection:** If local hooks are bypassed, CI/CD will catch issues

## 🧪 Component Library

### Available Components

#### Button Component
- **Variants:** Primary, Secondary, Danger
- **Sizes:** Small, Medium, Large
- **Props:** `variant`, `size`, `children`, `onClick`

#### Card Component
- **Features:** Optional title, flexible content
- **Props:** `title?`, `children`

### Storybook Stories
Each component includes comprehensive stories demonstrating:
- Default usage
- All variants and sizes
- Edge cases and different content types

## 🛠️ Development Workflow

1. **Make changes to components**
2. **Pre-commit hooks automatically run:**
   - Format code with Prettier
   - Check code with ESLint
   - Run relevant tests
3. **If checks fail, commit is rejected**
4. **Fix issues and try again**
5. **Push to GitHub triggers CI/CD pipeline**

## 📋 Requirements Compliance

### ✅ Container Requirements
- ✅ Container name: `guangxin_dai_coding_assignment13`
- ✅ Working directory: `guangxin_dai_ui_garden_build_checks`
- ✅ Hosts production build of React component library
- ✅ Runs on localhost port 8018

### ✅ Code Quality Requirements
- ✅ Pre-commit checks for Prettier
- ✅ Pre-commit checks for ESLint
- ✅ Pre-commit checks for Tests
- ✅ Prevents commits that fail quality checks

### ✅ CI/CD Requirements
- ✅ GitHub Actions workflow configured
- ✅ Same checks run in CI/CD as locally
- ✅ Build failure notifications
- ✅ Bypassed local hooks caught by CI/CD

## 🚨 Troubleshooting

### Common Issues

1. **Port 8018 already in use:**
   ```bash
   docker stop assignment13_storybook
   docker rm assignment13_storybook
   ```

2. **Pre-commit hooks not working:**
   ```bash
   npm run prepare
   ```

3. **Docker build fails:**
   - Ensure all tests pass locally: `npm test`
   - Check code formatting: `npm run prettier`
   - Fix linting issues: `npm run lint:fix`

### Health Check
The Docker container includes a health check that monitors the application status:
```bash
docker ps  # Check if container is "healthy"
```

## 📊 Coverage and Quality Metrics

- Unit tests with React Testing Library
- Coverage reports generated automatically
- ESLint rules enforce best practices
- Prettier ensures consistent code formatting
- Husky prevents commits that don't meet standards

## 🔗 Links

- **Application:** http://localhost:8018
- **Storybook Documentation:** Accessible through the main application
- **Repository:** [GitHub Repository Link]
- **CI/CD Pipeline:** [GitHub Actions]

---

**Note:** This project demonstrates a production-ready React component library with comprehensive quality assurance, automated testing, and deployment workflows suitable for enterprise environments.

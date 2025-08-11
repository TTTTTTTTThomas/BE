# Assignment 13 - UI Component Library with Code Quality Checks

## Project Overview

This is a complete React TypeScript component library project with integrated code quality checks, pre-commit hooks, CI/CD pipeline, and Docker containerization.

## Quick Start

### Prerequisites

- Node.js 18.x or 20.x
- Docker Desktop
- Git

### Local Development

```bash
# 1. Clone the project
git clone <your-repo-url>
cd BE

# 2. Install dependencies
npm install

# 3. Start development server (runs on localhost:8018)
npm run dev
```

Development server will start at `http://localhost:8018`

### Docker Deployment (Production)

```bash
# 1. Build Docker image
docker build -t guangxin_dai_coding_assignment13 .

# 2. Run container
docker run -p 8018:8018 guangxin_dai_coding_assignment13

# 3. Access application
# Open browser: http://localhost:8018 (or http://127.0.0.1:8018)
```

## Project Structure

```
guangxin_dai_ui_garden_build_checks/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx          # Button component
│   │   │   └── Button.test.tsx     # Button component tests
│   │   └── Card/
│   │       ├── Card.tsx            # Card component
│   │       └── Card.test.tsx       # Card component tests
│   ├── setupTests.ts               # Test environment setup
│   └── index.ts                    # Component library entry
├── .github/
│   └── workflows/
│       └── ci-cd.yml              # GitHub Actions CI/CD
├── .husky/
│   └── pre-commit                 # Git pre-commit hooks
├── Dockerfile                     # Docker container configuration
├── nginx.conf                     # Nginx server configuration
└── Configuration files (ESLint, Prettier, etc.)
```

## Available Commands

```bash
# Development
npm run dev              # Start development server (localhost:8018)
npm run build            # Build production version

# Code Quality Checks
npm run lint             # Run ESLint checks
npm run prettier         # Check code formatting
npm run prettier:fix     # Auto-fix formatting issues

# Testing
npm test                 # Run tests (Vitest)
npm run test:ui          # Interactive test interface
npm run test:coverage    # Generate test coverage report

# Pre-commit Checks
npm run pre-commit       # Manually run pre-commit checks
```

## Code Quality Assurance

### Pre-commit Hooks (Husky)

Automatically runs on each Git commit:

1. **ESLint** - Code quality checks with auto-fix
2. **Prettier** - Code formatting
3. **Vitest** - Run all tests

If any check fails, the commit will be blocked.

### CI/CD Pipeline (GitHub Actions)

Runs on every push to `main` or `develop` branches:

1. **Multi-environment testing** - Node.js 18.x and 20.x
2. **Code quality checks** - Prettier, ESLint, tests
3. **Build verification** - Ensures application builds successfully
4. **Docker integration** - Validates containerized deployment

## Component Library

### Button Component

- **Variants**: primary, secondary, danger
- **Sizes**: small, medium, large
- **Features**: Click handling, disabled state, custom styling

### Card Component

- **Features**: Flexible container component
- **Options**: Optional title, custom styling
- **Variants**: default, elevated

## Docker Configuration

### Container Specifications

- **Container Name**: `guangxin_dai_coding_assignment13`
- **Working Directory**: `guangxin_dai_ui_garden_build_checks`
- **Port**: 8018
- **Server**: Nginx (production optimized)

### Multi-stage Build

1. **Build Stage**: Install dependencies, run quality checks, build application
2. **Production Stage**: Use Nginx to serve static files

### Health Check

Container includes health check to ensure application is running properly.

## Technology Stack

- **Frontend Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Testing**: Vitest + React Testing Library
- **Code Quality**: ESLint + Prettier
- **Pre-commit**: Husky + lint-staged
- **CI/CD**: GitHub Actions
- **Containerization**: Docker + Nginx

## Assignment 13 Requirements Checklist

- ✅ **Docker Container**: Runs on localhost:8018
- ✅ **Container Name**: `guangxin_dai_coding_assignment13`
- ✅ **Working Directory**: `guangxin_dai_ui_garden_build_checks`
- ✅ **Pre-commit Checks**: Prettier + ESLint + Tests
- ✅ **Husky Integration**: Blocks non-compliant code commits
- ✅ **GitHub Actions**: CI/CD pipeline
- ✅ **Production Build**: Optimized React application
- ✅ **Code Quality**: Comprehensive quality check process

## Troubleshooting

### Port in Use

```bash
# Windows
netstat -ano | findstr :8018
taskkill /F /PID <PID>

# Restart
npm run dev
```

### Pre-commit Hook Failures

```bash
# Manually run checks
npm run lint
npm run prettier:fix
npm test

# After fixing issues, commit again
git add .
git commit -m "your message"
```

### Docker Build Failures

Ensure all code quality checks pass:

```bash
npm run prettier
npm run lint
npm test
npm run build
```

## Quality Metrics

- **Test Coverage**: 100% component coverage
- **Code Quality**: Zero ESLint warnings/errors
- **Formatting**: 100% Prettier compliant
- **Type Safety**: Complete TypeScript coverage
- **Documentation**: Comprehensive JSDoc comments

---

## Author Information

- **Course**: Assignment 13
- **Requirements**: UI Component Library with Code Quality Checks
- **Technology**: React + TypeScript + Docker + CI/CD

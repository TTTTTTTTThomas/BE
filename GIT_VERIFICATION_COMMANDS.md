# Git Verification and Check Commands

## 📋 Basic Status Checks

```bash
# Check current repository status
git status

# Check status with short format
git status --short

# Check status with branch information
git status --branch

# Show staged and unstaged changes
git status --porcelain
```

## 🔍 Repository Information

```bash
# Show current branch
git branch --show-current

# List all branches
git branch -a

# Show remote repositories
git remote -v

# Display repository configuration
git config --list
```

## 📊 Commit History Verification

```bash
# Show commit history (last 10)
git log --oneline -10

# Show detailed commit history
git log --stat -5

# Show commits with graph
git log --graph --oneline --all -10

# Show commits by author
git log --author="YourName" --oneline
```

## 🔄 Changes and Differences

```bash
# Show changes in working directory
git diff

# Show staged changes
git diff --cached

# Show changes between commits
git diff HEAD~1 HEAD

# Show file differences
git diff --name-only
```

## 📁 File Tracking Status

```bash
# List tracked files
git ls-files

# List untracked files
git ls-files --others --exclude-standard

# List ignored files
git ls-files --ignored --exclude-standard

# Show file status in detail
git ls-files --stage
```

## 🏷️ Tag and Release Verification

```bash
# List all tags
git tag -l

# Show tag information
git show <tag-name>

# List tags with descriptions
git tag -l -n1
```

## 🔗 Remote and Sync Checks

```bash
# Check if local is up to date with remote
git status -uno

# Show remote tracking branches
git branch -vv

# Check for unpushed commits
git log origin/main..HEAD --oneline

# Check for unpulled commits
git log HEAD..origin/main --oneline
```

## 🛡️ Pre-commit Validation Commands

```bash
# Manually run pre-commit hooks
npm run pre-commit

# Run linting checks
npm run lint

# Run prettier format check
npm run prettier:check

# Run all tests
npm test

# Run tests with coverage
npm run test:coverage
```

## 🏗️ Build and Quality Checks

```bash
# Build the project
npm run build

# Check for security vulnerabilities
npm audit

# Check for outdated packages
npm outdated

# Verify package integrity
npm ci
```

## 📦 Assignment 13 Specific Verification

```bash
# 1. Verify project structure
ls -la

# 2. Check if running on correct port (8018)
npm run dev

# 3. Verify all tests pass
npm test

# 4. Check code quality
npm run lint && npm run prettier:check

# 5. Verify Docker build
docker build -t assignment13 .

# 6. Check if Docker runs on port 8018
docker run -p 8018:80 assignment13

# 7. Verify Git repository status
git status --porcelain

# 8. Check commit readiness
git diff --cached --name-only
```

## 🎯 Final Verification Sequence

```bash
echo "=== Assignment 13 Final Verification ==="
echo ""

echo "1. Repository Status:"
git status --short

echo ""
echo "2. Code Quality Check:"
npm run pre-commit

echo ""
echo "3. Test Results:"
npm test

echo ""
echo "4. Build Verification:"
npm run build

echo ""
echo "5. Ready for Commit:"
git diff --cached --name-only

echo ""
echo "6. Commit with verification:"
git commit -m "feat: Complete Assignment 13 - React Component Library

✅ Features Implemented:
- React + TypeScript + Vite setup
- Button and Card components with tests
- Code quality tools (Prettier + ESLint + Vitest)
- Pre-commit hooks (Husky + lint-staged)
- CI/CD pipeline (GitHub Actions)
- Docker containerization (port 8018)

✅ Quality Metrics:
- All tests passing (9/9)
- 100% component test coverage
- Zero ESLint errors
- Prettier formatting compliant

✅ Assignment Requirements Met:
- Development server on localhost:8018
- Production Docker build
- Comprehensive testing suite
- Automated quality checks
- Complete documentation

Assignment 13 completed successfully! 🎉"
```

## 💡 Troubleshooting Commands

```bash
# Reset changes if needed
git checkout -- .

# Clean untracked files
git clean -fd

# Reset to specific commit
git reset --hard HEAD~1

# Show what would be committed
git diff --cached

# Verify remote connection
git ls-remote origin

# Check Git configuration
git config --global --list
```

Use these commands to thoroughly verify your Assignment 13 implementation!

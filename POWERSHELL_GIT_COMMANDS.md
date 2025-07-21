# Git Verification Commands (Windows PowerShell Compatible)

## 📋 Basic Status Checks (PowerShell)

```powershell
# Check current repository status
git status

# Check status with short format
git status --short

# Check status with branch information
git status --branch

# Show staged and unstaged changes
git status --porcelain
```

## 🔍 Repository Information (PowerShell)

```powershell
# Show current branch
git branch --show-current

# List all branches
git branch -a

# Show remote repositories
git remote -v

# Display repository configuration (filtered for Windows)
git config --list | Select-String -Pattern "user|remote|branch"

# Show only user configuration
git config --list | Select-String -Pattern "user"
```

## 📊 Commit History Verification (PowerShell)

```powershell
# Show commit history (last 10)
git log --oneline -10

# Show detailed commit history
git log --stat -5

# Show commits with graph
git log --graph --oneline --all -10

# Show commits by author (replace YourName)
git log --author="YourName" --oneline
```

## 🔄 Changes and Differences (PowerShell)

```powershell
# Show changes in working directory
git diff

# Show staged changes
git diff --cached

# Show changes between commits
git diff HEAD~1 HEAD

# Show file differences (names only)
git diff --name-only

# Show staged file names
git diff --cached --name-only
```

## 📁 File Tracking Status (PowerShell)

```powershell
# List tracked files
git ls-files

# List untracked files
git ls-files --others --exclude-standard

# List ignored files
git ls-files --ignored --exclude-standard

# Show file status in detail
git ls-files --stage
```

## 🛡️ Pre-commit Validation Commands (PowerShell)

```powershell
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

## 🏗️ Build and Quality Checks (PowerShell)

```powershell
# Build the project
npm run build

# Check for security vulnerabilities
npm audit

# Check for outdated packages
npm outdated

# Verify package integrity
npm ci

# Check if port 8018 is in use
netstat -an | Select-String ":8018"
```

## 📦 Assignment 13 Verification Sequence (PowerShell)

```powershell
Write-Host "=== Assignment 13 Final Verification ===" -ForegroundColor Green
Write-Host ""

Write-Host "1. Repository Status:" -ForegroundColor Yellow
git status --short

Write-Host ""
Write-Host "2. Current Branch:" -ForegroundColor Yellow
git branch --show-current

Write-Host ""
Write-Host "3. Staged Files:" -ForegroundColor Yellow
git diff --cached --name-only

Write-Host ""
Write-Host "4. Code Quality Check:" -ForegroundColor Yellow
npm run pre-commit

Write-Host ""
Write-Host "5. Test Results:" -ForegroundColor Yellow
npm test

Write-Host ""
Write-Host "6. Build Verification:" -ForegroundColor Yellow
npm run build

Write-Host ""
Write-Host "7. Project Structure:" -ForegroundColor Yellow
Get-ChildItem -Name

Write-Host ""
Write-Host "8. Package Info:" -ForegroundColor Yellow
npm list --depth=0
```

## 💡 PowerShell Specific Commands

```powershell
# Filter git config (PowerShell way)
git config --list | Where-Object { $_ -match "user|remote|branch" }

# Show file content (PowerShell way)
Get-Content package.json | Select-String -Pattern "name|version|scripts"

# Check if files exist
Test-Path "README.md"
Test-Path "package.json"
Test-Path "src/components"

# List directory contents with details
Get-ChildItem -Force

# Check file sizes
Get-ChildItem -Recurse -File | Measure-Object -Property Length -Sum

# Find files by pattern
Get-ChildItem -Recurse -Include "*.tsx", "*.ts" | Select-Object Name, Directory
```

## 🎯 Final Commit Preparation (PowerShell)

```powershell
# Complete verification and commit sequence
Write-Host "=== Final Commit Verification ===" -ForegroundColor Cyan

# 1. Check repository status
Write-Host "Checking repository status..." -ForegroundColor Yellow
git status --porcelain

# 2. Add all files
Write-Host "Adding files to staging..." -ForegroundColor Yellow
git add .

# 3. Show what will be committed
Write-Host "Files to be committed:" -ForegroundColor Yellow
git diff --cached --name-only

# 4. Run quality checks
Write-Host "Running quality checks..." -ForegroundColor Yellow
npm run pre-commit

# 5. Ready to commit
Write-Host "Ready for commit!" -ForegroundColor Green
Write-Host "Use: git commit -m 'your commit message'" -ForegroundColor White
```

## 🔧 Troubleshooting Commands (PowerShell)

```powershell
# Check Node.js and npm versions
node --version
npm --version

# Check if Git is configured
git config --global user.name
git config --global user.email

# Verify project dependencies
npm list --depth=0

# Check for PowerShell execution policy (if needed)
Get-ExecutionPolicy

# Test network connectivity (if needed)
Test-NetConnection github.com -Port 443
```

## 📝 Note for Windows Users

In Windows PowerShell:

- Use `Select-String` instead of `grep`
- Use `Where-Object` for filtering
- Use `Write-Host` for colored output
- Use `Get-ChildItem` instead of `ls`
- Use `Test-Path` to check file existence

All commands above are tested for Windows PowerShell compatibility!

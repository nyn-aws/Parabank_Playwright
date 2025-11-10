# ParaBank Playwright Test Automation

A comprehensive end-to-end test automation framework for the [ParaBank Demo Application](https://parabank.parasoft.com/) built with Playwright and TypeScript.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Test Scenarios](#test-scenarios)
- [Running Tests](#running-tests)
- [Configuration](#configuration)
- [Reporting](#reporting)

## 🎯 Overview

This project demonstrates professional test automation practices using Playwright to test the ParaBank banking application. It includes 21 comprehensive test scenarios covering user registration, account management, fund transfers, bill payments, and transaction searches.

## ✨ Features

- **21 Comprehensive Test Scenarios** - Full coverage of ParaBank functionality
- **TypeScript** - Strongly typed code for better maintainability
- **Page Object Model** - Organized locator declarations with reusable components
- **Dynamic Test Data** - Uses Faker.js for realistic test data generation
- **Parallel Execution** - Runs tests concurrently for faster feedback
- **Multiple Reporters** - HTML and JSON reports with screenshots and videos
- **Retry Mechanism** - Automatic retry on failure for flaky test handling
- **CI/CD Ready** - GitHub Actions workflow included
- **Cross-Browser Testing** - Supports Chromium, Firefox, and WebKit

## 📦 Prerequisites

- **Node.js** - Version 18 or higher
- **npm** - Version 10 or higher
- **Git** - For cloning the repository

## 🚀 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Parabank_Playwright
```

2. Install dependencies:

```bash
npm install
```

3. Install Playwright browsers:

```bash
npx playwright install
```

## 📁 Project Structure

```
Parabank_Playwright/
├── .github/
│   └── workflows/
│       └── playwright.yml          # CI/CD pipeline configuration
├── tests/
│   ├── test_homepage.spec.ts       # Main test suite (21 scenarios)
│   └── legacy/                     # Legacy test files
├── playwright-report/              # HTML test reports
├── test-results/                   # Test execution artifacts
├── results/                        # Custom JSON reports
├── playwright.config.ts            # Playwright configuration
├── tsconfig.json                   # TypeScript configuration
├── package.json                    # Project dependencies
└── README.md                       # This file
```

## 🧪 Test Scenarios

### Suite 1: ParaBank Homepage Validation (4 Scenarios)

1. **Homepage Title Verification** - Validates correct page title
2. **Homepage URL Verification** - Ensures correct URL pattern
3. **Homepage Elements Visibility** - Checks all UI elements are present
4. **Registration Page Elements** - Validates registration form elements

### Suite 2: User Registration & Account Management (17 Scenarios)

**User Authentication (4 scenarios)** 5. User Registration with Valid Data 6. Open New Account Page Elements 7. Create New Savings Account and Validate Details 8. User Registration with Existing Username (Negative) 9. User Login with Valid Credentials 10. User Login with Incorrect Password (Negative) 11. Forgot Login Info - Retrieve Credentials

**Account Operations (3 scenarios)** 12. Check Default Account and Balance 13. Transfer Funds Between Accounts 14. Bill Pay - Submit Payment and Validate

**Transaction Management (2 scenarios)** 15. Find Transactions by Various Criteria 16. Update Contact Info with Valid/Invalid Data

**End-to-End Workflows (4 scenarios)** 17. Update Contact Info, Logout, and Retrieve Login 18. Complete End-to-End ParaBank Workflow 19. Verify All Navigation Links 20. User Registration with Missing Fields (Negative) 21. User Login with Invalid Credentials (Negative)

## 🏃 Running Tests

### All Tests

```bash
npm test
```

### Headed Mode (Watch Tests Run)

```bash
npm run test:headed
```

### Debug Mode

```bash
npm run test:debug
```

### Specific Browser

```bash
npm run test:chrome    # Chromium only
npm run test:firefox   # Firefox only
npm run test:webkit    # WebKit only
```

### UI Mode (Interactive)

```bash
npm run ui
```

### Filter Tests by Name

```bash
npm run test:grep "User Login"
```

### View Reports

```bash
npm run test:report
```

## ⚙️ Configuration

### Playwright Config (`playwright.config.ts`)

Key settings:

- **Workers**: 6 parallel workers for faster execution
- **Retries**: 3 retry attempts on failure
- **Timeout**: 30 seconds per test
- **Base URL**: https://parabank.parasoft.com/
- **Screenshots**: Captured only on failure
- **Videos**: Retained only on failure
- **Trace**: Retained only on failure

### TypeScript Config (`tsconfig.json`)

- Strict type checking enabled
- Modern ES features (ESNext)
- CommonJS module system
- Path aliases for cleaner imports

## 📊 Reporting

Test results are generated in multiple formats:

### HTML Report

- Located in `playwright-report/index.html`
- Interactive report with test execution details
- Screenshots and videos attached to failures
- View with: `npm run test:report`

### JSON Report

- Located in `results/report.json`
- Machine-readable format for CI/CD integration

### Console Output

- Real-time test execution status
- Summary of passed/failed tests

## 🎯 Best Practices Implemented

### Code Organization

- **Constants at Top** - All text strings defined as constants for easy maintenance
- **Locator Declarations** - Centralized locator management in module-level variables
- **Initialization in beforeEach** - Locators initialized before each test
- **Descriptive Naming** - Clear, self-documenting variable and function names

### Test Structure

- **Scenario Numbering** - Each test clearly numbered and described
- **Step Comments** - Detailed step-by-step documentation
- **Assertions** - Comprehensive validation of expected behaviors
- **Test Data Generation** - Dynamic data using Faker.js to avoid conflicts

### Maintainability

- **DRY Principle** - No duplicate code; reusable functions
- **Type Safety** - TypeScript for catching errors at compile time
- **Error Handling** - Proper error messages and validations
- **Git Ignore** - Excludes artifacts and dependencies from version control

## 🔧 Troubleshooting

### Tests Failing Due to Timeouts

- Increase timeout in `playwright.config.ts`
- Check network connectivity to ParaBank server

### Browser Not Found

```bash
npx playwright install
```

### Port Conflicts

- ParaBank server might be down or slow
- Try running tests with fewer workers

### Screenshots Not Captured

- Ensure `screenshot: "only-on-failure"` is set in config
- Check `test-results/` directory for artifacts

---

**Happy Testing! 🚀**

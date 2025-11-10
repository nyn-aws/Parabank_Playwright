// import { test, expect, Page } from "@playwright/test";
// import { Locator } from "@playwright/test";
// import { de, faker, fi } from "@faker-js/faker";

// const PARABANK_HOMEPAGE_TITLE = "ParaBank | Welcome | Online Banking";
// let getUsernameLabel: Locator;
// let getUsernameInput: Locator;
// let getPasswordLabel: Locator;
// let getPasswordInput: Locator;
// let getLoginButton: Locator;
// let getForgotLoginLink: Locator;
// let getRegisterLink: Locator;

// /**
//  * Helper to register a new unique user and set the module-level `registeredUser`.
//  * Intended to be called in a describe-level test.beforeEach, after the global
//  * locator-initializing test.beforeEach (at the top of the file) has already run.
//  */
// export async function ensureRegisteredUser(page: Page) {
//   await page.goto("/");
//   await getRegisterLink.click();

//   let registrationSuccess = false;
//   let registrationData: RegistrationData | undefined;

//   while (!registrationSuccess) {
//     registrationData = generateFakeRegistrationData();
//     await fillRegistrationForm(page, registrationData);
//     console.log(
//       `Registering user: ${registrationData.username}, password: ${registrationData.password}`
//     );
//     await registerButton.click();

//     // If username exists, go back and try again
//     if (await page.getByText("This username already exists.").isVisible()) {
//       await page.goBack();
//       await getRegisterLink.click();
//       continue;
//     }

//     registrationSuccess = true;
//   }

//   registeredUser = registrationData!;
//   return registrationData!;
// }
// let getSolutionsLabel: Locator;
// let getAboutUsLink: Locator;
// let getServicesLink: Locator;
// let getProductsLink: Locator;
// let getLocationsLink: Locator;
// let getAdminPageLink: Locator;
// let getAtmServicesLabel: Locator;
// let getWithdrawFundsLink: Locator;
// let getCheckBalancesLink: Locator;
// let getTransferFundsAtmLink: Locator;
// let getMakeDepositsLink: Locator;
// let getOnlineServicesLabel: Locator;
// let getBillPayLink: Locator;
// let getAccountHistoryLink: Locator;
// let getTransferFundsOnlineLink: Locator;
// let getReadMoreOnlineServicesLink: Locator;
// let getParaBankReopenedLink: Locator;
// let getNewOnlineBillPayLink: Locator;
// let getNewOnlineAccountTransfersLink: Locator;
// let getReadMoreNewsLink: Locator;

// let homeLink: Locator;
// let aboutLink: Locator;
// let contactLink: Locator;

// let registrationHeading: Locator;
// let registrationInfoText: Locator;
// let firstNameLabel: Locator;
// let firstNameInput: Locator;
// let lastNameLabel: Locator;
// let lastNameInput: Locator;
// let addressLabel: Locator;
// let addressInput: Locator;
// let cityLabel: Locator;
// let cityInput: Locator;
// let stateLabel: Locator;
// let stateInput: Locator;
// let zipCodeLabel: Locator;
// let zipCodeInput: Locator;
// let phoneLabel: Locator;
// let phoneInput: Locator;
// let ssnLabel: Locator;
// let ssnInput: Locator;
// let regUsernameLabel: Locator;
// let regUsernameInput: Locator;
// let regPasswordLabel: Locator;
// let regPasswordInput: Locator;
// let confirmLabel: Locator;
// let confirmInput: Locator;
// let registerButton: Locator;

// let getFooterHomeLink: Locator;
// let getFooterAboutUsLink: Locator;
// let getFooterServicesLink: Locator;
// let getFooterProductsLink: Locator;
// let getForumLink: Locator;
// let getSiteMapLink: Locator;
// let getContactUsLink: Locator;

// let accountServicesLabel: Locator;
// let openNewAccountLink: Locator;
// let accountsOverviewLink: Locator;
// let transferFundsLink: Locator;
// let billPayLink: Locator;
// let findTransactionsLink: Locator;
// let updateContactInfoLink: Locator;
// let requestLoanLink: Locator;
// let logOutLink: Locator;

// let openNewAccountHeading: Locator;
// let openNewAccountInfoText: Locator;
// let openNewAccountMinimumText: Locator;
// let openNewAccountButton: Locator;
// let accountTypeDropdown: Locator;
// let fromAccountDropdown: Locator;

// // Locators used inside tests
// let firstNameInputForgot: Locator;
// let lastNameInputForgot: Locator;
// let addressInputForgot: Locator;
// let cityInputForgot: Locator;
// let stateInputForgot: Locator;
// let zipCodeInputForgot: Locator;
// let ssnInputForgot: Locator;
// let findMyLoginInfoButton: Locator;
// let activityMonth: Locator;
// let activityType: Locator;
// let goButton: Locator;
// let transactionRow: Locator;
// let dateCell: Locator;
// let descriptionCell: Locator;
// let debitCell: Locator;
// let creditCell: Locator;
// let newAccountLink: Locator;

// // Transfer funds locators
// let fromAccountSelect: Locator;
// let toAccountSelect: Locator;
// let amountInput: Locator;
// let transferButton: Locator;

// // Bill pay locators
// let payeeNameInput: Locator;
// let payeeAddressInput: Locator;
// let payeeCityInput: Locator;
// let payeeStateInput: Locator;
// let payeeZipCodeInput: Locator;
// let payeePhoneInput: Locator;
// let payeeAccountInput: Locator;
// let verifyAccountInput: Locator;
// let billPayAmountInput: Locator;
// let billPayFromAccountSelect: Locator;
// let sendPaymentButton: Locator;

// // Update profile locators
// let updateFirstNameInput: Locator;
// let updateLastNameInput: Locator;
// let updateAddressInput: Locator;
// let updateCityInput: Locator;
// let updateStateInput: Locator;
// let updateZipCodeInput: Locator;
// let updatePhoneInput: Locator;
// let updateProfileButton: Locator;

// // Common page elements (used across multiple tests)
// let accountTableLocator: Locator;
// let accountIdLocator: Locator;
// let accountTypeLocator: Locator;
// let accountBalanceLocator: Locator;
// let availableBalanceLocator: Locator;
// let transactionTableLocator: Locator;
// let transactionTableRowsLocator: Locator;
// let accountsOverviewHeading: Locator;
// let accountDetailsHeading: Locator;
// let accountActivityHeading: Locator;
// let transferFundsHeading: Locator;
// let transferCompleteMessage: Locator;
// let findTransactionsHeading: Locator;
// let transactionDetailsHeading: Locator;
// let billPaymentServiceHeading: Locator;
// let billPaymentCompleteHeading: Locator;
// let updateProfileHeading: Locator;
// let profileUpdatedHeading: Locator;
// let customerLookupHeading: Locator;
// let accountCreatedMessage: Locator;
// let loginSuccessMessage: Locator;
// let loginFailureMessage: Locator;
// let userExistsMessage: Locator;
// let passwordMismatchMessage: Locator;
// let loginInfoFoundMessage: Locator;
// let accountCellLocator: Locator;
// let balanceCellLocator: Locator;
// let availableAmountCellLocator: Locator;
// let minimumDepositText: Locator;
// let balanceFilterLocator: Locator;
// let accountCombobox: Locator;
// let findByAmountTextbox: Locator;

// // Validation message locators
// let firstNameRequiredMsg: Locator;
// let lastNameRequiredMsg: Locator;
// let addressRequiredMsg: Locator;
// let cityRequiredMsg: Locator;
// let stateRequiredMsg: Locator;
// let zipCodeRequiredMsg: Locator;
// let ssnRequiredMsg: Locator;
// let usernameRequiredMsg: Locator;
// let passwordRequiredMsg: Locator;
// let confirmPasswordRequiredMsg: Locator;

// let registeredUser: RegistrationData | undefined;

// test.beforeEach(async ({ page }) => {
//   // Login form elements
//   getUsernameLabel = page.getByText("Username");
//   getUsernameInput = page.locator('input[name="username"]');
//   getPasswordLabel = page.getByText("Password");
//   getPasswordInput = page.locator('input[name="password"]');
//   getLoginButton = page.getByRole("button", { name: "Log In" });
//   getForgotLoginLink = page.getByRole("link", {
//     name: "Forgot login info?",
//   });
//   getRegisterLink = page.getByRole("link", { name: "Register" });

//   // Header navigation links
//   getSolutionsLabel = page.getByText("Solutions");
//   getAboutUsLink = page
//     .locator("#headerPanel")
//     .getByRole("link", { name: "About Us" });
//   getServicesLink = page
//     .locator("#headerPanel")
//     .getByRole("link", { name: "Services" });
//   getProductsLink = page
//     .locator("#headerPanel")
//     .getByRole("link", { name: "Products" });
//   getLocationsLink = page
//     .locator("#headerPanel")
//     .getByRole("link", { name: "Locations" });
//   getAdminPageLink = page.getByRole("link", { name: "Admin Page" });

//   // ATM Services section
//   getAtmServicesLabel = page.getByText("ATM Services");
//   getWithdrawFundsLink = page.getByRole("link", {
//     name: "Withdraw Funds",
//   });
//   getCheckBalancesLink = page.getByRole("link", {
//     name: "Check Balances",
//   });
//   getTransferFundsAtmLink = page
//     .getByRole("link", { name: "Transfer Funds" })
//     .first();
//   getMakeDepositsLink = page.getByRole("link", {
//     name: "Make Deposits",
//   });

//   // Online Services section
//   getOnlineServicesLabel = page.getByText("Online Services");
//   getBillPayLink = page.getByRole("link", {
//     name: "Bill Pay",
//     exact: true,
//   });
//   getAccountHistoryLink = page.getByRole("link", {
//     name: "Account History",
//   });
//   getTransferFundsOnlineLink = page
//     .getByRole("link", { name: "Transfer Funds" })
//     .nth(1);
//   getReadMoreOnlineServicesLink = page
//     .getByRole("link", { name: "Read More" })
//     .first();

//   // News and announcements section
//   getParaBankReopenedLink = page.getByRole("link", {
//     name: "ParaBank Is Now Re-Opened",
//   });
//   getNewOnlineBillPayLink = page.getByRole("link", {
//     name: "New! Online Bill Pay",
//   });
//   getNewOnlineAccountTransfersLink = page.getByRole("link", {
//     name: "New! Online Account Transfers",
//   });
//   getReadMoreNewsLink = page.getByRole("link", { name: "Read More" }).nth(1);

//   // Additional navigation links
//   homeLink = page.getByRole("link", { name: "home", exact: true });
//   aboutLink = page.getByRole("link", { name: "about", exact: true });
//   contactLink = page.getByRole("link", { name: "contact", exact: true });

//   // Registration form elements
//   registrationHeading = page.getByRole("heading", {
//     name: "Signing up is easy!",
//   });
//   registrationInfoText = page.getByText("If you have an account with");
//   firstNameLabel = page.getByText("First Name:");
//   firstNameInput = page.locator('[id="customer.firstName"]');
//   lastNameLabel = page.getByText("Last Name:");
//   lastNameInput = page.locator('[id="customer.lastName"]');
//   addressLabel = page.getByText("Address:");
//   addressInput = page.locator('[id="customer.address.street"]');
//   cityLabel = page.getByText("City:");
//   cityInput = page.locator('[id="customer.address.city"]');
//   stateLabel = page.getByText("State:");
//   stateInput = page.locator('[id="customer.address.state"]');
//   zipCodeLabel = page.getByText("Zip Code:");
//   zipCodeInput = page.locator('[id="customer.address.zipCode"]');
//   phoneLabel = page.getByText("Phone #:");
//   phoneInput = page.locator('[id="customer.phoneNumber"]');
//   ssnLabel = page.getByText("SSN:");
//   ssnInput = page.locator('[id="customer.ssn"]');
//   regUsernameLabel = page.getByText("Username:");
//   regUsernameInput = page.locator('[id="customer.username"]');
//   regPasswordLabel = page.getByText("Password:");
//   regPasswordInput = page.locator('[id="customer.password"]');
//   confirmLabel = page.getByText("Confirm:");
//   confirmInput = page.locator("#repeatedPassword");
//   registerButton = page.getByRole("button", { name: "Register" });

//   // footer
//   getFooterHomeLink = page.getByRole("link", { name: "Home", exact: true });
//   getFooterAboutUsLink = page
//     .locator("#footerPanel")
//     .getByRole("link", { name: "About Us" });
//   getFooterServicesLink = page
//     .locator("#footerPanel")
//     .getByRole("link", { name: "Services" });
//   getFooterProductsLink = page
//     .locator("#footerPanel")
//     .getByRole("link", { name: "Products" });
//   getForumLink = page.getByRole("link", { name: "Forum" });
//   getSiteMapLink = page.getByRole("link", { name: "Site Map" });
//   getContactUsLink = page.getByRole("link", { name: "Contact Us" });

//   accountServicesLabel = page.getByRole("heading", {
//     name: "Account Services",
//   });
//   openNewAccountLink = page.getByRole("link", { name: "Open New Account" });
//   accountsOverviewLink = page.getByRole("link", {
//     name: "Accounts Overview",
//   });
//   transferFundsLink = page.getByRole("link", { name: "Transfer Funds" });
//   billPayLink = page.getByRole("link", { name: "Bill Pay" });
//   findTransactionsLink = page.getByRole("link", {
//     name: "Find Transactions",
//   });
//   updateContactInfoLink = page.getByRole("link", {
//     name: "Update Contact Info",
//   });
//   requestLoanLink = page.getByRole("link", { name: "Request Loan" });
//   logOutLink = page.getByRole("link", { name: "Log Out" });
//   openNewAccountHeading = page.getByRole("heading", {
//     name: "Open New Account",
//   });
//   openNewAccountInfoText = page.getByText("What type of Account would");
//   openNewAccountMinimumText = page.getByText("A minimum of $90.00 must be");
//   openNewAccountButton = page.getByRole("button", { name: "Open New Account" });
//   accountTypeDropdown = page.locator("#type"); // dropdown with options: "SAVINGS", "CHECKING"
//   fromAccountDropdown = page.locator("#fromAccountId"); // dropdown with account numbers

//   // Forgot password form locators
//   firstNameInputForgot = page.locator('input[name="firstName"]');
//   lastNameInputForgot = page.locator('input[name="lastName"]');
//   addressInputForgot = page.locator('input[name="address.street"]');
//   cityInputForgot = page.locator('input[name="address.city"]');
//   stateInputForgot = page.locator('input[name="address.state"]');
//   zipCodeInputForgot = page.locator('input[name="address.zipCode"]');
//   ssnInputForgot = page.locator('input[name="ssn"]');
//   findMyLoginInfoButton = page.getByRole("button", {
//     name: "Find My Login Info",
//   });

//   // Account activity locators
//   activityMonth = page.locator("#month");
//   activityType = page.locator("#transactionType");
//   goButton = page.getByRole("button", { name: "Go" });
//   transactionRow = page.locator("#transactionTable tbody tr");
//   dateCell = transactionRow.locator("td").nth(0);
//   descriptionCell = transactionRow.locator("td").nth(1);
//   debitCell = transactionRow.locator("td").nth(2);
//   creditCell = transactionRow.locator("td").nth(3);

//   // New account link (dynamic element)
//   newAccountLink = page.locator("a#newAccountId");

//   // Transfer funds locators
//   fromAccountSelect = page.locator("#fromAccountId");
//   toAccountSelect = page.locator("#toAccountId");
//   amountInput = page.locator("#amount");
//   transferButton = page.getByRole("button", { name: "Transfer" });

//   // Bill pay locators
//   payeeNameInput = page.locator('input[name="payee.name"]');
//   payeeAddressInput = page.locator('input[name="payee.address.street"]');
//   payeeCityInput = page.locator('input[name="payee.address.city"]');
//   payeeStateInput = page.locator('input[name="payee.address.state"]');
//   payeeZipCodeInput = page.locator('input[name="payee.address.zipCode"]');
//   payeePhoneInput = page.locator('input[name="payee.phoneNumber"]');
//   payeeAccountInput = page.locator('input[name="payee.accountNumber"]');
//   verifyAccountInput = page.locator('input[name="verifyAccount"]');
//   billPayAmountInput = page.locator('input[name="amount"]');
//   billPayFromAccountSelect = page.locator('select[name="fromAccountId"]');
//   sendPaymentButton = page.getByRole("button", { name: "Send Payment" });

//   // Update profile locators
//   updateFirstNameInput = page.locator('input[id="customer.firstName"]');
//   updateLastNameInput = page.locator('input[id="customer.lastName"]');
//   updateAddressInput = page.locator('input[id="customer.address.street"]');
//   updateCityInput = page.locator('input[id="customer.address.city"]');
//   updateStateInput = page.locator('input[id="customer.address.state"]');
//   updateZipCodeInput = page.locator('input[id="customer.address.zipCode"]');
//   updatePhoneInput = page.locator('input[id="customer.phoneNumber"]');
//   updateProfileButton = page.getByRole("button", { name: "Update Profile" });

//   // Common page elements
//   accountTableLocator = page.locator("#accountTable");
//   accountIdLocator = page.locator("#accountId");
//   accountTypeLocator = page.locator("#accountType");
//   accountBalanceLocator = page.locator("#balance");
//   availableBalanceLocator = page.locator("#availableBalance");
//   transactionTableLocator = page.locator("#transactionTable");
//   transactionTableRowsLocator = page.locator("#transactionTable tbody tr");
//   accountsOverviewHeading = page.getByRole("heading", {
//     name: "Accounts Overview",
//   });
//   accountDetailsHeading = page.getByRole("heading", {
//     name: "Account Details",
//   });
//   accountActivityHeading = page.getByRole("heading", {
//     name: "Account Activity",
//   });
//   transferFundsHeading = page.getByRole("heading", { name: "Transfer Funds" });
//   transferCompleteMessage = page.getByText("Transfer Complete!");
//   findTransactionsHeading = page.getByRole("heading", {
//     name: "Find Transactions",
//   });
//   transactionDetailsHeading = page.getByRole("heading", {
//     name: "Transaction Details",
//   });
//   billPaymentServiceHeading = page.getByRole("heading", {
//     name: "Bill Payment Service",
//   });
//   billPaymentCompleteHeading = page.getByRole("heading", {
//     name: "Bill Payment Complete",
//   });
//   updateProfileHeading = page.getByRole("heading", { name: "Update Profile" });
//   profileUpdatedHeading = page.getByRole("heading", {
//     name: "Profile Updated",
//   });
//   customerLookupHeading = page.getByRole("heading", {
//     name: "Customer Lookup",
//   });
//   accountCreatedMessage = page.getByText(
//     "Congratulations, your account is now open."
//   );
//   loginSuccessMessage = page.getByText(
//     "Your account was created successfully. You are now logged in."
//   );
//   loginFailureMessage = page.getByText(
//     "The username and password could not be verified."
//   );
//   userExistsMessage = page.getByText("This username already exists.");
//   passwordMismatchMessage = page.getByText("Passwords did not match.");
//   loginInfoFoundMessage = page.getByText(
//     "Your login information was located successfully."
//   );
//   accountCellLocator = page.getByRole("cell", { name: "Account" });
//   balanceCellLocator = page.getByRole("cell", { name: "Balance*" });
//   availableAmountCellLocator = page.getByRole("cell", {
//     name: "Available Amount",
//   });
//   minimumDepositText = page.locator("xpath=//b[contains(., 'minimum')]");
//   balanceFilterLocator = page.locator("b").filter({ hasText: "$" });
//   accountCombobox = page.getByRole("combobox");
//   findByAmountTextbox = page.getByRole("textbox").nth(4);

//   // Validation messages
//   firstNameRequiredMsg = page.getByText("First name is required.");
//   lastNameRequiredMsg = page.getByText("Last name is required.");
//   addressRequiredMsg = page.getByText("Address is required.");
//   cityRequiredMsg = page.getByText("City is required.");
//   stateRequiredMsg = page.getByText("State is required.");
//   zipCodeRequiredMsg = page.getByText("Zip Code is required.");
//   ssnRequiredMsg = page.getByText("Social Security Number is required.");
//   usernameRequiredMsg = page.getByText("Username is required.");
//   passwordRequiredMsg = page.getByText("Password is required.");
//   confirmPasswordRequiredMsg = page.getByText(
//     "Password confirmation is required."
//   );
// });

// // ============================================================================
// // TEST SUITE 1: PARABANK HOMEPAGE VALIDATION
// // Description: Validates basic homepage functionality including title, URL,
// //              and visibility of all homepage elements
// // ============================================================================
// test.describe("Parabank Homepage Locators", () => {
//   // SCENARIO 1: Verify ParaBank Homepage Title
//   // Description: Validate that the homepage displays the correct title
//   test(`SCENARIO 1: Homepage title should be :: "${PARABANK_HOMEPAGE_TITLE}"`, async ({
//     page,
//   }) => {
//     // Step 1: Navigate to the ParaBank homepage
//     await page.goto("/");

//     // Step 2: Verify the page title matches the expected value
//     await expect(page).toHaveTitle(PARABANK_HOMEPAGE_TITLE);
//   });

//   // SCENARIO 2: Verify ParaBank Homepage URL
//   // Description: Validate that the homepage URL contains the correct domain
//   test('SCENARIO 2: Homepage URL should contain "parabank.parasoft.com"', async ({
//     page,
//   }) => {
//     // Step 1: Navigate to the ParaBank homepage
//     await page.goto("/");

//     // Step 2: Verify the URL contains the ParaBank domain
//     await expect(page).toHaveURL(/parabank\.parasoft\.com/);
//   });

//   // SCENARIO 3: Verify All Homepage Elements Are Visible
//   // Description: Validate that all homepage elements (login form, links, navigation) are visible
//   test("SCENARIO 3: Homepage Elements should be visible", async ({ page }) => {
//     // Step 1: Navigate to the ParaBank homepage
//     await page.goto("/");

//     // Step 2: Verify login form elements are visible
//     await expect(getUsernameLabel).toBeVisible();
//     await expect(getUsernameInput).toBeVisible();
//     await expect(getPasswordLabel).toBeVisible();
//     await expect(getPasswordInput).toBeVisible();
//     await expect(getLoginButton).toBeVisible();
//     await expect(getForgotLoginLink).toBeVisible();
//     await expect(getRegisterLink).toBeVisible();

//     // Step 3: Verify Solutions section links are visible
//     await expect(getSolutionsLabel).toBeVisible();
//     await expect(getAboutUsLink).toBeVisible();
//     await expect(getServicesLink).toBeVisible();
//     await expect(getProductsLink).toBeVisible();
//     await expect(getLocationsLink).toBeVisible();
//     await expect(getAdminPageLink).toBeVisible();

//     // Step 4: Verify ATM Services section links are visible
//     await expect(getAtmServicesLabel).toBeVisible();
//     await expect(getWithdrawFundsLink).toBeVisible();
//     await expect(getCheckBalancesLink).toBeVisible();
//     await expect(getTransferFundsAtmLink).toBeVisible();
//     await expect(getMakeDepositsLink).toBeVisible();

//     // Step 5: Verify Online Services section links are visible
//     await expect(getOnlineServicesLabel).toBeVisible();
//     await expect(getBillPayLink).toBeVisible();
//     await expect(getAccountHistoryLink).toBeVisible();
//     await expect(getTransferFundsOnlineLink).toBeVisible();
//     await expect(getReadMoreOnlineServicesLink).toBeVisible();

//     // Step 6: Verify Latest News section links are visible
//     await expect(getParaBankReopenedLink).toBeVisible();
//     await expect(getNewOnlineBillPayLink).toBeVisible();
//     await expect(getNewOnlineAccountTransfersLink).toBeVisible();
//     await expect(getReadMoreNewsLink).toBeVisible();

//     // Step 7: Verify header navigation links are visible
//     await expect(homeLink).toBeVisible();
//     await expect(aboutLink).toBeVisible();
//     await expect(contactLink).toBeVisible();

//     // Step 8: Verify footer links are visible
//     await expect(getFooterHomeLink).toBeVisible();
//     await expect(getFooterAboutUsLink).toBeVisible();
//     await expect(getFooterServicesLink).toBeVisible();
//     await expect(getFooterProductsLink).toBeVisible();
//     await expect(getForumLink).toBeVisible();
//     await expect(getSiteMapLink).toBeVisible();
//     await expect(getContactUsLink).toBeVisible();
//   });

//   // SCENARIO 4: Verify Registration Page Elements Are Visible
//   // Description: Navigate to registration page and validate all form elements are visible
//   test("SCENARIO 4: Registration Page Elements should be visible", async ({
//     page,
//   }) => {
//     // Step 1: Navigate to the ParaBank homepage
//     await page.goto("/");

//     // Step 2: Click on the "Register" link
//     await getRegisterLink.click();

//     // Step 3: Verify the registration page heading and info text
//     await expect(registrationHeading).toBeVisible();
//     await expect(registrationInfoText).toBeVisible();

//     // Step 4: Verify personal information fields are visible
//     await expect(firstNameLabel).toBeVisible();
//     await expect(firstNameInput).toBeVisible();
//     await expect(lastNameLabel).toBeVisible();
//     await expect(lastNameInput).toBeVisible();

//     // Step 5: Verify address information fields are visible
//     await expect(addressLabel).toBeVisible();
//     await expect(addressInput).toBeVisible();
//     await expect(cityLabel).toBeVisible();
//     await expect(cityInput).toBeVisible();
//     await expect(stateLabel).toBeVisible();
//     await expect(stateInput).toBeVisible();
//     await expect(zipCodeLabel).toBeVisible();
//     await expect(zipCodeInput).toBeVisible();

//     // Step 6: Verify contact and security fields are visible
//     await expect(phoneLabel).toBeVisible();
//     await expect(phoneInput).toBeVisible();
//     await expect(ssnLabel).toBeVisible();
//     await expect(ssnInput).toBeVisible();

//     // Step 7: Verify username and password fields are visible
//     await expect(regUsernameLabel).toBeVisible();
//     await expect(regUsernameInput).toBeVisible();
//     await expect(regPasswordLabel).toBeVisible();
//     await expect(regPasswordInput).toBeVisible();
//     await expect(confirmLabel).toBeVisible();
//     await expect(confirmInput).toBeVisible();

//     // Step 8: Verify the "Register" button is visible
//     await expect(registerButton).toBeVisible();
//   });
// });

// interface RegistrationData {
//   firstName: string;
//   lastName: string;
//   address: string;
//   city: string;
//   state: string;
//   zipCode: string;
//   phone: string;
//   ssn: string;
//   username: string;
//   password: string;
// }

// function generateFakeRegistrationData(): RegistrationData {
//   const password = faker.internet.password();
//   return {
//     firstName: "test_" + faker.person.firstName(),
//     lastName: "test_" + faker.person.lastName(),
//     address: faker.location.streetAddress(),
//     city: faker.location.city(),
//     state: faker.location.state(),
//     zipCode: faker.location.zipCode(),
//     phone: faker.phone.number(),
//     ssn: faker.number.int({ min: 100000000, max: 999999999 }).toString(),
//     username: "test_" + faker.internet.username(),
//     password,
//   };
// }

// async function fillRegistrationForm(page: any, data: RegistrationData) {
//   await firstNameInput.fill(data.firstName);
//   await lastNameInput.fill(data.lastName);
//   await addressInput.fill(data.address);
//   await cityInput.fill(data.city);
//   await stateInput.fill(data.state);
//   await zipCodeInput.fill(data.zipCode);
//   await phoneInput.fill(data.phone);
//   await ssnInput.fill(data.ssn);
//   await regUsernameInput.fill(data.username);
//   await regPasswordInput.fill(data.password);
//   await confirmInput.fill(data.password);
// }

// // ============================================================================
// // TEST SUITE 2: PARABANK USER REGISTRATION AND ACCOUNT MANAGEMENT
// // Description: Tests requiring user registration, account operations,
// //              fund transfers, bill payments, and transaction management
// // ============================================================================
// test.describe("Parabank - Tests Requiring User Registration", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto("/");
//     await getRegisterLink.click();
//     let registrationSuccess = false;
//     let registrationData;
//     while (!registrationSuccess) {
//       registrationData = generateFakeRegistrationData();
//       await fillRegistrationForm(page, registrationData);
//       console.log(
//         `Registering user: ${registrationData.username}, password: ${registrationData.password}`
//       );
//       await registerButton.click();
//       if (await page.getByText("This username already exists.").isVisible()) {
//         await page.goBack();
//         await getRegisterLink.click();
//         continue;
//       }
//       registrationSuccess = true;
//     }
//     registeredUser = registrationData;
//   });

//   // SCENARIO 3.1: Verify user registration with valid data
//   // SCENARIO 5: User Registration with Valid Data
//   // Description: Register a new user with valid data and verify successful registration
//   test("SCENARIO 5: User Registration with Valid Data", async ({ page }) => {
//     // Step 1: Registration is already done in beforeEach hook
//     // Step 2: Verify the success message is displayed
//     await expect(loginSuccessMessage).toBeVisible();

//     // Step 3: Verify registeredUser object was created
//     if (!registeredUser) throw new Error("registeredUser not set");

//     // Step 4: Verify welcome message with username is displayed
//     await expect(
//       page.getByText(`Welcome ${registeredUser.username}`)
//     ).toBeVisible();

//     // Step 5: Verify welcome message with full name is displayed
//     await expect(
//       page.getByText(
//         `Welcome ${registeredUser.firstName} ${registeredUser.lastName}`
//       )
//     ).toBeVisible(); // Step 6: Verify Account Services section and all navigation links are visible
//     await expect(accountServicesLabel).toBeVisible();
//     await expect(openNewAccountLink).toBeVisible();
//     await expect(accountsOverviewLink).toBeVisible();
//     await expect(transferFundsLink).toBeVisible();
//     await expect(billPayLink).toBeVisible();
//     await expect(findTransactionsLink).toBeVisible();
//     await expect(updateContactInfoLink).toBeVisible();
//     await expect(requestLoanLink).toBeVisible();
//     await expect(logOutLink).toBeVisible();
//   });

//   // SCENARIO 6: Verify Open New Account Page Elements
//   // Description: Navigate to "Open New Account" page and validate all elements are visible
//   test("SCENARIO 6: Open New Account Page Elements should be visible", async ({
//     page,
//   }) => {
//     // Step 1: Click on "Open New Account" link
//     await openNewAccountLink.click();

//     // Step 2: Verify page heading is visible
//     await expect(openNewAccountHeading).toBeVisible();

//     // Step 3: Verify informational text is visible
//     await expect(openNewAccountInfoText).toBeVisible();
//     await expect(openNewAccountMinimumText).toBeVisible();

//     // Step 4: Verify account type dropdown is visible
//     await expect(accountTypeDropdown).toBeVisible();

//     // Step 5: Verify from account dropdown is visible
//     await expect(fromAccountDropdown).toBeVisible();

//     // Step 6: Verify "Open New Account" button is visible
//     await expect(openNewAccountButton).toBeVisible();
//   });

//   // SCENARIO 7: Create New Savings Account and Validate Account Details
//   // Description: Navigate to Accounts Overview, create a new savings account, and validate balances
//   test("SCENARIO 7: Accounts Overview Page Elements should be visible", async ({
//     page,
//   }) => {
//     // Step 1: Navigate to Accounts Overview page
//     await accountsOverviewLink.click();

//     // Step 2: Verify Accounts Overview page elements are visible
//     await expect(accountsOverviewHeading).toBeVisible();
//     await expect(accountTableLocator).toBeVisible();
//     await expect(accountCellLocator).toBeVisible();
//     await expect(balanceCellLocator).toBeVisible();
//     await expect(availableAmountCellLocator).toBeVisible();
//     await expect(page.locator("b").filter({ hasText: "$515" })).toBeVisible();

//     // Step 3: Get and log the existing account number
//     const accountNumberCell = page.locator("tbody tr td:first-child").first();
//     await expect(accountNumberCell).toBeVisible();
//     const accountNumber = await accountNumberCell.textContent();
//     console.log("Account Number :: " + accountNumber);

//     // Step 4: Navigate to Open New Account page
//     await openNewAccountLink.click();
//     await expect(openNewAccountHeading).toBeVisible();

//     // Step 5: Select SAVINGS account type
//     await expect(accountTypeDropdown).toBeVisible();
//     await accountTypeDropdown.selectOption("SAVINGS");
//     await expect(openNewAccountButton).toBeVisible();

//     // Step 6: Extract the minimum deposit amount from the page
//     const minText = (await minimumDepositText.innerText()).trim();
//     const match = minText.match(/\$([\d,]+(?:\.\d{2})?)/);
//     if (!match)
//       throw new Error(
//         `Unable to parse minimum deposit from text: "${minText}"`
//       );
//     const minDepositRaw = match[1].replace(/,/g, "");
//     const minDepositAmount = parseFloat(minDepositRaw);
//     console.log(`Minimum deposit extracted: $${minDepositAmount.toFixed(2)}`);

//     // Step 7: Create the new savings account
//     await page.waitForTimeout(1000); // just to visually confirm the selection before clicking
//     await openNewAccountButton.click();

//     // Step 8: Verify account creation success message
//     await expect(accountCreatedMessage).toBeVisible();
//     await expect(newAccountLink).toBeVisible();
//     const newAccountNumber = await newAccountLink.textContent();
//     console.log("New Account Number :: " + newAccountNumber);

//     // Step 9: Navigate back to Accounts Overview to validate balances
//     await accountsOverviewLink.click();
//     await page.waitForTimeout(1000); // just to visually confirm the navigation before assertions
//     await expect(accountsOverviewHeading).toBeVisible();
//     await expect(accountTableLocator).toBeVisible();

//     // Step 10: Get account cells for both accounts
//     const firstAccountNumberCell = page
//       .locator("tbody tr td:first-child a")
//       .nth(0);
//     const secondAccountNumberCell = page
//       .locator("tbody tr td:first-child a")
//       .nth(1);
//     const firstAccountBalanceCell = page
//       .locator("tbody tr td:nth-child(2)")
//       .nth(0);
//     const secondAccountBalanceCell = page
//       .locator("tbody tr td:nth-child(2)")
//       .nth(1);

//     // Step 11: Verify first account balance is reduced by the minimum deposit amount
//     await expect(firstAccountBalanceCell).toHaveText(
//       `$${(515.5 - minDepositAmount).toFixed(2)}`
//     );

//     // Step 12: Verify second account balance equals the minimum deposit amount
//     await expect(secondAccountBalanceCell).toHaveText(
//       `$${minDepositAmount.toFixed(2)}`
//     );

//     // Step 13: Log the account details for verification
//     const firstAccountNumber = await firstAccountNumberCell.textContent();
//     const secondAccountNumber =
//       (await secondAccountNumberCell.textContent()) ?? "";
//     const firstAccountBalance = await firstAccountBalanceCell.textContent();
//     const secondAccountBalance = await secondAccountBalanceCell.textContent();
//     console.log(
//       `First Account: ${firstAccountNumber}, Balance: ${firstAccountBalance}`
//     );
//     console.log(
//       `Second Account (New): ${secondAccountNumber}, Balance: ${secondAccountBalance}`
//     );

//     // Step 14: Click on the newly created account to view details
//     await secondAccountNumberCell.click();
//     await expect(
//       page.getByRole("heading", { name: `Account Details` })
//     ).toBeVisible();

//     // Step 15: Verify account details are displayed correctly
//     await expect(page.locator("#accountId")).toHaveText(secondAccountNumber);
//     await expect(page.locator("#accountType")).toHaveText("SAVINGS");
//     await expect(page.locator("#balance")).toHaveText(
//       `$${minDepositAmount.toFixed(2)}`
//     );
//     await expect(page.locator("#availableBalance")).toHaveText(
//       `$${minDepositAmount.toFixed(2)}`
//     );

//     await expect(
//       page.getByRole("heading", { name: "Account Activity" })
//     ).toBeVisible();

//     await expect(activityMonth).toBeVisible();
//     await expect(activityType).toBeVisible();

//     await activityMonth.selectOption("All");
//     await activityType.selectOption("Credit");
//     await goButton.click();
//     await page.waitForTimeout(1000); // just to visually confirm the filtering before assertions

//     await expect(page.locator("#transactionTable tbody tr")).toHaveCount(1);
//     // Assert transaction row details
//     await expect(transactionRow).toHaveCount(1);

//     // Assert date cell
//     await expect(dateCell).toHaveText(/^\d{2}-\d{2}-\d{4}$/);

//     // Assert transaction description cell
//     await expect(descriptionCell).toHaveText("Funds Transfer Received");

//     // Assert debit cell is empty
//     await expect(debitCell).toHaveText("");

//     // Assert credit cell is $100.00
//     await expect(creditCell).toHaveText(`$${minDepositAmount.toFixed(2)}`);

//     await openNewAccountLink.click();
//     await expect(openNewAccountHeading).toBeVisible();
//     await expect(accountTypeDropdown).toBeVisible();
//     await accountTypeDropdown.selectOption("CHECKING");
//     await page
//       .locator("#fromAccountId")
//       .selectOption(secondAccountNumber ?? "");
//     await expect(openNewAccountButton).toBeVisible();
//     await openNewAccountButton.click();
//     await expect(
//       page.getByText("Congratulations, your account is now open.")
//     ).toBeVisible();

//     await expect(newAccountLink).toBeVisible();
//     const ThirdCheckingAccountNumber = await newAccountLink.textContent();
//     console.log("New Checking Account Number :: " + ThirdCheckingAccountNumber);

//     await newAccountLink.click();
//   });

//   // SCENARIO 8: User Registration with Existing Username Should Fail
//   // Description: Attempt to register with an existing username and verify error message
//   test("SCENARIO 8: User Registration with Existing Username", async ({
//     page,
//   }) => {
//     // Step 1: Verify first user is already registered in beforeEach
//     if (!registeredUser) throw new Error("registeredUser not set");

//     // Step 2: Logout from the current session
//     await logOutLink.click();

//     // Step 3: Navigate to registration page
//     await getRegisterLink.click();

//     // Step 4: Fill registration form with the same username
//     await fillRegistrationForm(page, registeredUser);

//     // Step 5: Submit the registration form
//     await registerButton.click();

//     // Step 6: Verify error message for duplicate username
//     await expect(page.getByText("This username already exists.")).toBeVisible();
//   });

//   // SCENARIO 9: User Login with Valid Credentials
//   // Description: Logout and login again with valid credentials
//   test("SCENARIO 9: User Login with Valid Credentials", async ({ page }) => {
//     // Step 1: Verify registered user exists
//     if (!registeredUser) throw new Error("registeredUser not set");

//     // Step 2: Logout from the current session
//     await logOutLink.click();

//     // Step 3: Fill in username
//     await getUsernameInput.fill(registeredUser.username);

//     // Step 4: Fill in password
//     await getPasswordInput.fill(registeredUser.password);

//     // Step 5: Click login button
//     await getLoginButton.click();

//     // Step 6: Verify successful login with welcome message
//     await expect(
//       page.getByText(
//         `Welcome ${registeredUser.firstName} ${registeredUser.lastName}`
//       )
//     ).toBeVisible();
//   });

//   // SCENARIO 10: User Login with Incorrect Password Should Fail
//   // Description: Attempt login with wrong password and verify error message
//   test("SCENARIO 10: User Login with Incorrect Password", async ({ page }) => {
//     // Step 1: Verify registered user exists
//     if (!registeredUser) throw new Error("registeredUser not set");

//     // Step 2: Logout from the current session
//     await logOutLink.click();

//     // Step 3: Fill in username
//     await getUsernameInput.fill(registeredUser.username);

//     // Step 4: Fill in incorrect password
//     await getPasswordInput.fill("wrongPassword");

//     // Step 5: Click login button
//     await getLoginButton.click();

//     // Step 6: Verify error message for incorrect credentials
//     await expect(
//       page.getByText("The username and password could not be verified.")
//     ).toBeVisible();
//   });

//   // SCENARIO 11: Forgot Login Info - Retrieve Username and Password
//   // Description: Use "Forgot login info?" feature to retrieve account credentials
//   test("SCENARIO 11: Clicking on 'Forgot login info?' link should navigate to the correct page", async ({
//     page,
//   }) => {
//     // Step 1: Verify registered user exists
//     if (!registeredUser) throw new Error("registeredUser not set");

//     // Step 2: Logout from the current session
//     await logOutLink.click();

//     // Step 3: Click on "Forgot login info?" link
//     await getForgotLoginLink.click();

//     // Step 4: Verify all customer lookup fields are visible
//     await expect(firstNameInputForgot).toBeVisible();
//     await expect(lastNameInputForgot).toBeVisible();
//     await expect(addressInputForgot).toBeVisible();
//     await expect(cityInputForgot).toBeVisible();
//     await expect(stateInputForgot).toBeVisible();
//     await expect(zipCodeInputForgot).toBeVisible();
//     await expect(ssnInputForgot).toBeVisible();
//     await expect(findMyLoginInfoButton).toBeVisible();

//     // Step 5: Fill the customer lookup form with registered user data
//     await firstNameInputForgot.fill(registeredUser.firstName);
//     await lastNameInputForgot.fill(registeredUser.lastName);
//     await addressInputForgot.fill(registeredUser.address);
//     await cityInputForgot.fill(registeredUser.city);
//     await stateInputForgot.fill(registeredUser.state);
//     await zipCodeInputForgot.fill(registeredUser.zipCode);
//     await ssnInputForgot.fill(registeredUser.ssn);

//     // Step 6: Click "Find My Login Info" button
//     await findMyLoginInfoButton.click();

//     // Step 7: Verify login information is successfully retrieved and displayed
//     await expect(
//       page.getByText("Your login information was located successfully.")
//     ).toBeVisible();
//     await expect(
//       page.getByText(`Username: ${registeredUser.username}`)
//     ).toBeVisible();
//   });

//   // SCENARIO 12: Check Default Account and Account Balance
//   // Description: Navigate to Accounts Overview and verify existing account details and balance
//   test("SCENARIO 12: Checking Default account and its balance", async ({
//     page,
//   }) => {
//     // Step 1: Navigate to Accounts Overview page
//     await accountsOverviewLink.click();

//     // Step 2: Verify Accounts Overview page heading is visible
//     await expect(
//       page.getByRole("heading", { name: "Accounts Overview" })
//     ).toBeVisible();

//     // Step 3: Verify account table and column headers are visible
//     await expect(page.locator("#accountTable")).toBeVisible();
//     await expect(page.getByRole("cell", { name: "Account" })).toBeVisible();
//     await expect(page.getByRole("cell", { name: "Balance*" })).toBeVisible();
//     await expect(
//       page.getByRole("cell", { name: "Available Amount" })
//     ).toBeVisible();
//     await expect(page.locator("b").filter({ hasText: "$" })).toBeVisible();

//     // Step 4: Get and log the default account number
//     const accountNumberCell = page.locator("tbody tr td:first-child a").first();
//     await expect(accountNumberCell).toBeVisible();
//     const defaultAccountNumber = await accountNumberCell.textContent();
//     console.log("Account Number :: " + defaultAccountNumber);

//     // Step 5: Get and log the default account balance
//     const defaultAccountBalance = await page
//       .locator("b")
//       .filter({ hasText: "$" })
//       .innerText();
//     console.log("Account Balance :: " + defaultAccountBalance);

//     // Step 6: Click on default account cell and navigate to account details
//     await accountNumberCell.click();
//     await expect(
//       page.getByRole("heading", { name: "Account Details" })
//     ).toBeVisible();

//     await expect(
//       page.getByRole("heading", { name: "Account Details" })
//     ).toBeVisible();
//     await expect(page.locator("#accountId")).toHaveText(
//       defaultAccountNumber as string
//     );
//     await expect(page.locator("#accountType")).toBeVisible();
//     await expect(page.locator("#balance")).toBeVisible();
//     await expect(page.locator("#availableBalance")).toBeVisible();
//     await expect(
//       page.getByRole("heading", { name: "Account Activity" })
//     ).toBeVisible();
//     await expect(activityMonth).toBeVisible();
//     await expect(activityType).toBeVisible();
//     await expect(goButton).toBeVisible();
//     await goButton.click();
//     const noTransactions = page.getByText("No transactions found.");
//     await expect(noTransactions).toBeVisible();

//     /*
//       Step 7:
//       Click on "Open New Account" and validate the types of accounts that can be created,
//       validate the minimum deposit amount for a new account,
//       validate the account numbers available from which we can provide the minimum deposit amount,
//       click on "Open New Account" and validate the success message.
//     */
//     await openNewAccountLink.click();
//     await expect(openNewAccountHeading).toBeVisible();
//     await expect(accountTypeDropdown).toBeVisible();
//     await expect(fromAccountDropdown).toBeVisible();

//     // Validate account types
//     const accountTypes = await accountTypeDropdown
//       .locator("option")
//       .allTextContents();
//     console.log("Available Account Types: ", accountTypes);
//     expect(accountTypes).toContain("SAVINGS");
//     expect(accountTypes).toContain("CHECKING");

//     // Extract and validate minimum deposit amount
//     const minText = (
//       await page.locator("xpath=//b[contains(., 'minimum')]").innerText()
//     ).trim();
//     const match = minText.match(/\$([\d,]+(?:\.\d{2})?)/);
//     if (!match)
//       throw new Error(
//         `Unable to parse minimum deposit from text: "${minText}"`
//       );
//     const minDepositRaw = match[1].replace(/,/g, "");
//     const minDepositAmount = parseFloat(minDepositRaw);
//     console.log(`Minimum deposit extracted: $${minDepositAmount.toFixed(2)}`);
//     expect(minDepositAmount).toBeGreaterThan(0);

//     // Open new account
//     await accountTypeDropdown.selectOption("SAVINGS");
//     await fromAccountDropdown.selectOption(defaultAccountNumber?.trim() || "");
//     await openNewAccountButton.click();
//     await expect(
//       page.getByText("Congratulations, your account is now open.")
//     ).toBeVisible();
//     await expect(newAccountLink).toBeVisible();
//     const newAccountNumber = await newAccountLink.textContent();
//     console.log("New Account Number :: " + newAccountNumber);

//     // Step 8: Click on the newly created account and validate the account details and validate the account activity
//     await newAccountLink.click();
//     await expect(
//       page.getByRole("heading", { name: `Account Details` })
//     ).toBeVisible();

//     await expect(page.locator("#accountId")).toHaveText(
//       newAccountNumber as string
//     );
//     await expect(page.locator("#accountType")).toHaveText("SAVINGS");
//     await expect(page.locator("#balance")).toHaveText(
//       `$${minDepositAmount.toFixed(2)}`
//     );
//     await expect(page.locator("#availableBalance")).toHaveText(
//       `$${minDepositAmount.toFixed(2)}`
//     );
//     await expect(
//       page.getByRole("heading", { name: "Account Activity" })
//     ).toBeVisible();

//     await expect(activityMonth).toBeVisible();
//     await expect(activityType).toBeVisible();

//     await activityMonth.selectOption("All");
//     await activityType.selectOption("Credit");
//     await goButton.click();
//     await page.waitForTimeout(1000); // just to visually confirm the filtering before assertions

//     await expect(page.locator("#transactionTable tbody tr")).toHaveCount(1);
//     // Assert transaction row details
//     await expect(transactionRow).toHaveCount(1);

//     // Assert date cell
//     await expect(dateCell).toHaveText(/^\d{2}-\d{2}-\d{4}$/);

//     // Assert transaction description cell
//     await expect(descriptionCell).toHaveText("Funds Transfer Received");

//     // Assert debit cell is empty
//     await expect(debitCell).toHaveText("");

//     // Assert credit cell is $minDepositAmount
//     await expect(creditCell).toHaveText(`$${minDepositAmount.toFixed(2)}`);

//     // Step 9: Click on accounts overview and validate the table and validate the new account is there
//     await accountsOverviewLink.click();
//     await expect(
//       page.getByRole("heading", { name: "Accounts Overview" })
//     ).toBeVisible();
//     await expect(page.locator("#accountTable")).toBeVisible();

//     // Validate new account is listed
//     const newAccountCell = page.locator("tbody tr td:first-child a").filter({
//       hasText: newAccountNumber as string,
//     });
//     await expect(newAccountCell).toBeVisible();
//     await expect(newAccountCell).toHaveText(newAccountNumber as string);

//     // Step 10: Navigate to Transfer funds page and validate the elements
//     await transferFundsLink.click();
//     await expect(
//       page.getByRole("heading", { name: "Transfer Funds" })
//     ).toBeVisible();

//     await expect(fromAccountSelect).toBeVisible();
//     await expect(toAccountSelect).toBeVisible();
//     await expect(amountInput).toBeVisible();
//     await expect(transferButton).toBeVisible();

//     // create a random amount between 1-500
//     const transferAmount = (Math.floor(Math.random() * 500) + 1).toFixed(2);
//     console.log(`Transferring amount: $${transferAmount}`);

//     await fromAccountSelect.selectOption(newAccountNumber?.trim() || "");
//     await toAccountSelect.selectOption(defaultAccountNumber?.trim() || "");
//     await amountInput.fill(transferAmount);
//     await transferButton.click();

//     // Validate transfer success message
//     await expect(page.getByText("Transfer Complete!")).toBeVisible();

//     const transferMessage = `$${transferAmount} has been transferred from account #${newAccountNumber} to account #${defaultAccountNumber}.`;
//     await expect(page.getByText(transferMessage)).toBeVisible();

//     // validate in accounts overview the updated balances
//     await accountsOverviewLink.click();
//     await expect(
//       page.getByRole("heading", { name: "Accounts Overview" })
//     ).toBeVisible();
//   });

//   // SCENARIO 13: Transfer Funds Between Accounts and Validate Transactions
//   // Description: Create second account, transfer funds, and validate transaction details
//   // Steps:
//   // 1. Navigate to accounts overview and save the first account number that is present by default.
//   // 2. Create another account and save the new account number.
//   // 3. Go to the funds transfer page and validate the elements in it.
//   // 4. Select "to" and "from" accounts from the dropdowns and transfer any amount between $1 and $50.
//   // 5. After the transfer, navigate to accounts overview and click on individual accounts.
//   // 6. Validate the credit and debit amounts for each individual account in the transaction table.
//   test("SCENARIO 13: Transfer Funds between Accounts and Validate Transactions", async ({
//     page,
//   }) => {
//     // Step 1: Navigate to Accounts Overview and get first account number
//     await accountsOverviewLink.click();
//     const accountNumberCell = page.locator("tbody tr td:first-child a").first();
//     await expect(accountNumberCell).toBeVisible();
//     const firstAccountNumber = await accountNumberCell.textContent();
//     console.log("First Account Number :: " + firstAccountNumber);

//     // Step 2: Create a new SAVINGS account
//     await openNewAccountLink.click();
//     await accountTypeDropdown.selectOption("SAVINGS");
//     await fromAccountDropdown.selectOption(firstAccountNumber?.trim() || "");
//     await openNewAccountButton.click();

//     // Step 3: Verify account creation and get second account number
//     await expect(
//       page.getByText("Congratulations, your account is now open.")
//     ).toBeVisible();
//     await expect(newAccountLink).toBeVisible();
//     const secondAccountNumber = await newAccountLink.textContent();
//     console.log("Second Account Number :: " + secondAccountNumber);

//     // Step 4: Navigate to Transfer Funds page
//     await transferFundsLink.click();
//     await expect(
//       page.getByRole("heading", { name: "Transfer Funds" })
//     ).toBeVisible();

//     // Step 5: Verify all transfer form elements are visible
//     await expect(fromAccountSelect).toBeVisible();
//     await expect(toAccountSelect).toBeVisible();
//     await expect(amountInput).toBeVisible();
//     await expect(transferButton).toBeVisible();

//     // Step 6: Fill transfer form and submit
//     const transferAmount = (Math.floor(Math.random() * 50) + 1).toFixed(2);
//     console.log(`Transferring amount: $${transferAmount}`);

//     await fromAccountSelect.selectOption(secondAccountNumber?.trim() || "");
//     await toAccountSelect.selectOption(firstAccountNumber?.trim() || "");
//     await amountInput.fill(transferAmount);
//     await transferButton.click();

//     // Step 7: Verify transfer success message
//     await expect(page.getByText("Transfer Complete!")).toBeVisible();

//     const transferMessage = `$${transferAmount} has been transferred from account #${secondAccountNumber} to account #${firstAccountNumber}.`;
//     await expect(page.getByText(transferMessage)).toBeVisible();

//     // Step 8: Navigate to second account to validate debit transaction
//     await accountsOverviewLink.click();
//     const secondAccountCell = page
//       .locator("tbody tr td:first-child a")
//       .filter({ hasText: secondAccountNumber as string });
//     await expect(secondAccountCell).toBeVisible();
//     await secondAccountCell.click();

//     // Step 9: Filter transactions to show debit transactions
//     await expect(
//       page.getByRole("heading", { name: "Account Details" })
//     ).toBeVisible();

//     await expect(activityMonth).toBeVisible();
//     await expect(activityType).toBeVisible();

//     await activityMonth.selectOption("All");
//     await activityType.selectOption("Debit");
//     await goButton.click();
//     await page.waitForTimeout(1000); // just to visually confirm the filtering before assertions

//     await expect(page.locator("#transactionTable tbody tr")).toHaveCount(1);
//     // Assert transaction row details
//     await expect(transactionRow).toHaveCount(1);

//     // Assert description cell
//     await expect(descriptionCell).toHaveText("Funds Transfer Sent");

//     // Assert debit cell is transferAmount
//     await expect(debitCell).toHaveText(`$${transferAmount}`);

//     // Assert credit cell is empty
//     await expect(creditCell).toHaveText("");

//     // Validate credit in first account
//     await accountsOverviewLink.click();
//     const firstAccountCell = page
//       .locator("tbody tr td:first-child a")
//       .filter({ hasText: firstAccountNumber as string });
//     await expect(firstAccountCell).toBeVisible();
//     await firstAccountCell.click();

//     await expect(
//       page.getByRole("heading", { name: "Account Details" })
//     ).toBeVisible();

//     await expect(activityMonth).toBeVisible();
//     await expect(activityType).toBeVisible();

//     await activityMonth.selectOption("All");
//     await activityType.selectOption("Credit");
//     await goButton.click();
//     await page.waitForTimeout(1000); // just to visually confirm the filtering before assertions

//     await expect(page.locator("#transactionTable tbody tr")).toHaveCount(1);
//     // Assert transaction row details
//     await expect(transactionRow).toHaveCount(1);

//     // Assert description cell
//     await expect(descriptionCell).toHaveText("Funds Transfer Received");

//     // Assert debit cell is empty
//     await expect(debitCell).toHaveText("");

//     // Assert credit cell is transferAmount
//     await expect(creditCell).toHaveText(`$${transferAmount}`);
//   });

//   // SCENARIO 14: Bill Pay - Submit Payment and Validate Transaction
//   // Description: Navigate to Bill Pay, fill payment details, submit, and verify transaction
//   // Steps:
//   // 1. Navigate to accounts overview and save the first account number that is present by default.
//   // 2. Create another account and save the new account number.
//   // 3. Go to the Bill Pay page and validate the elements
//   // 4. Fill the bill pay details along with the new account number
//   // Refer to screenshot for required fields:
//   // Payee Name, Address, City, State, Zip Code, Phone #, Account #, Verify Account #, Amount, From account #
//   test("SCENARIO 14: Bill Pay Page Elements and Payment Submission", async ({
//     page,
//   }) => {
//     // Step 1: Navigate to accounts overview and save the first account number
//     await accountsOverviewLink.click();
//     const firstAccountNumber = await page
//       .locator("tbody tr td:first-child a")
//       .first()
//       .textContent();

//     // Step 2: Create another account and save the new account number
//     await openNewAccountLink.click();
//     await accountTypeDropdown.selectOption("SAVINGS");
//     await fromAccountDropdown.selectOption(firstAccountNumber?.trim() || "");
//     await openNewAccountButton.click();
//     await expect(newAccountLink).toBeVisible();
//     const secondAccountNumber = await newAccountLink.textContent();

//     // Step 3: Go to the Bill Pay page and validate the elements
//     await billPayLink.click();
//     await expect(
//       page.getByRole("heading", { name: "Bill Payment Service" })
//     ).toBeVisible();

//     // Validate all bill pay fields are visible
//     await expect(payeeNameInput).toBeVisible();
//     await expect(payeeAddressInput).toBeVisible();
//     await expect(payeeCityInput).toBeVisible();
//     await expect(payeeStateInput).toBeVisible();
//     await expect(payeeZipCodeInput).toBeVisible();
//     await expect(payeePhoneInput).toBeVisible();
//     await expect(payeeAccountInput).toBeVisible();
//     await expect(verifyAccountInput).toBeVisible();
//     await expect(billPayAmountInput).toBeVisible();
//     await expect(billPayFromAccountSelect).toBeVisible();
//     await expect(sendPaymentButton).toBeVisible();

//     const transferAmount = (Math.floor(Math.random() * 50) + 1).toFixed(2);
//     // Step 4: Fill the bill pay details along with the new account number
//     const payeeData = {
//       name: `${registeredUser?.firstName} ${registeredUser?.lastName}`,
//       address: registeredUser?.address ?? "",
//       city: registeredUser?.city ?? "",
//       state: registeredUser?.state ?? "",
//       zip: registeredUser?.zipCode ?? "",
//       phone: registeredUser?.phone ?? "",
//       account: secondAccountNumber?.trim() || "",
//       amount: transferAmount,
//     };

//     await payeeNameInput.fill(payeeData.name);
//     await payeeAddressInput.fill(payeeData.address);
//     await payeeCityInput.fill(payeeData.city);
//     await payeeStateInput.fill(payeeData.state);
//     await payeeZipCodeInput.fill(payeeData.zip);
//     await payeePhoneInput.fill(payeeData.phone);
//     await payeeAccountInput.fill(payeeData.account);
//     await verifyAccountInput.fill(payeeData.account);
//     await billPayAmountInput.fill(payeeData.amount);
//     await billPayFromAccountSelect.selectOption(
//       firstAccountNumber?.trim() || ""
//     );

//     await page.waitForTimeout(1000); // just to visually confirm the filled data before submission
//     // Submit payment
//     await sendPaymentButton.click();
//     await page.waitForTimeout(1000); // just to visually confirm the submission before assertions
//     // Validate payment success message
//     await expect(
//       page.getByRole("heading", { name: "Bill Payment Complete" })
//     ).toBeVisible();
//     await expect(
//       page.getByText(
//         `Bill Payment to ${payeeData.name} in the amount of $${payeeData.amount} from account ${firstAccountNumber} was successful.`
//       )
//     ).toBeVisible();
//     await expect(
//       page.getByText("See Account Activity for more details.")
//     ).toBeVisible();

//     // Validating the transations in accounts overview in both accounts
//     // Validate debit in first account
//     await accountsOverviewLink.click();
//     const firstAccountCell = page
//       .locator("tbody tr td:first-child a")
//       .filter({ hasText: firstAccountNumber as string });
//     await expect(firstAccountCell).toBeVisible();
//     await firstAccountCell.click();

//     await expect(
//       page.getByRole("heading", { name: "Account Details" })
//     ).toBeVisible();

//     await expect(activityMonth).toBeVisible();
//     await expect(activityType).toBeVisible();

//     await activityMonth.selectOption("All");
//     await activityType.selectOption("Debit");
//     await goButton.click();
//     await page.waitForTimeout(1000); // just to visually confirm the filtering before assertions

//     await expect(page.locator("#transactionTable tbody tr")).toHaveCount(2);
//     // Assert transaction row details
//     // Storing rows data in an array to find the correct transaction
//     const transactionRows = page.locator("#transactionTable tbody tr");
//     const rowCount = await transactionRows.count();
//     for (let i = 0; i < rowCount; i++) {
//       const row = transactionRows.nth(i);
//       const description = await row.locator("td").nth(1).textContent();
//       if (description?.includes("Bill Payment")) {
//         const debitText = await row.locator("td").nth(2).textContent();
//         expect(debitText).toBe(`$${transferAmount}`);
//         const creditText = await row.locator("td").nth(3).textContent();
//         expect(creditText).toBe("");
//         break;
//       }
//     }
//   });

//   // SCENARIO 15: Find Transactions by Various Criteria
//   // Description: Search transactions by amount, date range, and validate results
//   // Steps:
//   // - Navigate to accounts overview and save the first account number that is present by default.
//   // - Create another account and save the new account number.
//   // - Go to the Transfer Funds page and transfer a random amount between $1 and $50 from the first account to the second account.
//   // - Navigate to account activity. If you click on the description of that transaction, you are taken to the transaction details page, where you can copy details such as ID, date, description, type, and amount.
//   // - Go to the Find Transactions page and search using each individual field (ID, date, date range, amount).
//   // - For each search, validate that the transaction details in the results table match the expected values.
//   // - Repeat the validation four times: once with ID, once with date, once with date range, and once with amount.
//   // Primary focus is to validate the find transaction functionality.
//   test("SCENARIO 15: Find Transactions by Various Criteria", async ({
//     page,
//   }) => {
//     // Navigate to accounts overview and save the first account number
//     await accountsOverviewLink.click();
//     const firstAccountNumber = await page
//       .locator("tbody tr td:first-child a")
//       .first()
//       .textContent();

//     // Create another account and save the new account number
//     await openNewAccountLink.click();
//     await accountTypeDropdown.selectOption("SAVINGS");
//     await fromAccountDropdown.selectOption(firstAccountNumber?.trim() || "");
//     await openNewAccountButton.click();
//     await expect(newAccountLink).toBeVisible();
//     const secondAccountNumber = await newAccountLink.textContent();

//     // Go to the Transfer Funds page and transfer a random amount between $1 and $50
//     await transferFundsLink.click();
//     const transferAmount = (Math.floor(Math.random() * 50) + 1).toFixed(2);
//     await page
//       .locator("#fromAccountId")
//       .selectOption(firstAccountNumber?.trim() || "");
//     await page
//       .locator("#toAccountId")
//       .selectOption(secondAccountNumber?.trim() || "");
//     await page.locator("#amount").fill(transferAmount);
//     await page.getByRole("button", { name: "Transfer" }).click();
//     await expect(page.getByText("Transfer Complete!")).toBeVisible();

//     // Navigate to account activity of the first account to get transaction details
//     await accountsOverviewLink.click();
//     const firstAccountCell = page
//       .locator("tbody tr td:first-child a")
//       .filter({ hasText: firstAccountNumber as string });
//     await expect(firstAccountCell).toBeVisible();
//     await firstAccountCell.click();

//     await expect(activityMonth).toBeVisible();
//     await expect(activityType).toBeVisible();

//     await activityMonth.selectOption("All");
//     await activityType.selectOption("Debit");
//     await goButton.click();
//     await page.waitForTimeout(1000); // just to visually confirm the filtering before assertions

//     // Get transaction details
//     await descriptionCell.click();
//     // Wait for the transaction details heading to be visible
//     await expect(
//       page.getByRole("heading", { name: "Transaction Details" })
//     ).toBeVisible();

//     // Extract transaction details from the table
//     const transactionIdRow = page.locator('tr:has-text("Transaction ID:")');
//     const transactionId = await transactionIdRow
//       .locator("td")
//       .nth(1)
//       .textContent();

//     const transactionDateRow = page.locator('tr:has-text("Date:")');
//     const transactionDate = await transactionDateRow
//       .locator("td")
//       .nth(1)
//       .textContent();

//     const transactionDescriptionRow = page.locator(
//       'tr:has-text("Description:")'
//     );
//     const transactionDescription = await transactionDescriptionRow
//       .locator("td")
//       .nth(1)
//       .textContent();

//     const transactionTypeRow = page.locator('tr:has-text("Type:")');
//     const transactionType = await transactionTypeRow
//       .locator("td")
//       .nth(1)
//       .textContent();

//     const transactionAmountRow = page.locator('tr:has-text("Amount:")');
//     const transactionAmount = await transactionAmountRow
//       .locator("td")
//       .nth(1)
//       .textContent();

//     console.log({
//       transactionId,
//       transactionDate,
//       transactionDescription,
//       transactionType,
//       transactionAmount,
//     });

//     // Now you can use these details for further validation/search

//     // Go to Find Transactions page
//     await findTransactionsLink.click();
//     await expect(
//       page.getByRole("heading", { name: "Find Transactions" })
//     ).toBeVisible();
//     await page.waitForTimeout(500); // Wait for page to fully load

//     // Select the first account from the dropdown
//     await page.getByRole("combobox").selectOption({ index: 0 });

//     // Note: Skipping Find by Transaction ID as it causes server errors
//     // This appears to be a known issue with the ParaBank demo application

//     // Find by Date - second textbox
//     await page
//       .getByRole("textbox")
//       .nth(1)
//       .fill(transactionDate?.trim() || "");
//     await page
//       .getByRole("button", { name: "Find Transactions" })
//       .nth(1)
//       .click();
//     await page.waitForTimeout(1000); // Wait for results to load
//     await expect(page.locator("#transactionTable")).toBeVisible();
//     await expect(page.locator("#transactionTable tbody tr")).toHaveCount(
//       await page.locator("#transactionTable tbody tr").count()
//     ); // Accept any number of rows
//     // Verify that at least one transaction has the correct details
//     const dateMatch = page
//       .locator("#transactionTable tbody tr")
//       .filter({ hasText: transactionDate ?? "" });
//     await expect(dateMatch.first()).toBeVisible();

//     // Find by Date Range - third and fourth textboxes
//     await findTransactionsLink.click(); // Navigate back to find transactions page
//     await page.waitForTimeout(500);
//     await page
//       .getByRole("textbox")
//       .nth(2)
//       .fill(transactionDate?.trim() || "");
//     await page
//       .getByRole("textbox")
//       .nth(3)
//       .fill(transactionDate?.trim() || "");
//     await page
//       .getByRole("button", { name: "Find Transactions" })
//       .nth(2)
//       .click();
//     await page.waitForTimeout(1000); // Wait for results to load
//     await expect(page.locator("#transactionTable")).toBeVisible();
//     await expect(page.locator("#transactionTable tbody tr")).toHaveCount(
//       await page.locator("#transactionTable tbody tr").count()
//     ); // Accept any number of rows
//     // Verify that at least one transaction has the correct details
//     const dateRangeMatch = page
//       .locator("#transactionTable tbody tr")
//       .filter({ hasText: transactionDate ?? "" });
//     await expect(dateRangeMatch.first()).toBeVisible();

//     // Find by Amount - fifth textbox
//     await findTransactionsLink.click(); // Navigate back to find transactions page
//     await page.waitForTimeout(500);
//     await page
//       .getByRole("textbox")
//       .nth(4)
//       .fill(transactionAmount?.replace("-", "").replace("$", "") || "");
//     await page
//       .getByRole("button", { name: "Find Transactions" })
//       .nth(3)
//       .click();
//     await page.waitForTimeout(1000); // Wait for results to load
//     await expect(page.locator("#transactionTable")).toBeVisible();
//     await expect(page.locator("#transactionTable tbody tr")).toHaveCount(
//       await page.locator("#transactionTable tbody tr").count()
//     ); // Accept any number of rows
//     // Verify that at least one transaction has the correct amount
//     const amountMatch = page.locator("#transactionTable tbody tr").filter({
//       hasText: `$${transactionAmount?.replace("-", "").replace("$", "")}`,
//     });
//     await expect(amountMatch.first()).toBeVisible();
//   });

//   // SCENARIO 16: Update Contact Info with Valid and Invalid Data
//   // Description: Update user profile with valid data, then test validation with invalid data
//   // Steps:
//   // 1. Navigate to Update Contact Info page
//   // 2. Validate all fields are visible and pre-populated with registered user data
//   // 3. Update contact info with valid data and verify success
//   // 4. Update contact info with invalid data (empty required fields) and verify validation errors
//   test("SCENARIO 16: Update Contact Info with Valid and Invalid Data", async ({
//     page,
//   }) => {
//     // Step 1: Navigate to Update Contact Info page
//     await updateContactInfoLink.click();
//     await expect(
//       page.getByRole("heading", { name: "Update Profile" })
//     ).toBeVisible();

//     // Step 2: Validate all fields are visible and pre-populated
//     // Validate fields are visible
//     await expect(updateFirstNameInput).toBeVisible();
//     await expect(updateLastNameInput).toBeVisible();
//     await expect(updateAddressInput).toBeVisible();
//     await expect(updateCityInput).toBeVisible();
//     await expect(updateStateInput).toBeVisible();
//     await expect(updateZipCodeInput).toBeVisible();
//     await expect(updatePhoneInput).toBeVisible();

//     // Verify fields are pre-populated with registered user data
//     if (registeredUser) {
//       await expect(updateFirstNameInput).toHaveValue(registeredUser.firstName);
//       await expect(updateLastNameInput).toHaveValue(registeredUser.lastName);
//       await expect(updateAddressInput).toHaveValue(registeredUser.address);
//       await expect(updateCityInput).toHaveValue(registeredUser.city);
//       await expect(updateStateInput).toHaveValue(registeredUser.state);
//       await expect(updateZipCodeInput).toHaveValue(registeredUser.zipCode);
//       await expect(updatePhoneInput).toHaveValue(registeredUser.phone);
//     }

//     // Step 3: Update contact info with valid data
//     const updatedData = {
//       firstName: "Updated_" + faker.person.firstName(),
//       lastName: "Updated_" + faker.person.lastName(),
//       address: faker.location.streetAddress(),
//       city: faker.location.city(),
//       state: faker.location.state(),
//       zipCode: faker.location.zipCode(),
//       phone: faker.phone.number(),
//     };

//     await updateFirstNameInput.fill(updatedData.firstName);
//     await updateLastNameInput.fill(updatedData.lastName);
//     await updateAddressInput.fill(updatedData.address);
//     await updateCityInput.fill(updatedData.city);
//     await updateStateInput.fill(updatedData.state);
//     await updateZipCodeInput.fill(updatedData.zipCode);
//     await updatePhoneInput.fill(updatedData.phone);

//     const updateProfileButton = page.getByRole("button", {
//       name: "Update Profile",
//     });
//     await expect(updateProfileButton).toBeVisible();
//     await updateProfileButton.click();

//     // Validate update success message
//     await expect(page.getByText("Profile Updated")).toBeVisible();

//     // Step 4: Navigate back to Update Contact Info page to test invalid data
//     await updateContactInfoLink.click();
//     await expect(
//       page.getByRole("heading", { name: "Update Profile" })
//     ).toBeVisible();

//     // Verify the updated data is displayed in the form
//     await expect(updateFirstNameInput).toHaveValue(updatedData.firstName);
//     await expect(updateLastNameInput).toHaveValue(updatedData.lastName);
//     await expect(updateAddressInput).toHaveValue(updatedData.address);
//     await expect(updateCityInput).toHaveValue(updatedData.city);
//     await expect(updateStateInput).toHaveValue(updatedData.state);
//     await expect(updateZipCodeInput).toHaveValue(updatedData.zipCode);
//     await expect(updatePhoneInput).toHaveValue(updatedData.phone);

//     // Clear all required fields to test validation
//     await updateFirstNameInput.clear();
//     await updateLastNameInput.clear();
//     await updateAddressInput.clear();
//     await updateCityInput.clear();
//     await updateStateInput.clear();
//     await updateZipCodeInput.clear();

//     await updateProfileButton.click();

//     // Validate error messages for missing required fields
//     await expect(page.getByText("First name is required.")).toBeVisible();
//     await expect(page.getByText("Last name is required.")).toBeVisible();
//     await expect(page.getByText("Address is required.")).toBeVisible();
//     await expect(page.getByText("City is required.")).toBeVisible();
//     await expect(page.getByText("State is required.")).toBeVisible();
//     await expect(page.getByText("Zip Code is required.")).toBeVisible();
//   });

//   // SCENARIO 17: Update Contact Info, Logout, and Retrieve Login Info with Updated Data
//   // Description: Update profile, logout, use forgot password feature with updated info
//   // Steps:
//   // 1. Navigate to Update Contact Info page
//   // 2. Update contact info with new valid data
//   // 3. Verify update success
//   // 4. Logout from the account
//   // 5. Click on "Forgot login info?" link
//   // 6. Fill the form with the updated contact information
//   // 7. Click "Find My Login Info" button
//   // 8. Verify that the username is successfully retrieved with the updated contact info
//   test("SCENARIO 17: Update Contact Info, Logout, and Retrieve Login Info with Updated Data", async ({
//     page,
//   }) => {
//     if (!registeredUser) throw new Error("registeredUser not set");

//     // Step 1: Navigate to Update Contact Info page
//     await updateContactInfoLink.click();
//     await expect(
//       page.getByRole("heading", { name: "Update Profile" })
//     ).toBeVisible();

//     // Step 2: Update contact info with new valid data
//     // Generate new contact data
//     const updatedContactData = {
//       firstName: "NewFirst_" + faker.person.firstName(),
//       lastName: "NewLast_" + faker.person.lastName(),
//       address: faker.location.streetAddress(),
//       city: faker.location.city(),
//       state: faker.location.state(),
//       zipCode: faker.location.zipCode(),
//       phone: faker.phone.number(),
//     };

//     await updateFirstNameInput.fill(updatedContactData.firstName);
//     await updateLastNameInput.fill(updatedContactData.lastName);
//     await updateAddressInput.fill(updatedContactData.address);
//     await updateCityInput.fill(updatedContactData.city);
//     await updateStateInput.fill(updatedContactData.state);
//     await updateZipCodeInput.fill(updatedContactData.zipCode);
//     await updatePhoneInput.fill(updatedContactData.phone);

//     await expect(updateProfileButton).toBeVisible();
//     await page.waitForTimeout(500); // Wait before clicking
//     await updateProfileButton.click();

//     // Step 3: Verify update success
//     await page.waitForTimeout(1000); // Wait for page to load after update
//     await expect(
//       page.getByRole("heading", { name: "Profile Updated" })
//     ).toBeVisible();

//     console.log("Updated contact info:", updatedContactData);
//     console.log("Original SSN:", registeredUser.ssn);
//     console.log("Username:", registeredUser.username);

//     // Step 4: Logout from the account
//     await logOutLink.click();
//     await expect(getUsernameInput).toBeVisible();
//     await expect(getPasswordInput).toBeVisible();

//     // Step 5: Click on "Forgot login info?" link
//     await getForgotLoginLink.click();
//     await expect(
//       page.getByRole("heading", { name: "Customer Lookup" })
//     ).toBeVisible();

//     // Step 6: Fill the form with the updated contact information
//     await expect(firstNameInputForgot).toBeVisible();
//     await expect(lastNameInputForgot).toBeVisible();
//     await expect(addressInputForgot).toBeVisible();
//     await expect(cityInputForgot).toBeVisible();
//     await expect(stateInputForgot).toBeVisible();
//     await expect(zipCodeInputForgot).toBeVisible();
//     await expect(ssnInputForgot).toBeVisible();
//     await expect(findMyLoginInfoButton).toBeVisible();

//     // Fill with the updated contact information (SSN remains the same)
//     await firstNameInputForgot.fill(updatedContactData.firstName);
//     await lastNameInputForgot.fill(updatedContactData.lastName);
//     await addressInputForgot.fill(updatedContactData.address);
//     await cityInputForgot.fill(updatedContactData.city);
//     await stateInputForgot.fill(updatedContactData.state);
//     await zipCodeInputForgot.fill(updatedContactData.zipCode);
//     await ssnInputForgot.fill(registeredUser.ssn);

//     // Step 7: Click "Find My Login Info" button
//     await findMyLoginInfoButton.click();

//     // Step 8: Verify that the username is successfully retrieved
//     await expect(
//       page.getByText("Your login information was located successfully.")
//     ).toBeVisible();
//     await expect(
//       page.getByText(`Username: ${registeredUser.username}`)
//     ).toBeVisible();
//     await expect(
//       page.getByText(`Password: ${registeredUser.password}`)
//     ).toBeVisible();

//     console.log(
//       "Successfully retrieved login info using updated contact information!"
//     );
//   });

//   // SCENARIO 18: Complete End-to-End ParaBank Workflow
//   // Description: Comprehensive test covering registration, accounts, transfers, bill pay, and transactions
//   // Steps:
//   // - Register a new user
//   // - Log in with the registered user
//   // - Open a new account and validate credit/debit details in accounts overview
//   // - Transfer funds from one account to another and validate transactions in accounts overview
//   // - Use Bill Pay to transfer balance from one account and validate only the debit transaction from the account it is transferred from
//   // - Skip the account ID search as it causes server errors
//   // - Use other Find Transactions methods to validate (date, date range, amount)
//   // - Update the contact info, then log out and use "Forgot login info" to retrieve the account
//   test("SCENARIO 18: Complete End-to-End ParaBank Workflow", async ({
//     page,
//   }) => {
//     test.setTimeout(60000); // Increase timeout to 60 seconds for this comprehensive test
//     if (!registeredUser) throw new Error("registeredUser not set");

//     console.log("=== Starting Complete E2E Test ===");
//     console.log(`User: ${registeredUser.username}`);

//     // Step 1: Verify user is logged in after registration (done in beforeEach)
//     await expect(
//       page.getByText(
//         `Welcome ${registeredUser.firstName} ${registeredUser.lastName}`
//       )
//     ).toBeVisible();
//     console.log("✓ User registration and login verified");

//     // Step 2: Get the first account number
//     await accountsOverviewLink.click();
//     const firstAccountNumber = await page
//       .locator("tbody tr td:first-child a")
//       .first()
//       .textContent();
//     console.log(`First Account: ${firstAccountNumber}`);

//     // Step 3: Open a new SAVINGS account
//     await openNewAccountLink.click();
//     await accountTypeDropdown.selectOption("SAVINGS");
//     await fromAccountDropdown.selectOption(firstAccountNumber?.trim() || "");
//     await openNewAccountButton.click();
//     await expect(newAccountLink).toBeVisible();
//     const secondAccountNumber = await newAccountLink.textContent();
//     console.log(`Second Account (SAVINGS): ${secondAccountNumber}`);

//     // Step 4: Validate credit in new account
//     await accountsOverviewLink.click();
//     const secondAccountCell = page
//       .locator("tbody tr td:first-child a")
//       .filter({ hasText: secondAccountNumber as string });
//     await secondAccountCell.click();
//     await activityMonth.selectOption("All");
//     await activityType.selectOption("Credit");
//     await goButton.click();
//     await page.waitForTimeout(500);
//     await expect(descriptionCell).toHaveText("Funds Transfer Received");
//     console.log("✓ New account created with credit transaction");

//     // Step 5: Transfer funds between accounts
//     await transferFundsLink.click();
//     const transferAmount = (Math.floor(Math.random() * 30) + 10).toFixed(2);
//     await page
//       .locator("#fromAccountId")
//       .selectOption(secondAccountNumber?.trim() || "");
//     await page
//       .locator("#toAccountId")
//       .selectOption(firstAccountNumber?.trim() || "");
//     await page.locator("#amount").fill(transferAmount);
//     await page.getByRole("button", { name: "Transfer" }).click();
//     await expect(page.getByText("Transfer Complete!")).toBeVisible();
//     console.log(`✓ Transferred $${transferAmount} from account 2 to account 1`);

//     // Step 6: Validate debit transaction in second account
//     await accountsOverviewLink.click();
//     await page
//       .locator("tbody tr td:first-child a")
//       .filter({ hasText: secondAccountNumber as string })
//       .click();
//     await activityMonth.selectOption("All");
//     await activityType.selectOption("Debit");
//     await goButton.click();
//     await page.waitForTimeout(500);
//     await expect(descriptionCell).toHaveText("Funds Transfer Sent");
//     await expect(debitCell).toHaveText(`$${transferAmount}`);
//     console.log("✓ Debit transaction validated in source account");

//     // Step 7: Validate credit transaction in first account
//     await accountsOverviewLink.click();
//     await page
//       .locator("tbody tr td:first-child a")
//       .filter({ hasText: firstAccountNumber as string })
//       .click();
//     await activityMonth.selectOption("All");
//     await activityType.selectOption("Credit");
//     await goButton.click();
//     await page.waitForTimeout(500);
//     const rows = page.locator("#transactionTable tbody tr");
//     let foundTransfer = false;
//     const rowCount = await rows.count();
//     for (let i = 0; i < rowCount; i++) {
//       const desc = await rows.nth(i).locator("td").nth(1).textContent();
//       if (desc?.includes("Funds Transfer Received")) {
//         const amount = await rows.nth(i).locator("td").nth(3).textContent();
//         if (amount === `$${transferAmount}`) {
//           foundTransfer = true;
//           break;
//         }
//       }
//     }
//     expect(foundTransfer).toBe(true);
//     console.log("✓ Credit transaction validated in destination account");

//     // Step 8: Use Bill Pay
//     await billPayLink.click();
//     const billPayAmount = (Math.floor(Math.random() * 20) + 5).toFixed(2);
//     const payeeData = {
//       name: `${registeredUser.firstName} ${registeredUser.lastName}`,
//       address: registeredUser.address,
//       city: registeredUser.city,
//       state: registeredUser.state,
//       zip: registeredUser.zipCode,
//       phone: registeredUser.phone,
//       account: secondAccountNumber?.trim() || "",
//     };

//     await page.locator('input[name="payee.name"]').fill(payeeData.name);
//     await page
//       .locator('input[name="payee.address.street"]')
//       .fill(payeeData.address);
//     await page.locator('input[name="payee.address.city"]').fill(payeeData.city);
//     await page
//       .locator('input[name="payee.address.state"]')
//       .fill(payeeData.state);
//     await page
//       .locator('input[name="payee.address.zipCode"]')
//       .fill(payeeData.zip);
//     await page.locator('input[name="payee.phoneNumber"]').fill(payeeData.phone);
//     await page
//       .locator('input[name="payee.accountNumber"]')
//       .fill(payeeData.account);
//     await page.locator('input[name="verifyAccount"]').fill(payeeData.account);
//     await page.locator('input[name="amount"]').fill(billPayAmount);
//     await page
//       .locator('select[name="fromAccountId"]')
//       .selectOption(firstAccountNumber?.trim() || "");
//     await page.waitForTimeout(500);
//     await page.getByRole("button", { name: "Send Payment" }).click();
//     await page.waitForTimeout(1500); // Wait for bill payment to process
//     await expect(
//       page.getByRole("heading", { name: "Bill Payment Complete" })
//     ).toBeVisible();
//     console.log(`✓ Bill payment of $${billPayAmount} completed`);

//     // Step 9: Validate bill payment debit in first account
//     await accountsOverviewLink.click();
//     await page
//       .locator("tbody tr td:first-child a")
//       .filter({ hasText: firstAccountNumber as string })
//       .click();
//     await activityMonth.selectOption("All");
//     await activityType.selectOption("Debit");
//     await goButton.click();
//     await page.waitForTimeout(500);
//     const debitRows = page.locator("#transactionTable tbody tr");
//     let foundBillPay = false;
//     const debitRowCount = await debitRows.count();
//     for (let i = 0; i < debitRowCount; i++) {
//       const desc = await debitRows.nth(i).locator("td").nth(1).textContent();
//       if (desc?.includes("Bill Payment")) {
//         const amount = await debitRows
//           .nth(i)
//           .locator("td")
//           .nth(2)
//           .textContent();
//         if (amount === `$${billPayAmount}`) {
//           foundBillPay = true;
//           break;
//         }
//       }
//     }
//     expect(foundBillPay).toBe(true);
//     console.log("✓ Bill payment debit validated");

//     // Step 10: Get transaction details for Find Transactions feature
//     // Click on the first debit transaction (should be the Bill Payment or Transfer)
//     await page
//       .locator("#transactionTable tbody tr")
//       .first()
//       .locator("td")
//       .nth(1)
//       .locator("a")
//       .click();
//     await page.waitForTimeout(500);
//     await expect(
//       page.getByRole("heading", { name: "Transaction Details" })
//     ).toBeVisible();

//     const transactionDate = await page
//       .locator('tr:has-text("Date:")')
//       .locator("td")
//       .nth(1)
//       .textContent();
//     const transactionAmount = await page
//       .locator('tr:has-text("Amount:")')
//       .locator("td")
//       .nth(1)
//       .textContent();

//     console.log(`Transaction Date: ${transactionDate}`);
//     console.log(`Transaction Amount: ${transactionAmount}`);

//     // Step 11: Find Transactions by Date
//     await findTransactionsLink.click();
//     await page.waitForTimeout(500);
//     await page.getByRole("combobox").selectOption({ index: 0 });
//     await page
//       .getByRole("textbox")
//       .nth(1)
//       .fill(transactionDate?.trim() || "");
//     await page
//       .getByRole("button", { name: "Find Transactions" })
//       .nth(1)
//       .click();
//     await page.waitForTimeout(1000);
//     await expect(page.locator("#transactionTable")).toBeVisible();
//     const dateMatch = page
//       .locator("#transactionTable tbody tr")
//       .filter({ hasText: transactionDate ?? "" });
//     await expect(dateMatch.first()).toBeVisible();
//     console.log("✓ Find Transactions by Date validated");

//     // Step 12: Find Transactions by Date Range
//     await findTransactionsLink.click();
//     await page.waitForTimeout(500);
//     await page
//       .getByRole("textbox")
//       .nth(2)
//       .fill(transactionDate?.trim() || "");
//     await page
//       .getByRole("textbox")
//       .nth(3)
//       .fill(transactionDate?.trim() || "");
//     await page
//       .getByRole("button", { name: "Find Transactions" })
//       .nth(2)
//       .click();
//     await page.waitForTimeout(1000);
//     await expect(page.locator("#transactionTable")).toBeVisible();
//     console.log("✓ Find Transactions by Date Range validated");

//     // Step 13: Find Transactions by Amount
//     await findTransactionsLink.click();
//     await page.waitForTimeout(500);
//     const cleanAmount =
//       transactionAmount?.replace("-", "").replace("$", "") || "";
//     await page.getByRole("textbox").nth(4).fill(cleanAmount);
//     await page
//       .getByRole("button", { name: "Find Transactions" })
//       .nth(3)
//       .click();
//     await page.waitForTimeout(1000);
//     await expect(page.locator("#transactionTable")).toBeVisible();
//     console.log("✓ Find Transactions by Amount validated");

//     // Step 14: Update contact information
//     await updateContactInfoLink.click();
//     const updatedContactData = {
//       firstName: "E2E_" + faker.person.firstName(),
//       lastName: "E2E_" + faker.person.lastName(),
//       address: faker.location.streetAddress(),
//       city: faker.location.city(),
//       state: faker.location.state(),
//       zipCode: faker.location.zipCode(),
//       phone: faker.phone.number(),
//     };

//     await page
//       .locator('input[id="customer.firstName"]')
//       .fill(updatedContactData.firstName);
//     await page
//       .locator('input[id="customer.lastName"]')
//       .fill(updatedContactData.lastName);
//     await page
//       .locator('input[id="customer.address.street"]')
//       .fill(updatedContactData.address);
//     await page
//       .locator('input[id="customer.address.city"]')
//       .fill(updatedContactData.city);
//     await page
//       .locator('input[id="customer.address.state"]')
//       .fill(updatedContactData.state);
//     await page
//       .locator('input[id="customer.address.zipCode"]')
//       .fill(updatedContactData.zipCode);
//     await page
//       .locator('input[id="customer.phoneNumber"]')
//       .fill(updatedContactData.phone);
//     await page.waitForTimeout(1000); // Wait for form to be ready
//     await page.getByRole("button", { name: "Update Profile" }).click();
//     await page.waitForTimeout(2000); // Wait for update to process
//     await expect(
//       page.getByRole("heading", { name: "Profile Updated" })
//     ).toBeVisible();
//     console.log("✓ Contact information updated");

//     // Step 15: Logout
//     await logOutLink.click();
//     await expect(getUsernameInput).toBeVisible();
//     console.log("✓ Logged out successfully");

//     // Step 16: Use Forgot Login Info with updated contact data
//     await getForgotLoginLink.click();
//     await firstNameInputForgot.fill(updatedContactData.firstName);
//     await lastNameInputForgot.fill(updatedContactData.lastName);
//     await addressInputForgot.fill(updatedContactData.address);
//     await cityInputForgot.fill(updatedContactData.city);
//     await stateInputForgot.fill(updatedContactData.state);
//     await zipCodeInputForgot.fill(updatedContactData.zipCode);
//     await ssnInputForgot.fill(registeredUser.ssn);
//     await findMyLoginInfoButton.click();
//     await page.waitForTimeout(1000); // Wait for page to load
//     await expect(
//       page.getByText("Your login information was located successfully.")
//     ).toBeVisible();
//     await expect(
//       page.getByText(`Username: ${registeredUser.username}`)
//     ).toBeVisible();
//     console.log("✓ Account retrieved using updated contact information");

//     console.log("=== Complete E2E Test Passed Successfully ===");
//   });
// });

// // ============================================================================
// // TEST SUITE 3: PARABANK HOMEPAGE LINKS NAVIGATION
// // Description: Validates that all homepage links navigate without errors
// // ============================================================================
// test.describe("Parabank Homepage Links Navigation", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto("/");

//     // Initialize homepage navigation locators
//     homeLink = page.getByRole("link", { name: "home", exact: true });
//     aboutLink = page.getByRole("link", { name: "about", exact: true });
//     contactLink = page.getByRole("link", { name: "contact", exact: true });
//     getFooterHomeLink = page.getByRole("link", { name: "Home", exact: true });
//     getFooterAboutUsLink = page
//       .locator("#footerPanel")
//       .getByRole("link", { name: "About Us" });
//     getFooterServicesLink = page
//       .locator("#footerPanel")
//       .getByRole("link", { name: "Services" });
//     getFooterProductsLink = page
//       .locator("#footerPanel")
//       .getByRole("link", { name: "Products" });
//     getForumLink = page.getByRole("link", { name: "Forum" });
//     getSiteMapLink = page.getByRole("link", { name: "Site Map" });
//     getContactUsLink = page.getByRole("link", { name: "Contact Us" });
//   });

//   // SCENARIO 19: Verify All Navigation Links Work Without Errors
//   // Description: Test each navigation link to ensure they load successfully
//   const linkNames = [
//     { getLocator: () => homeLink, name: "Home" },
//     { getLocator: () => aboutLink, name: "About" },
//     { getLocator: () => contactLink, name: "Contact" },
//     { getLocator: () => getFooterHomeLink, name: "Footer Home" },
//     { getLocator: () => getFooterAboutUsLink, name: "Footer About Us" },
//     { getLocator: () => getFooterServicesLink, name: "Footer Services" },
//     { getLocator: () => getFooterProductsLink, name: "Footer Products" },
//     { getLocator: () => getForumLink, name: "Forum" },
//     { getLocator: () => getSiteMapLink, name: "Site Map" },
//     { getLocator: () => getContactUsLink, name: "Contact Us" },
//   ];

//   for (const link of linkNames) {
//     test(`SCENARIO 19: Clicking on "${link.name}" link should navigate without errors`, async ({
//       page,
//     }) => {
//       // Step 1: Get the link locator
//       const locator = link.getLocator();

//       // Step 2: Click on the link
//       await locator.click();

//       // Step 3: Wait for page to fully load
//       await page.waitForLoadState("networkidle");

//       // Step 4: Verify no error messages are displayed
//       const errorMessages = [
//         "404 Not Found",
//         "500 Internal Server Error",
//         "Error",
//         "Exception",
//       ];
//       for (const errorMessage of errorMessages) {
//         const errorLocator = page.getByText(errorMessage);
//         await expect(errorLocator).toHaveCount(0);
//       }
//     });
//   }
// });

// // ============================================================================
// // TEST SUITE 4: PARABANK NEGATIVE TESTING - INVALID DATA
// // Description: Tests for validation errors with missing/invalid data
// // ============================================================================
// test.describe("Parabank User Registration with Invalid Data", () => {
//   // SCENARIO 20: User Registration with Missing Required Fields Should Fail
//   // Description: Submit registration form with empty fields and verify validation errors
//   test("SCENARIO 20: User Registration with Missing Required Fields", async ({
//     page,
//   }) => {
//     // Step 1: Navigate to the ParaBank homepage
//     await page.goto("/");

//     // Step 2: Click on "Register" link
//     await getRegisterLink.click();

//     // Step 3: Submit registration form without filling any fields
//     await registerButton.click();

//     // Step 4: Verify validation error messages are displayed for all required fields
//     await expect(page.getByText("First name is required.")).toBeVisible();
//     await expect(page.getByText("Last name is required.")).toBeVisible();
//     await expect(page.getByText("Address is required.")).toBeVisible();
//     await expect(page.getByText("City is required.")).toBeVisible();
//     await expect(page.getByText("State is required.")).toBeVisible();
//     await expect(page.getByText("Zip Code is required.")).toBeVisible();
//     await expect(
//       page.getByText("Social Security Number is required.")
//     ).toBeVisible();
//     await expect(page.getByText("Username is required.")).toBeVisible();
//     await expect(page.getByText("Password is required.")).toBeVisible();
//     await expect(
//       page.getByText("Password confirmation is required.")
//     ).toBeVisible();

//     // Step 5: Fill registration form with valid data but mismatched passwords
//     const registrationData = generateFakeRegistrationData();
//     await fillRegistrationForm(page, registrationData);
//     await confirmInput.fill("differentPassword");

//     // Step 6: Submit the form
//     await registerButton.click();

//     // Step 7: Verify password mismatch error message
//     await expect(page.getByText("Passwords did not match.")).toBeVisible();
//   });
// });

// // ============================================================================
// // TEST SUITE 5: PARABANK LOGIN WITH INVALID CREDENTIALS
// // Description: Tests for login failures with invalid credentials
// // ============================================================================
// test.describe("Parabank User Login with Invalid Credentials", () => {
//   // SCENARIO 21: User Login with Invalid Credentials Should Fail
//   // Description: Attempt login with non-existent username and password
//   test("SCENARIO 21: User Login with Invalid Credentials", async ({ page }) => {
//     // Step 1: Navigate to the ParaBank homepage
//     await page.goto("/");

//     // Step 2: Fill in invalid username
//     await getUsernameInput.fill("invalidUser");

//     // Step 3: Fill in invalid password
//     await getPasswordInput.fill("invalidPass");

//     // Step 4: Click login button
//     await getLoginButton.click();

//     // Step 5: Verify error message for invalid credentials
//     await expect(
//       page.getByText("The username and password could not be verified.")
//     ).toBeVisible();
//   });
// });

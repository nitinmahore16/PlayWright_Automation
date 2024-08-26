const { test } = require('@playwright/test');
const { HomePage } = require('../pages/homePage');
const { LoginPage } = require('../pages/loginPage');
const { AccountPage } = require('../pages/accountPage');
const testData = require('../test-data/registerUserData.json');

test('Register User', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const accountPage = new AccountPage(page);

    await homePage.navigate();
    await homePage.verifyHomePage();
    await homePage.clickSignUpLogin();

    await loginPage.verifyNewUserSignUp();
    await loginPage.enterNameAndEmail(testData.name, testData.email);
    await loginPage.clickSignUpButton();

    await accountPage.verifyAccountInformation();
    // Continue with filling account details and completing registration
    await accountPage.clickDeleteAccount();
    await accountPage.verifyAccountDeleted();
});

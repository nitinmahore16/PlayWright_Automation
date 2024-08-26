const { test } = require('@playwright/test');
const { HomePage } = require('../pages/homePage');
const { LoginPage } = require('../pages/loginPage');
const { AccountPage } = require('../pages/accountPage');
const testData = require('../test-data/registerUserData.json');

test('Login User with correct email and password', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const accountPage = new AccountPage(page);

    await homePage.navigate();
    await homePage.verifyHomePage();
    await homePage.clickSignUpLogin();

    await loginPage.login(testData.email, testData.password);
    await accountPage.verifyLoggedInAs(testData.name);

    await accountPage.clickDeleteAccount();
    await accountPage.verifyAccountDeleted();
});

const { test } = require('@playwright/test');
const { HomePage } = require('../pages/homePage');
const { ProductsPage } = require('../pages/productsPage');
const { CartPage } = require('../pages/cartPage');
const { CheckoutPage } = require('../pages/checkoutPage');
const { AccountPage } = require('../pages/accountPage');
const testData = require('../test-data/registerUserData.json');

test('Download Invoice after purchase order', async ({ page }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const accountPage = new AccountPage(page);

    await homePage.navigate();
    await homePage.verifyHomePage();
    await homePage.clickProducts();

    await productsPage.addFirstProductToCart();
    await homePage.clickCart();

    await cartPage.clickProceedToCheckout();
    await homePage.clickSignUpLogin();

    // Register and login
    await loginPage.verifyNewUserSignUp();
    await loginPage.enterNameAndEmail(testData.name, testData.email);
    await loginPage.clickSignUpButton();
    await accountPage.verifyAccountCreated();
    await accountPage.clickContinue();
    await accountPage.verifyLoggedInAs(testData.name);

    await homePage.clickCart();
    await cartPage.clickProceedToCheckout();

    // Fill in the checkout details
    await checkoutPage.clickPlaceOrder();
    await checkoutPage.enterPaymentDetails({
        nameOnCard: testData.name,
        cardNumber: '1234567890123456',
        cvc: '123',
        expirationMonth: '12',
        expirationYear: '2025'
    });
    await checkoutPage.clickPayAndConfirmOrder();
    await checkoutPage.verifyOrderPlaced();

    // Download Invoice
    await checkoutPage.clickDownloadInvoice();

    await accountPage.clickDeleteAccount();
    await accountPage.verifyAccountDeleted();
});

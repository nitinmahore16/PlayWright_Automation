const { test } = require('@playwright/test');
const { HomePage } = require('../pages/homePage');
const { ProductsPage } = require('../pages/productsPage');
const { CartPage } = require('../pages/cartPage');

test('Add Products in Cart', async ({ page }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await homePage.navigate();
    await homePage.verifyHomePage();
    await homePage.clickProducts();

    await productsPage.addFirstProductToCart();
    await productsPage.addSecondProductToCart();
    await homePage.clickCart();

    await cartPage.verifyCartItemsCount(2);
    // Add more verifications as needed
});

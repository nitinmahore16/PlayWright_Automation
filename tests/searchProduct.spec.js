const { test } = require('@playwright/test');
const { HomePage } = require('../pages/homePage');
const { ProductsPage } = require('../pages/productsPage');

test('Search Product', async ({ page }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);

    await homePage.navigate();
    await homePage.verifyHomePage();
    await homePage.clickProducts();

    await productsPage.searchProduct('Dress');
    await productsPage.verifySearchedProductsVisible();
    await productsPage.verifyProductList();
});

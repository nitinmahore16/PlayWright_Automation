const { test } = require('@playwright/test');
const { HomePage } = require('../pages/homePage');

test('Verify Subscription in Cart page', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigate();
    await homePage.verifyHomePage();
    await homePage.clickCart();

    await homePage.scrollToFooter();
    await expect(homePage.footerSubscription).toBeVisible();

    await homePage.page.fill('input[type="email"]', 'testuser@example.com');
    await homePage.page.click('button[id="subscribe"]');

    await expect(homePage.page.locator('div:has-text("You have been successfully subscribed!")')).toBeVisible();
});

const { test } = require('@playwright/test');
const { HomePage } = require('../pages/homePage');

test('Verify Scroll Up using Arrow button and Scroll Down functionality', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigate();
    await homePage.verifyHomePage();
    
    await homePage.scrollToFooter();
    await expect(homePage.footerSubscription).toBeVisible();

    await homePage.clickScrollToTop();
    await expect(homePage.page.locator('h2:has-text("Full-Fledged practice website for Automation Engineers")')).toBeVisible();
});

class AccountPage {
    constructor(page) {
        this.page = page;
        this.accountInformation = page.locator('h2:has-text("ENTER ACCOUNT INFORMATION")');
        this.loggedInAsUsername = page.locator('b:has-text("Logged in as")');
        this.deleteAccountButton = page.locator('a:has-text("Delete Account")');
        this.accountCreatedMessage = page.locator('h2:has-text("ACCOUNT CREATED!")');
        this.continueButton = page.locator('button:has-text("Continue")');
        this.accountDeletedMessage = page.locator('h2:has-text("ACCOUNT DELETED!")');
    }

    async verifyAccountInformation() {
        await expect(this.accountInformation).toBeVisible();
    }

    async verifyLoggedInAs(username) {
        await expect(this.loggedInAsUsername).toHaveText(`Logged in as ${username}`);
    }

    async clickDeleteAccount() {
        await this.deleteAccountButton.click();
    }

    async verifyAccountCreated() {
        await expect(this.accountCreatedMessage).toBeVisible();
    }

    async clickContinue() {
        await this.continueButton.click();
    }

    async verifyAccountDeleted() {
        await expect(this.accountDeletedMessage).toBeVisible();
    }
}

module.exports = { AccountPage };

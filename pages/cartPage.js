class CartPage {
    constructor(page) {
        this.page = page;
        this.cartItems = page.locator('.cart_info tbody tr');
        this.totalPrice = page.locator('.cart_total_price');
        this.proceedToCheckoutButton = page.locator('a:has-text("Proceed To Checkout")');
    }

    async verifyCartItemsCount(count) {
        await expect(this.cartItems).toHaveCount(count);
    }

    async verifyTotalPrice(price) {
        await expect(this.totalPrice).toHaveText(price);
    }

    async clickProceedToCheckout() {
        await this.proceedToCheckoutButton.click();
    }
}

module.exports = { CartPage };

class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.placeOrderButton = page.locator('a:has-text("Place Order")');
        this.paymentDetails = {
            nameOnCard: page.locator('input[name="name_on_card"]'),
            cardNumber: page.locator('input[name="card_number"]'),
            cvc: page.locator('input[name="cvc"]'),
            expirationMonth: page.locator('input[name="expiry_month"]'),
            expirationYear: page.locator('input[name="expiry_year"]')
        };
        this.payAndConfirmOrderButton = page.locator('button:has-text("Pay and Confirm Order")');
        this.orderPlacedMessage = page.locator('p:has-text("Your order has been placed successfully!")');
        this.downloadInvoiceButton = page.locator('a:has-text("Download Invoice")');
    }

    async enterPaymentDetails(paymentDetails) {
        await this.paymentDetails.nameOnCard.fill(paymentDetails.nameOnCard);
        await this.paymentDetails.cardNumber.fill(paymentDetails.cardNumber);
        await this.paymentDetails.cvc.fill(paymentDetails.cvc);
        await this.paymentDetails.expirationMonth.fill(paymentDetails.expirationMonth);
        await this.paymentDetails.expirationYear.fill(paymentDetails.expirationYear);
    }

    async clickPlaceOrder() {
        await this.placeOrderButton.click();
    }

    async clickPayAndConfirmOrder() {
        await this.payAndConfirmOrderButton.click();
    }

    async verifyOrderPlaced() {
        await expect(this.orderPlacedMessage).toBeVisible();
    }

    async clickDownloadInvoice() {
        await this.downloadInvoiceButton.click();
    }
}

module.exports = { CheckoutPage };

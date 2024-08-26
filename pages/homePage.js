class HomePage {
  constructor(page) {
      this.page = page;
      this.signUpLoginButton = page.locator('a[href="/login"]');
      this.productsButton = page.locator('a[href="/products"]');
      this.cartButton = page.locator('a[href="/view_cart"]');
      this.footerSubscription = page.locator('footer h2:has-text("SUBSCRIPTION")');
      this.scrollToTopButton = page.locator('a[id="scrollUp"]');
  }

  async navigate() {
      await this.page.goto('http://automationexercise.com');
  }

  async verifyHomePage() {
      await expect(this.page).toHaveURL('http://automationexercise.com/');
  }

  async clickSignUpLogin() {
      await this.signUpLoginButton.click();
  }

  async clickProducts() {
      await this.productsButton.click();
  }

  async clickCart() {
      await this.cartButton.click();
  }

  async scrollToFooter() {
      await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }

  async clickScrollToTop() {
      await this.scrollToTopButton.click();
  }
}

module.exports = { HomePage };

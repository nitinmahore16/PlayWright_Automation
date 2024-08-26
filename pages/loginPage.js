class LoginPage {
  constructor(page) {
      this.page = page;
      this.newUserSignUp = page.locator('h2:has-text("New User Signup!")');
      this.nameInput = page.locator('input[name="name"]');
      this.emailInput = page.locator('input[name="email"]');
      this.signUpButton = page.locator('button:has-text("Signup")');
      this.loginEmailInput = page.locator('input[data-qa="login-email"]');
      this.loginPasswordInput = page.locator('input[data-qa="login-password"]');
      this.loginButton = page.locator('button[data-qa="login-button"]');
  }

  async verifyNewUserSignUp() {
      await expect(this.newUserSignUp).toBeVisible();
  }

  async enterNameAndEmail(name, email) {
      await this.nameInput.fill(name);
      await this.emailInput.fill(email);
  }

  async clickSignUpButton() {
      await this.signUpButton.click();
  }

  async login(email, password) {
      await this.loginEmailInput.fill(email);
      await this.loginPasswordInput.fill(password);
      await this.loginButton.click();
  }
}

module.exports = { LoginPage };

class ProductsPage {
    constructor(page) {
        this.page = page;
        this.searchInput = page.locator('input[id="search_product"]');
        this.searchButton = page.locator('button[id="submit_search"]');
        this.searchedProducts = page.locator('h2:has-text("SEARCHED PRODUCTS")');
        this.productList = page.locator('.productinfo.text-center');
        this.addToCartButtons = page.locator('a[data-product-id]');  // Assuming it’s for Add to Cart button
    }

    async searchProduct(productName) {
        await this.searchInput.fill(productName);
        await this.searchButton.click();
    }

    async verifySearchedProductsVisible() {
        await expect(this.searchedProducts).toBeVisible();
    }

    async verifyProductList() {
        await expect(this.productList).toHaveCountGreaterThan(0);
    }

    async addFirstProductToCart() {
        await this.addToCartButtons.nth(0).click();
    }

    async addSecondProductToCart() {
        await this.addToCartButtons.nth(1).click();
    }
}

module.exports = { ProductsPage };

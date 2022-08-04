const { expect } = require('@playwright/test');

exports.SearchPage = class SearchPage {

    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {
        this.page = page;
        this.headerLabel = page.locator("//h2[contains(text(), 'Search')]");
        this.resulSearchLabel = page.locator('//h3');
    }

    async chekingFirstResult() {
        const firstHeaderLabel = await this.headerLabel.isVisible();
        expect(firstHeaderLabel).toBeTruthy();
    }

    async chekingSecondResult() {
        const secondHeaderLabel = await this.resulSearchLabel.isVisible();
        expect(secondHeaderLabel).toBeTruthy();
    }
}
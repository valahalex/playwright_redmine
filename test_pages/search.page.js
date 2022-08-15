const { expect } = require('@playwright/test');

exports.SearchPage = class SearchPage {

    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {
        this.page = page;
    }

    get headerLabel() {
        return this.page.locator("//h2[contains(text(), 'Search')]");
    }

    get resulSearchLabel() {
        return this.page.locator('//h3');
    }
}
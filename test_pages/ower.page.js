const { expect } = require('@playwright/test');

exports.OwerPage = class OwerPage {

    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {
        this.page = page;
        this.owerLabel = page.locator('#content');

    }

    async chekingOwerResult() {
        const owerHeadLabel = await this.owerLabel.isVisible();
        expect(owerHeadLabel).toBeTruthy();
    }

}
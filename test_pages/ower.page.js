exports.OwerPage = class OwerPage {

    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {
        this.page = page;
    }

    get owerLabel() {
        return this.page.locator('#content');
    }
}
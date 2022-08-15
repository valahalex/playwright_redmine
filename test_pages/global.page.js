export default class GlobalPage {

    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {
        this.page = page;        
    }

    async openPage(path) {
        await this.page.goto(path);
    }
    
    async tapOn() {
        await this.click();
    }
}
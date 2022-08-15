const { expect } = require('@playwright/test');

exports.RedmineGuidePage = class RedmineGuidePage {

    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {
        this.page = page;

    }

    get emailConfigurationLabel() {
        return this.page.locator('[href="/projects/redmine/wiki/EmailConfiguration"]');
    }

    get link() {
        return this.page.locator('p a[href*="http://g"]');
    }
    
    get curentPageLink() {
        return this.page.locator('h3 a[href="#action-mailer-configuration"]');
    } 

    async clickOnEmailConfButton() {
        await this.emailConfigurationLabel.click();
    }

    async clickOnLink() {
        await this.link.click();
    }    
}
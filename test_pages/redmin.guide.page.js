const { expect } = require('@playwright/test');

exports.RedmineGuidePage = class RedmineGuidePage {

    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {
        this.page = page;
        this.emailConfigurationLabel = page.locator('[href="/projects/redmine/wiki/EmailConfiguration"]');
        this.link = page.locator('p a[href*="http://g"]');
        this.curentPageLink = page.locator('h3 a[href="#action-mailer-configuration"]');
    }

    async clickOnEmailConfButton() {
        await this.emailConfigurationLabel.click();
    }

    async clickOnLink() {
        await this.link.click();
    }    
}
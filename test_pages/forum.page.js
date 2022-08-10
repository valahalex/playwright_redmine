const { expect } = require('@playwright/test');

exports.ForumPage = class ForumPage {

    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {
        this.page = page;
        this.forumButton = page.locator('[href="/projects/redmine/boards"]');
        this.forumLabel = page.locator("//h2[contains(text(),'Forum')]");

    }

    async clickOnForumButton() {
        this.forumButton.click();
    }
}
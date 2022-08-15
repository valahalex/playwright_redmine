exports.ForumPage = class ForumPage {

    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {
        this.page = page;
    }

    get forumButton() {
        return this.page.locator('[href="/projects/redmine/boards"]');
    }

    get forumLabel() {
        return this.page.locator("//h2[contains(text(),'Forum')]");
    }

    async clickOnForumButton() {
        this.forumButton.click();
    }
}
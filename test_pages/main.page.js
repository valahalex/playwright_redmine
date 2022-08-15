const { default: GlobalPage } = require('../test_pages/global.page.js');

exports.MainPage = class MainPage extends GlobalPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super();
    this.page = page;
  }

  get registerButton() {
    return this.page.locator('.register');
  }

  get searchInputField() {
    return this.page.locator('#q');
  }

  get owerButton() {
    return this.page.locator('[href="/projects/redmine"]')
  }

  get forumButton() {
    return this.page.locator('[href="/projects/redmine/boards"]');
  }

  get guideButton() {
    return this.page.locator('//*[text()="Redmine guide"]');
  }

  async goToPage() {
    await super.openPage('https://www.redmine.org/')
  }

  async clickOnregistrButton() {
    await this.registerButton.click();
  }

  async clickOnSearchButton() {
    await this.searchInputField.click();
  }

  async addToSearchInputField() {
    await this.searchInputField.fill('test');
  }

  async presEnter() {
    await this.page.keyboard.press('Enter');
  }

  async clickOnOwerButton() {
    await this.owerButton.click();
  }

  async clickOnForumButton() {
    await this.forumButton.click();
  }

  async clickOnGuideButton() {
    await this.guideButton.click();
  }

}
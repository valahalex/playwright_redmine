const { expect } = require('@playwright/test');

exports.MainPage = class MainPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.registerButton = page.locator('.register');
    this.searchInputField = page.locator('#q');
    this.owerButton = page.locator('[href="/projects/redmine"]');
    this.forumButton = page.locator('[href="/projects/redmine/boards"]');
    this.guideButton = page.locator('//*[text()="Redmine guide"]');
  }

  async goto() {
    await this.page.goto('https://www.redmine.org/');
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
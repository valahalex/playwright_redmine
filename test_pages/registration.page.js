const { expect } = require('@playwright/test');
const { RandomSome } = require('../unity/random.js');

exports.RegistrationPage = class RegistrationPage {


    /**
    * @param {import('@playwright/test').Page} page
    */

  constructor(page) {
    this.page = page;
    this.userLoginInputFild = page.locator('#user_login');
    this.userPasswordInputField = page.locator('#user_password');
    this.userPasswordConfInputField = page.locator('#user_password_confirmation');
    this.userFirstNameInputField = page.locator('#user_firstname');
    this.userLastNameInputField = page.locator('#user_lastname');
    this.userEmailInputField = page.locator('#user_mail');
    this.submitButton = page.locator('[name="commit"]');   
    this.confirmLabel = page.locator('#flash_notice'); 
  }

  async clickOnSubmitButton() {
    await this.submitButton.click();
  }

  async inputLogin() {
    const randomSome = new RandomSome(this.page);
    await this.userLoginInputFild.fill('user' + await randomSome.makeid(5));
  }

  async inputPassword() {
    const randomSome = new RandomSome(this.page);
    const password = toString(randomSome.makeid(9));
    await this.userPasswordInputField.fill(password);
    await this.userPasswordConfInputField.fill(password);
  }

  async inputFirstName() {
    const randomSome = new RandomSome(this.page);
    await this.userFirstNameInputField.fill('name' + await randomSome.makeid(4));
  }

  async inputLastName() {
    const randomSome = new RandomSome(this.page);
    await this.userLastNameInputField.fill('lastname' + await randomSome.makeid(3))
  }

  async inputEmail() {
    const randomSome = new RandomSome(this.page);
    await this.userEmailInputField.fill(await randomSome.makeid(7) + '@gmail.com');
  }

  async isConfLabelIsVisible() {
    const result = await this.confirmLabel.isVisible();
    expect(result).toBeTruthy();
  }

}
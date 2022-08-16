const randomstring = require("randomstring");

exports.RegistrationPage = class RegistrationPage {


    /**
    * @param {import('@playwright/test').Page} page
    */

  constructor(page) {
    this.page = page;      
  }

  get userLoginInputFild() {
    return this.page.locator('#user_login');
  }

  get userPasswordInputField() {
    return this.page.locator('#user_password');
  }

  get userPasswordConfInputField() {
    return this.page.locator('#user_password_confirmation');
  }

  get userFirstNameInputField() {
    return this.page.locator('#user_firstname');
  }

  get userLastNameInputField() {
    return this.page.locator('#user_lastname');
  }

  get userEmailInputField() {
    return this.page.locator('#user_mail');
  }

  get submitButton() {
    return this.page.locator('[name="commit"]'); 
  }

  get confirmLabel() {
    return this.page.locator('#flash_notice');
  }

  async clickOnSubmitButton() {
    await this.submitButton.click();
  }

  async inputLogin() {
    await this.userLoginInputFild.fill('user' + randomstring.generate(5));
  }

  async inputPassword() {
    const password = toString(randomstring.generate(9));
    await this.userPasswordInputField.fill(password);
    await this.userPasswordConfInputField.fill(password);
  }

  async inputFirstName() {
    await this.userFirstNameInputField.fill('name' + randomstring.generate(4));
  }

  async inputLastName() {
    await this.userLastNameInputField.fill('lastname' + randomstring.generate(3))
  }

  async inputEmail() {
    await this.userEmailInputField.fill(randomstring.generate(7) + '@gmail.com');
  }
}
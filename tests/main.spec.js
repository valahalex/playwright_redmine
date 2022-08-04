const { test, expect } = require('@playwright/test');
const { MainPage } = require('../test_pages/main.page.js');
const { RegistrationPage } = require('../test_pages/registration.page.js');
const { SearchPage } = require('../test_pages/search.page.js');
const { OwerPage } = require('../test_pages/ower.page.js');

test('First test redmine.org', async ({page})=> {

  const mainPage = new MainPage(page);
  const registrationPage = new RegistrationPage(page);
  
  await mainPage.goto();
  await mainPage.clickOnregistrButton();
  await registrationPage.inputLogin();
  await registrationPage.inputPassword();
  await registrationPage.inputFirstName();
  await registrationPage.inputLastName();
  await registrationPage.inputEmail();
  await registrationPage.clickOnSubmitButton();
  await registrationPage.isConfLabelIsVisible();
});

test('second test redmine.org', async ({page})=> {

  const mainPage = new MainPage(page);
  const searchPage = new SearchPage(page);

  await mainPage.goto();
  await mainPage.clickOnSearchButton();
  await mainPage.addToSearchInputField();
  await mainPage.presEnter();
  await searchPage.headerLabel.waitFor();
  await searchPage.chekingFirstResult();
  await searchPage.chekingSecondResult();
});


test('third test redmine.org', async ({page})=> {
  
  const mainPage = new MainPage(page);
  const owerPage = new OwerPage(page);

  await mainPage.goto();
  await mainPage.clickOnOwerButton();
  await owerPage.chekingOwerResult();
})

const { test, expect } = require('@playwright/test');
const { MainPage } = require('../test_pages/main.page.js');
const { RegistrationPage } = require('../test_pages/registration.page.js');
const { SearchPage } = require('../test_pages/search.page.js');
const { OwerPage } = require('../test_pages/ower.page.js');
const { ForumPage } = require('../test_pages/forum.page.js');
const { RedmineGuidePage } = require('../test_pages/redmin.guide.page.js');

test('First test: check registration function', async ({page})=> {

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
  expect(await registrationPage.confirmLabel.isVisible()).toBeTruthy();

});

test('Second test: check search function', async ({page})=> {

  const mainPage = new MainPage(page);
  const searchPage = new SearchPage(page);

  await mainPage.goto();
  await mainPage.clickOnSearchButton();
  await mainPage.addToSearchInputField();
  await mainPage.presEnter();
  await searchPage.headerLabel.waitFor();
  expect(await searchPage.headerLabel.isVisible()).toBeTruthy();
  expect(await searchPage.resulSearchLabel.isVisible()).toBeTruthy();
});


test('Third test: does the ower button work?', async ({page})=> {

  const mainPage = new MainPage(page);
  const owerPage = new OwerPage(page);

  await mainPage.goto();
  await mainPage.clickOnOwerButton();
  expect(await owerPage.owerLabel.isVisible()).toBeTruthy();
});

test('Fourth test: does the forum button work?', async ({page})=> {

  const mainPage = new MainPage(page);
  const forumPage = new ForumPage(page);

  await mainPage.goto();
  await mainPage.clickOnForumButton();
  await page.waitForLoadState();
  expect(await forumPage.forumLabel.isVisible()).toBeTruthy();
});

test('Fifth test: do links to external sites work?', async ({page})=> {

  const mainPage = new MainPage(page);
  const redminGuidePage = new RedmineGuidePage(page);

  await mainPage.goto();
  await mainPage.clickOnGuideButton();
  await redminGuidePage.clickOnEmailConfButton();
  await redminGuidePage.clickOnLink();
  await page.waitForLoadState();
  expect(await redminGuidePage.curentPageLink.isVisible()).toBeTruthy();
});

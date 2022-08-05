const { test, expect } = require('@playwright/test');
const { MainPage } = require('../test_pages/main.page.js');
const { RegistrationPage } = require('../test_pages/registration.page.js');
const { SearchPage } = require('../test_pages/search.page.js');
const { OwerPage } = require('../test_pages/ower.page.js');
const { ForumPage } = require('../test_pages/forum.page.js');
const { RedmineGuidePage } = require('../test_pages/redmin.guide.page.js');

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

test('Second test redmine.org', async ({page})=> {

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


test('Third test redmine.org', async ({page})=> {

  const mainPage = new MainPage(page);
  const owerPage = new OwerPage(page);

  await mainPage.goto();
  await mainPage.clickOnOwerButton();
  await owerPage.chekingOwerResult();
});

test('Fourth test redmine.org', async ({page})=> {

  const mainPage = new MainPage(page);
  const forumPage = new ForumPage(page);

  await mainPage.goto();
  await mainPage.clickOnForumButton();
  await page.waitForLoadState();
  await forumPage.chekingForumResult();
});

test('Fifth test redmine.org', async ({page})=> {

  const mainPage = new MainPage(page);
  const redminGuidePage = new RedmineGuidePage(page);
  

  await mainPage.goto();
  await mainPage.clickOnGuideButton();
  await redminGuidePage.clickOnEmailConfButton();
  await redminGuidePage.clickOnLink();
  await page.waitForLoadState();
  await redminGuidePage.chekingLinkResult();
});

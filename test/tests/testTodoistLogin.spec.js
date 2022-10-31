const login = require('../steps/login-step.js');
const envstage  = require('../env/stage-env.js');

module.exports = {
  '@tags': ['Regression'],

  //FUNCTION OPEN BROWSER
  before: async (browser) => {
    await envstage(browser).openBrowser();
  },
  //GO TO LOGIN PAGE
  '001_TODOIST_USER_LOGIN_SUCCESS': async (browser) =>{
    await login(browser).mainPageDisplayed();
    await login(browser).goToLoginPage();
    await login(browser).loginPageDisplayed();
    await login(browser).setLoginUser();
    await login(browser).successLogin();
   },
  //LOGIN PAGE VALIDATE
  '002_TODOIST_USER_LOGIN_INCORRECT_EMAIL': async (browser) =>{
    await login(browser).mainPageDisplayed();
    await login(browser).goToLoginPage();
    await login(browser).loginPageDisplayed();
    await login(browser).setInvalidUser();
   },
  //FUNCTION CLOSE BROWSER
  after: async (browser) =>{
    await envstage(browser).closeBrowser();
  }
};
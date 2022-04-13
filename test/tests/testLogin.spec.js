const login = require('../steps/login-step.js');
const envstage  = require('../env/stage-env.js');

module.exports = {
  '@tags': ['NightwatchSuite'],

  //FUNCTION OPEN BROWSER
  before: async (browser) => {
    await envstage(browser).openBrowser();
  },
  //GO TO LOGIN PAGE
  'Go to Login: Navigate to Login Page': async (browser) =>{
    await login(browser).mainPageDisplayed();
    await login(browser).goToLoginPage();
   },
  //LOGIN PAGE VALIDATE
  'Login: Login Standar User': async (browser) =>{
    await login(browser).loginPageDisplayed();
    await login(browser).setLoginUser();
   },
  //VALIDATE LOGIN STANDAR USER
  'Login: Standar User Access Success': async (browser) =>{
    await login(browser).successLogin();
  },
  //LOG OUT SUCCESFULLY
  'Log Out: Navigate to Log Out Option': async (browser) =>{
    await login(browser).goToLogOut();
   },
  //LOG OUT SUCCESFULLY
  'Log Out: Log out from Standar User': async (browser) =>{
    await login(browser).logOut();
   },
  //FUNCTION CLOSE BROWSER
  after: async (browser) =>{
    await envstage(browser).closeBrowser();
  }
};
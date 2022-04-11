const login = require('../steps/login-step.js');
const envstage  = require('../env/stage-env.js');

module.exports = {
  '@tags': ['NightwatchSuite'],

  //FUNCTION OPEN BROWSER
  before: async (browser) => {
    await envstage(browser).openBrowser();
  },
  //LOGIN PAGE VALIDATE
  'Login: Login Standar User': async (browser) =>{
    await login(browser).validateMainPage();
    await login(browser).goToLoginPage();
    await login(browser).loginUser();
   },
  //LOG OUT SUCCESFULLY
  'Log Out: Log out from Standar User': async (browser) =>{
    await login(browser).logOutFunction();
   },
  //LOGIN WITH INVALID USER
   'Login: Login Invalid User': async (browser) =>{
    await login(browser).loginInvalidUser();
   },
  //LOGIN PAGE VALIDATE
  'Login: Login Standar User 1st Test case': async (browser) =>{
    await login(browser).loginUser();
   },
  //FUNCTION CLOSE BROWSER
  after: async (browser) =>{
    await envstage(browser).closeBrowser();
  }
};
const usersTest = require('../data/userData.json');
const dataTest = require('../data/testData.json');
                                 
module.exports = function (browser) {
    const loginPage = browser.page.loginPage();
    const mainPage = browser.page.mainPage();

        this.goToLoginPage = async () => {
            await mainPage.click('@loginButton')
        };
    
        this.loginUser = async () => {
            await loginPage.click('@email')
            await loginPage.setValue('@email', usersTest.email[0])
            await loginPage.click('@password')
            await loginPage.setValue('@password', usersTest.password)
            await loginPage.click('@loginbutton')
            await mainPage.assert.visible('@homeBtnApp')
        };

        this.validateMainPage = async () => {
            await mainPage.assert.visible('@logoTodoist')
            await mainPage.assert.visible('@loginButton')
        }

        this.invalidUser = async () => {
            await loginPage.assert.visible('@errorLoginText')
            await loginPage.verify.containsText('@errorLoginText',dataTest.WrongUserText)
        }

        this.setCredentials = async () => {
            await mainPage.click('@loginButton')
            await loginPage.click('@email')
            await loginPage.setValue('@email', usersTest.invalidUser)
            await loginPage.click('@password')
            await loginPage.setValue('@password', usersTest.password)
            await loginPage.click('@loginbutton')
        }
        
        //INVALID USER VALIDATION
        this.loginInvalidUser = async () => {
            await this.setCredentials()
            await this.invalidUser()
            await this.clearFields()
        };

        //VALIDATE LOGIN FORM 
        this.validateLoginPage = async ()  => {
            await loginPage.assert.visible('@email')
            await loginPage.assert.visible('@password')
            await loginPage.assert.visible('@loginbutton')
            await loginPage.assert.visible('@googleAccess')
            await loginPage.assert.visible('@facebookAccess')
            await loginPage.assert.visible('@appleAccess')
        };

        //CLEAR FIELDS IN LOGIN PAGE
        this.clearFields = async () => {
            await loginPage.clearValue('@email')
            await loginPage.clearValue('@password')
        };

        //LOG OUT 
        this.logOutFunction = async () => {
            await mainPage.click('@userOptn')
            await mainPage.click('@logOut')
            await mainPage.assert.visible('@logoTodoist')
            await mainPage.assert.visible('@loginButton')
        };

     return this;
    };
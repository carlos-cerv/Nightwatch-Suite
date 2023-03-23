const usersTest = require('../data/userData.json');
const dataTest = require('../data/testData.json');
                                 
module.exports = function (browser) {
    const loginPage = browser.page.loginPage();
    const mainPage = browser.page.mainPage();

        //NAVIGATE TO LOGIN PA
        this.goToLoginPage = async () => {
            await mainPage.waitForElementVisible('@loginButton')
            await mainPage.click('@loginButton')
        };
    
        //LOGIN STANDAR USER
        this.setLoginUser = async () => {
            await loginPage.waitForElementVisible('@email')
            await loginPage.waitForElementVisible('@password')
            await loginPage.setValue('@email', usersTest.email[0])
            await loginPage.setValue('@password', usersTest.password)
            await loginPage.click('@loginbutton')
        };

        //LOGIN INVALID EMAIL OR USER
        this.setInvalidUser = async () => {
            await loginPage.waitForElementVisible('@email')
            await loginPage.waitForElementVisible('@password')
            await loginPage.setValue('@email', usersTest.invalidUser)
            await loginPage.setValue('@password', usersTest.password)
            await loginPage.click('@loginbutton')
        };

        this.invalidLoginAlert = async () => {
            await loginPage.waitForElementVisible('@errorLoginText',15000)
            await loginPage.assert.textContains('@errorLoginText',dataTest.EmailWrongText)
        }

        //LOGIN INVALID PASSWORD
        this.setInvalidPassword = async () => {
            await loginPage.waitForElementVisible('@email')
            await loginPage.waitForElementVisible('@password')
            await loginPage.setValue('@email', usersTest.email[0])
            await loginPage.setValue('@password', usersTest.invalidPassword)
            await loginPage.click('@loginbutton')
            await loginPage.waitForElementVisible('@errorLoginText',15000)
            await loginPage.assert.visible('@errorLoginText')
            await loginPage.assert.textContains('@errorLoginText',dataTest.EmailWrongText)
        };

        //VALIDATIONS SUCCESS
        this.successLogin = async () => {
            await mainPage.waitForElementVisible('@homeBtnApp',15000)
            await mainPage.assert.visible('@homeBtnApp')
        };

        //VALIDATE MAIN PAGE VIEW ACCESS
        this.mainPageDisplayed = async () => {
            await mainPage.waitForElementVisible('@logoTodoist')
            await mainPage.assert.visible('@logoTodoist')
            await mainPage.assert.visible('@loginButton')
        };

        //VALIDATE INVALID USER BY EMAIL
        this.invalidUser = async () => {
            await loginPage.assert.visible('@errorLoginText')
            await loginPage.assert.containsText('@errorLoginText',dataTest.EmailWrongText)
        };

        //INVALID USER VALIDATION
        this.loginInvalidUser = async () => {
            await this.setCredentials()
            await this.invalidUser()
            await this.clearFields()
        };

        //CLEAR FIELDS IN LOGIN PAGE
        this.clearFields = async () => {
            await loginPage.clearValue('@email')
            await loginPage.clearValue('@password')
        };

        //VALIDATE LOGIN FORM 
        this.loginPageDisplayed = async ()  => {
            await loginPage.assert.visible('@googleAccess')
            await loginPage.assert.visible('@facebookAccess')
            await loginPage.assert.visible('@appleAccess')
        };

        //NAVIGATE TO LOGOUT FUNCTION
        this.goToLogOut = async () => {
            await mainPage.assert.visible('@userOptn')
            await mainPage.verify.visible('@userOptn')
            await mainPage.click('@userOptn')
        }

        //LOG OUT 
        this.logOut = async () => {
            await mainPage.assert.visible('@logOut')
            await mainPage.click('@logOut')
        };

     return this;
    };
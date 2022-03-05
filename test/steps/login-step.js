const usersTest = require('../data/userData.json');
const dataTest = require('../data/testData.json');
                                 
module.exports = function (browser) {
    const loginPage = browser.page.loginPage();
        //USE FUNCTIONS
        this.loginUser = async () => {
            await loginPage.click('@username')
            await loginPage.setValue('@username', usersTest.userName[0])
            await loginPage.click('@password')
            await loginPage.setValue('@password', usersTest.password)
            await loginPage.click('@loginbutton')
        };
        //SUCCESS LOGIN
        this.loginSuccess = async () =>{
            await loginPage.assert.visible('@mainPageView')
            await loginPage.assert.textContains('@mainPageView',dataTest.ProductsText)
        };
        //INVALID USER VALIDATION
        this.invalidUser = async () => {
            await loginPage.click('@username')
            await loginPage.setValue('@username', usersTest.invalidUser)
            await loginPage.click('@password')
            await loginPage.setValue('@password', usersTest.password)
            await loginPage.click('@loginbutton')
            await loginPage.assert.visible('@errorLoginText')
            await loginPage.assert.textContains('@errorLoginText', dataTest.WrongUserText)
            await this.clearFields()
        };
        //VALIDATE LOGIN FORM 
        this.validatePage = async ()  => {
            await loginPage.assert.visible('@username')
            await loginPage.assert.visible('@password')
            await loginPage.assert.visible('@loginbutton')
        };
        //CLEAR FIELDS
        this.clearFields = async () => {
            await loginPage.clearValue('@username')
            await loginPage.clearValue('@password')
        };
        //LOG OUT 
        this.logOutFunction = async () => {
            await loginPage.click('@')
            await loginPage.click('@')
        };
        this.sortItems = async () => {
            await loginPage.assert.visible('@username')
            await loginPage.assert.visible('@password')
        };
     return this;
    };
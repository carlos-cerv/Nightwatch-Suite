const usersTest = require('../data/userData.json');

module.exports = function (browser) {
    //Starts Browser & Platform                         
    this.openBrowser = async () => { 
        await browser.windowMaximize()
        await browser.url(usersTest.url)
        return browser;
    };
    //Close browser                                   
    this.closeBrowser = async () => {
        await browser.end();
    };
    return this;
 };
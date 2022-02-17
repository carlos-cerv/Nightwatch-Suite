module.exports = {
  
    elements: {
        //LOGIN PAGE ELEMENTS
        logoSwagLabs: { locateStrategy: 'xpath', selector: '//body/div[@id="root"]/div[1]/div[1]'},

        username: { locateStrategy: 'xpath', selector: '//input[@id="user-name"]'},
        password: { locateStrategy: 'xpath', selector: '//input[@id="password"]'},
        loginbutton: { locateStrategy: 'xpath', selector: '//input[@id="login-button"]'},
        mainPageView: {locateStrategy:'xpath', selector:"//a[@id='item_4_title_link']"},

        errorLoginText: {locateStrategy:'xpath', selector:"//body/div[@id='root']/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[3]"}
    }
}
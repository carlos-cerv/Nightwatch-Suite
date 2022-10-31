module.exports = {
  
    elements: {

        //LOGIN FORM
        email: { locateStrategy: 'xpath', selector: '//input[@placeholder="Enter your email..."]'},
        password: { locateStrategy: 'xpath', selector: '//input[@placeholder="Enter your password..."]'},
        loginbutton: { locateStrategy: 'xpath', selector: '//button[@data-gtm-id="start-email-login"]'},
        keepLogIn: { locateStrategy: 'xpath', selector: '//input[@id="permanent_login"]'},

        //ACCESS TYPE
        googleAccess: {locateStrategy:'xpath', selector:"//span[contains(text(),'Continue with Google')]"},
        facebookAccess: {locateStrategy:'xpath', selector:"//span[contains(text(),'Continue with Google')]"},
        appleAccess: {locateStrategy:'xpath', selector:"//span[contains(text(),'Continue with Apple')]"},
       
        //VALIDATIONS
        errorLoginText: {locateStrategy:'xpath', selector:"//div[@class='a83bd4e0 _266d6623 _8f5b5f2b f9408a0e']"}

    }
} 
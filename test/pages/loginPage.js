module.exports = {
  
    elements: {

        //LOGIN FORM
        email: { locateStrategy: 'xpath', selector: '//input[@id="email"]'},
        password: { locateStrategy: 'xpath', selector: '//input[@id="password"]'},
        loginbutton: { locateStrategy: 'xpath', selector: '//button[contains(text(),"Log in")]'},
        keepLogIn: { locateStrategy: 'xpath', selector: '//input[@id="permanent_login"]'},

        //ACCESS TYPE
        googleAccess: {locateStrategy:'xpath', selector:"//body/main[1]/div[1]/div[2]/div[1]/a[1]"},
        facebookAccess: {locateStrategy:'xpath', selector:"//body/main[1]/div[1]/div[2]/div[1]/a[2]"},
        appleAccess: {locateStrategy:'xpath', selector:"//body/main[1]/div[1]/div[2]/div[1]/a[3]"},
       
        //VALIDATIONS
        errorLoginText: {locateStrategy:'xpath', selector:"//span[contains(text(),'Invalid email address.')]"}

    }
} 
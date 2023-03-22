module.exports = {
  
    elements: {
        //LOGIN PAGE ELEMENTS -> TO ACCESS
        logoTodoist: { locateStrategy: 'xpath', selector: '//div[@class="kzeioPKvGqaMOvAGcer5"]//a[@href="/home"]'},
        loginButton: { locateStrategy: 'xpath', selector: '//li[@class="nOFNc0QpGW0HpMqVOfJb"]//a[@href="/auth/login"]'},
        //MAIN PAGE ELEMENTS
        homeBtnApp: {locateStrategy:'xpath', selector:"//button[@class='top_bar_btn home_btn']"},
        userOptn: {locateStrategy:'xpath', selector:"//button[@aria-label='Settings']"},
            //OPTIONS USER
            logOut: {locateStrategy:'xpath', selector:"//span[contains(text(),'Log out')]"},
    }
} 
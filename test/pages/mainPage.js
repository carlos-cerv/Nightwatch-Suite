module.exports = {
  
    elements: {
        //LOGIN PAGE ELEMENTS -> TO ACCESS
        logoTodoist: { locateStrategy: 'xpath', selector: '//header/nav[1]/a[1]/*[1]'},
        loginButton: { locateStrategy: 'xpath', selector: '//header/nav[1]/div[1]/ul[2]/li[1]/a[1]'},
        //MAIN PAGE ELEMENTS
        homeBtnApp: {locateStrategy:'xpath', selector:"//body/div[@id='todoist_app']/div[@id='page_background']/div[@id='top_bar']/div[@id='top_bar_inner']/div[1]/button[2]/*[1]"},
        userOptn: {locateStrategy:'xpath', selector:"//img[@class='user_avatar big settings_avatar']"},
            //OPTIONS USER
            logOut: {locateStrategy:'xpath', selector:"//span[contains(text(),'Log out')]"},
    }
} 
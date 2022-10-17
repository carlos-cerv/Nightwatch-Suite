module.exports = {
  
    elements: {
        //LOGIN PAGE ELEMENTS -> TO ACCESS
        logoTodoist: { locateStrategy: 'xpath', selector: '//a[@class="Z2j5FoeQ_umI7vX0SmxF Y5eL4cjJHcHaCQ8EbL7V KmtwbG6Xt2tkeuPKmGfL"]'},
        loginButton: { locateStrategy: 'xpath', selector: '//header/nav[2]/div[1]/ul[2]/li[1]/a[1]'},
        //MAIN PAGE ELEMENTS
        homeBtnApp: {locateStrategy:'xpath', selector:"//button[@class='top_bar_btn home_btn']"},
        userOptn: {locateStrategy:'xpath', selector:"//button[@aria-label='Settings']"},
            //OPTIONS USER
            logOut: {locateStrategy:'xpath', selector:"//span[contains(text(),'Log out')]"},
    }
} 
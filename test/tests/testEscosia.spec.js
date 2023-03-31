describe('Ecosia', function() {

    // test() and specify() is also available
  
    it('demo test', function(browser) {
      browser
        .url('https://www.ecosia.org/')
        .setValue('input[type=search]', 'nightwatch')
        .click('button[type=submit]')
        .assert.textContains('.mainline-results', 'Nightwatch.js')
        .end();
    });
  });
  
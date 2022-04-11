var fs = require('fs');
var path = require('path');
var handlebars = require('handlebars');
var HtmlReporter = require('nightwatch-html-reporter');

var Report = "QA_TEST_REPORT_";

module.exports = {
  write : function(results, options, done) {
    
    var reportFilename =  Report  +  options.filename_prefix + (Math.floor(Date.now() / 1000)) +'.html';
    var reportFilePath = path.join(__dirname, '/Reports/',reportFilename);
    
    // read the html template
    fs.readFile('html-reporter/config/html-reporter.hbs', function(err, data) {
      if (err) throw err;

      var template = data.toString();
      // merge the template with the test results data
      var html = handlebars.compile(template)({
        results   : results,
        options   : options,
        timestamp : new Date().toString(),
        browser   : options.filename_prefix.split('_').join(' ')
        
      });

      // write the html to a file
      fs.writeFile(reportFilePath, html, function(err) {
        if (err) throw err;
        console.log('Report generated: ' + reportFilePath);
        done();
      });
    });
  }
 
};



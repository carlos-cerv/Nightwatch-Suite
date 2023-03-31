const allureReporter = require('nightwatch-allure');
module.exports = {
  reporter: (results,done)=>{
   const reporter = new allureReporter.NightwatchAllureReporter({});
   reporter.write(results,done);
 }
};
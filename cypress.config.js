const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9kvcgk',
  defaultCommandTimeout: 5000,
  screenshotOnRunFailure:true,
  waitForAnimations:true,
  watchForFileChanges:false,
  e2e: {
     setupNodeEvents(on, config) {
      // implement node event listeners here  
    }}
});

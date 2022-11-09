const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  e2e: {
    defaultCommandTimeout:6000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
  watchForFileChanges:false,
  
});

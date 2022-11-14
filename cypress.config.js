const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9kvcgk',
  defaultCommandTimeout: 5000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
  watchForFileChanges:false,
  
});

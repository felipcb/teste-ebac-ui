const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'um39t9',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

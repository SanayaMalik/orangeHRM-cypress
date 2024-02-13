const { defineConfig } = require('cypress');

module.exports = defineConfig({
  //added custom data for differnt functions in cypress
  viewportWidth: 1000,
  viewportHeight: 660,
  defaultCommandTimeout: 6000,
  //using mochaawesome for reporting
  reporter: 'cypress-mochawesome-reporter',
  //created env to store the sensitive user information
  env:{
    username: "Admin",
    password: "admin123",
  },
  e2e: {
    setupNodeEvents(on, config) {
      //added the mochawesome plugin
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});


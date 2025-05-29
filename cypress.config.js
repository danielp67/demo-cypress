const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // env: {
  //   apiUrl: "http://localhost:8081",
  //   devApiUrl: "http://localhost:8082",
  //   testApiUrl: "http://localhost:8083"
  // },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
     baseUrl: "http://localhost:8080/",


  },
});

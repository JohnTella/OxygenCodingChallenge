import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.amazon.com/",
    defaultCommandTimeout: 10000,
    viewportHeight: 900,
    viewportWidth: 1400,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    retries: {
      runMode: 1,
      },
  },
});

import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  workers: 6,
  retries: 3,
  reporter: [
    ["html", { outputFile: "results/report.html", open: "never" }],
    ["json", { outputFile: "results/report.json" }],
  ],
  timeout: 30 * 1000,
  use: {
    baseURL: "https://parabank.parasoft.com/",
    browserName: "chromium",
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
    video: "retain-on-failure",
    headless: true,
  },
  // projects: [
  //   {
  //     name: 'chromium',
  //     use: { ...devices['Desktop Chrome'] },
  //   },
  //   {
  //     name: 'firefox',
  //     use: { ...devices['Desktop Firefox'] },
  //   },
  //   {
  //     name: 'webkit',
  //     use: { ...devices['Desktop Safari'] },
  //   },
  // ],
});

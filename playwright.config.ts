import { defineConfig, devices } from '@playwright/test'

// Use process.env.PORT by default and fallback to port 3000
const PORT = process.env.PORT || 3000

// Set webServer.url and use.baseURL with the location of the WebServer respecting the correct set port
const baseURL = `http://localhost:${PORT}`

// Reference: https://playwright.dev/docs/test-configuration
export default defineConfig({
  // Timeout per test
  timeout: 10 * 1000,
  workers: '50%',
  // Test directory
  testDir: './tests/playwright',
  // If a test fails, retry it additional 2 times
  retries: 0,
  // Artifacts folder where screenshots, videos, and traces are stored.
  outputDir: 'tests/playwright-test-artifacts/',
  // Run your local dev server before starting the tests:
  // https://playwright.dev/docs/test-advanced#launching-a-development-web-server-during-the-tests
  // webServer: {
  //   command: 'npm run test:command',
  //   url: baseURL,
  //   timeout: 120 * 1000,
  //   stdout: 'pipe',
  //   stderr: 'pipe',
  //   reuseExistingServer: !process.env.CI,
  // },

  // globalTeardown: './global-teardown.js',

  reporter: [['list'], ['monocart-reporter', {}]],

  use: {
    baseURL,
    trace: 'retry-with-trace',
    // headless: false,
  },

  projects: [
    // {
    //   name: 'Desktop Chrome',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //   },
    // },
    // {
    //   name: 'Desktop Firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // },
    // {
    //   name: 'Desktop Safari',
    //   use: {
    //     ...devices['Desktop Safari'],
    //   },
    // },
    // Test against mobile viewports.
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5'],
      },
    },
    // {
    //   name: 'Mobile Safari',
    //   use: devices['iPhone 12'],
    // },
  ],
})

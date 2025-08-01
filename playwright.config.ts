import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    testDir: 'screenshot-tests',
    outputDir: 'test-results',
    testMatch: '*.pw.ts',
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: 'html',
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Base URL to use in actions like `await page.goto('/')`. */
        baseURL: 'http://127.0.0.1:3000',
        headless: true,
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        viewport: { width: 1280, height: 720 },
        screenshot: 'only-on-failure',
        trace: 'off',
        launchOptions: {
            headless: true,
        },
    },
    snapshotPathTemplate: '{testDir}/{testFilePath}-snapshots/{arg}{ext}',

    /* Configure projects for major browsers */
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
                browserName: 'chromium',
                launchOptions: {
                    args: ['--ignore-certificate-errors'],
                },
            },
        },
    ],

    /* Run your local dev server before starting the tests */
    // webServer: {
    //   command: 'npm run start',
    //   url: 'http://127.0.0.1:3000',
    //   reuseExistingServer: !process.env.CI,
    // },
    // timeout: 8 * 60 * 1000,
    // expect: {
    //     toHaveScreenshot: { maxDiffPixels: 100 },
    // },
});

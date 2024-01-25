import { test, expect } from '@playwright/test';
import { storybookLoader } from '../../Utils/playwright';

test('alert screenshot default', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-alert--playwright-all-cases');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
test('alert screenshot with cases', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-alert--playwright-with-cases');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});

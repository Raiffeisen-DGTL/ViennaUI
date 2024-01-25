import { test, expect } from '@playwright/test';
import { storybookLoader } from '../../Utils/playwright';

test('counter overview screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-counter--overview');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
test('counter styles screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-counter--counter-styles');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});

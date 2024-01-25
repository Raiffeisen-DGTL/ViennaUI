import { test, expect } from '@playwright/test';
import { storybookLoader } from '../../Utils/playwright';

test('cssgrid overview screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-cssgrid--overview');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
test('cssgrid item screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-cssgrid--css-grid-item');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});

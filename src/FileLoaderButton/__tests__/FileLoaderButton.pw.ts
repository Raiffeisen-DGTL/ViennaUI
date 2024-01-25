import { test, expect } from '@playwright/test';
import { storybookLoader } from '../../Utils/playwright';

test('fileloaderbutton overview screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-fileloaderbutton--overview');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
test('fileloaderbutton disabled and loading screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-fileloaderbutton--playwright');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});

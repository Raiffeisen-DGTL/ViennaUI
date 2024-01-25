import { test, expect } from '@playwright/test';
import { storybookLoader } from '../../Utils/playwright';

test('custom table basic overview screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-customtable--basic-custom-table');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
test('custom table with selector screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-customtable--table-with-selector');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
test('custom table with expanding rows screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-customtable--table-with-expand');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});

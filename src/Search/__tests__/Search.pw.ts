import { test, expect } from '@playwright/test';
import { storybookLoader } from '../../Utils/playwright';

test('search screenshot test ref', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-search--overview');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
test('search screenshot prefix icon', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-search--prefix-icon');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
test('search screenshot postfix icon', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/docs/development-search--postfix-icon');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
test('search screenshot two icons', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/docs/development-search--all-icons');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});


import { test, expect } from '@playwright/test';
import { storybookLoader } from '../../Utils/playwright';

test('link overview screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-link--overview');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
test('link with icon screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-link--with-icon');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
test('link guideline screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-link--guideline');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
test('icon link screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-link--icon-link');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
test('link with adaptive screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-link--with-adaptive');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});

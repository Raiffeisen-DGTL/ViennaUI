import { test, expect } from '@playwright/test';
import { storybookLoader } from '../../Utils/playwright';

test('card overview screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-card--overview');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
test('card with actions screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-card--with-actions');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
test('card with header screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-card--with-header');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
test('card with footer screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-card--with-footer');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
test('card with tabs screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-card--with-tabs');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});

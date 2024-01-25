import { test, expect } from '@playwright/test';
import { storybookLoader } from '../../Utils/playwright';

test('formfield overview screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-formfield--overview');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
test('formfield no message screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-formfield--no-message');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
test('formfield required screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-formfield--required');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
test('formfield with warning screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-formfield--with-warning');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
test('formfield with text screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-formfield--with-text');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});


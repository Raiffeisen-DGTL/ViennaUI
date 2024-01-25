import { test, expect } from '@playwright/test';
import { storybookLoader } from '../../Utils/playwright';

test('input screenshot test ref', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-input--overview');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
test('input screenshot outline design in all sizes', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-input--outline-and-sizes');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
test('input screenshot material design in all sizes', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/docs/development-input--material-and-sizes');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
test('input screenshot invalid and disabled states', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/docs/development-input--states');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});

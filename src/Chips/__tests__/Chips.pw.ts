import { test, expect } from '@playwright/test';
import { storybookLoader } from '../../Utils/playwright';

test('chips overview screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-chips--overview');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
test('chips all designs screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-chips--all-designs');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
test('chips all sizes screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-chips--all-sizes');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
test('chips right alignes screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-chips--right-aligned');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
test('chips disabled screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-chips--disabled-chips');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});

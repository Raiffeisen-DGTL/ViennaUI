import { test, expect } from '@playwright/test';
import { storybookLoader } from '../../Utils/playwright';

test('breadcrumbs overview screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-breadcrumbs--overview');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});

test('breadcrumbs sizes screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-breadcrumbs--option-sizes');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});

test('breadcrumbs action buttons screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-breadcrumbs--home-buttons-and-sizes');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});


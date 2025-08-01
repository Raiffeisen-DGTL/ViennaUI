import { test, expect } from '@playwright/test';
import { storybookLoader } from '../../Utils/playwright';

test.skip('breadcrumbs overview screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-breadcrumbs--overview');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({ name: 'breadcrumbs-overview-screenshot-test-1.png' });
});

test.skip('breadcrumbs sizes screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-breadcrumbs--option-sizes');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({ name: 'breadcrumbs-sizes-screenshot-test-1.png' });
});

test.skip('breadcrumbs action buttons screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-breadcrumbs--home-buttons-and-sizes');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({ name: 'breadcrumbs-action-buttons-screenshot-test-1.png' });
});


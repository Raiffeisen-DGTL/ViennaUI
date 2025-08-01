import { test, expect } from '@playwright/test';
import { storybookLoader } from '../../Utils/playwright';

test('filter overview screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-filter--overview');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({ name: 'filter-overview-screenshot-test-1.png' });
});

test('filter props screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-filter--playwright');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({ name: 'filter-props-screenshot-test-1.png' });
});
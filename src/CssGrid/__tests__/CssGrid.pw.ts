import { test, expect } from '@playwright/test';
import { storybookLoader } from '../../Utils/playwright';

test.skip('cssgrid overview screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-cssgrid--overview');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({ name: 'cssgrid-overview-screenshot-test-1.png' });
});
test.skip('cssgrid item screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-cssgrid--css-grid-item');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({ name: 'cssgrid-item-screenshot-test-1.png' });
});

import { test, expect } from '@playwright/test';
import { storybookLoader } from '../../Utils/playwright';

test.skip('chips overview screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-chips--overview');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({timeout: 20000});
});
test.skip('chips all designs screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-chips--all-designs');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({timeout: 10000});
});
test.skip('chips all sizes screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-chips--all-sizes');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({timeout: 10000});
});
test.skip('chips right alignes screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-chips--right-aligned');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({ name: 'chips-screenshot-test.png' });
});
test.skip('chips disabled screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-chips--disabled-chips');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({timeout: 20000});
});

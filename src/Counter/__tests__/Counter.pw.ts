import { test, expect } from '@playwright/test';
import { storybookLoader } from '../../Utils/playwright';

test.skip('counter overview screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-counter--overview');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({name: 'counter-overview-screenshot-test-1.png'});
});
test.skip('counter styles screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-counter--counter-styles');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({ name: 'counter-counter-styles-screenshot-test.png' });
});

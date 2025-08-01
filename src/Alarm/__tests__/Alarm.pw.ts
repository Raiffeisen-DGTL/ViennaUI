import { test, expect } from '@playwright/test';
import { storybookLoader } from '../../Utils/playwright';

test.skip('alarm designs screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-alarm--designs');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({ name: 'alarm-design-screenshot-test-1.png'});
});
import { test, expect } from '@playwright/test';
import { storybookLoader } from '../../Utils/playwright';

test('alarm designs screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-alarm--designs');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
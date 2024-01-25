import { test, expect } from '@playwright/test';
import { storybookLoader } from '../../Utils/playwright';

test('accordion screenshot default with react.strictmode', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-accordion--playwright-test');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
import { test, expect } from '@playwright/test';
import { storybookLoader } from '../../Utils/playwright';

test.skip('checkbox screenshot default', async ({ page }) => {
  const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-checkbox--playwright-with-cases');
  await expect(iframe.locator('#storybook-root')).toHaveScreenshot({timeout: 10000});
});
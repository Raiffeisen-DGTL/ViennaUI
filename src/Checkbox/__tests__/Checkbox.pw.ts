import { test, expect } from '@playwright/test';
import { storybookLoader } from '../../Utils/playwright';

test('checkbox screenshot default', async ({ page }) => {
  const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-checkbox--playwright-with-cases');
  await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
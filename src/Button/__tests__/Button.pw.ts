import { test, expect } from '@playwright/test';
import { storybookLoader } from '../../Utils/playwright';

test('button states screenshot', async ({ page }) => {
  const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-button--playwright-states');
  await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});

test('buttondesigns screenshot', async ({ page }) => {
  const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-button--playwright-designs');
  await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
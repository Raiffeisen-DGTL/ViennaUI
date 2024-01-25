import { test, expect } from '@playwright/test';
import { storybookLoader } from '../../Utils/playwright';

test('typography screenshot heading, h1-h6', async ({ page }) => {
  const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-typography--headings');
  await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});

test('typography screenshot span, text, p', async ({ page }) => {
  const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-typography--playwright-tests');
  await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
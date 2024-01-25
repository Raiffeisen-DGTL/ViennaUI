import { test, expect } from '@playwright/test';
import { storybookLoader } from '../../Utils/playwright';

test('avatar overview screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-avatar--overview');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});

test('avatar without icon screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-avatar--no-icon');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
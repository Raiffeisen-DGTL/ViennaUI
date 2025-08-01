import { test, expect } from '@playwright/test';
import { storybookLoader } from '../../Utils/playwright';

test('select screenshot test ref', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-select--set-focus');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({ name: 'select-screenshot-test-ref-1.png' });
});
test('select screenshot sizes', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-select--playwright-with-cases');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({ name: 'select-screenshot-sizes-1.png' });
});
test.skip('select screenshot overview', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/docs/development-select--docs');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
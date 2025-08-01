import { test, expect } from '@playwright/test';
import { storybookLoader } from '../../Utils/playwright';

test.skip('calendar overview screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-calendar--overview');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({ timeout: 10000});
});
test.skip('calendar months screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-calendar--months');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({ timeout: 10000});
});
test.skip('calendar years screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-calendar--years');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({ timeout: 20000});
});
test.skip('calendar selected date screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-calendar--with-selected-date');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({ timeout: 20000});
});
test.skip('calendar disabled dates screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-calendar--with-disabled-dates');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({ timeout: 10000});
});
test.skip('calendar special date screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-calendar--with-special-dates');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({ timeout: 10000});
});
test.skip('calendar date range screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-calendar--with-date-ranges');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({ timeout: 20000});
});

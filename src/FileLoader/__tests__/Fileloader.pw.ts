import { test, expect } from '@playwright/test';
import { storybookLoader } from '../../Utils/playwright';

test('fileloader overview screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-fileloader--overview');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});

test('fileloader with button screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-fileloader--with-button');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});

test('fileloader with link screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-fileloader--with-link');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});

test('fileloader with error screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-fileloader--with-file-errors');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});

test('fileloader with files screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-fileloader--with-files');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});

import { test, expect } from '@playwright/test';
import { storybookLoader } from '../../Utils/playwright';

test('combobutton overview screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-combobutton--overview');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
test('combobutton all designs screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-combobutton--all-designs');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
test('combobutton all designs primary  screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-combobutton--all-designs-primary');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});
test('combobutton all designs accent screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-combobutton--all-designs-accent');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});

test('combobutton all designs critical screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-combobutton--all-designs-critical');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});

test('combobutton all designs outline screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-combobutton--all-designs-outline');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot();
});

import { test, expect } from '@playwright/test';
import { storybookLoader } from '../../Utils/playwright';

test.skip('combobutton overview screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-combobutton--overview');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({name: 'combobutton-overview-screenshot-test-1.png'});
});
test('combobutton all designs screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-combobutton--all-designs');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({name: 'combobutton-all-designs-screenshot-test-1.png'});
});
test.skip('combobutton all designs primary  screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-combobutton--all-designs-primary');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({name: 'combobutton-all-designs-primary-screenshot-test-1.png'});
});
test.skip('combobutton all designs accent screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-combobutton--all-designs-accent');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({name: 'combobutton-all-designs-accent-screenshot-test-1.png'});
});

test.skip('combobutton all designs critical screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-combobutton--all-designs-critical');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({name: 'combobutton-all-designs-critical-screenshot-test-1.png'});
});

test('combobutton all designs outline screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-combobutton--all-designs-outline');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({name: 'combobutton-all-designs-outline-screenshot-test-1.png'});
});

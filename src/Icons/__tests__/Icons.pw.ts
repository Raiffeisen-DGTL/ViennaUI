import { test, expect } from "@playwright/test";
import { storybookLoader } from "../../Utils/playwright";
import * as Icons from 'vienna.icons';

const iconNames = Object.keys(Icons).sort();


test.skip('Icons screenshot all sizes and color props', async ({ page }) => {
    await page.setViewportSize({width: 460, height: 50000});
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-icons--playwright-test');

    for (let i = 0; i < iconNames.length; i++) {
        await expect(iframe.locator(`#${iconNames[i]}`)).toHaveScreenshot(`${iconNames[i]}.png`, { timeout: 20 * 60 * 1000 });
    }
});

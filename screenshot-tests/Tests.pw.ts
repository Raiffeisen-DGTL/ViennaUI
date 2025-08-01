import { test, expect } from '@playwright/test';
import { storybookLoader } from '../src/Utils/playwright';
import Storybook from '../storybook-static/index.json';

const mapViewportHeight: Record<string, number> = {
    'development-customtable--overview': 1100,
};

const mapMaxDiffPixel: Record<string, number> = {
    'development-userprofile--overview': 500,
};

test('all screenshots', async ({ page }) => {
  test.setTimeout(1000 * 30 * 25);
  for (const [key, value] of Object.entries(Storybook.entries)) {
    if (
      typeof value === 'number' ||
      value.importPath.includes('/src/showcase') ||
      value.type !== 'story' ||
      !key.includes('overview')
    ) {
      continue;
    }

    const url = `http://localhost:6006/iframe.html?id=${encodeURIComponent(key)}&viewMode=story`;
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    await page.setViewportSize({
      width: 1280,
      height: mapViewportHeight[key] || 720,
    });

    await page.evaluate(() => document.fonts.ready);
    await page.waitForFunction(() => document.fonts.ready);

    await expect(page.locator('#storybook-root')).toHaveScreenshot(`${key}.png`, {
      maxDiffPixels: mapMaxDiffPixel[key]
    });
  }
});

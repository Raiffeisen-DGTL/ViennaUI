import { test, expect } from '@playwright/test';
import { storybookLoader } from '../../Utils/playwright';

test('groups screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-groups--overview');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({ name: 'groups-screenshot-test-1.png' });
});
test('groups with vertical design screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-groups--with-vertical-design');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({ name: 'groups-with-vertical-design-screenshot-test-1.png' });
});
test('groups with sizes screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-groups--with-sizes');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({ name: 'groups-with-sizes-screenshot-test-1.png' });
});
test('groups with react fragment screenshot test', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/development-groups--with-react-fragment');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({ name: 'groups-with-react-fragment-screenshot-test-1.png' });
});


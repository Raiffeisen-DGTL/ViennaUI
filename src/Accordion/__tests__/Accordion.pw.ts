import { test, expect } from '@playwright/test';
import { storybookLoader } from '../../Utils/playwright';

test.skip('accordion screenshot default with react.strictmode', async ({ page }) => {
    const iframe = await storybookLoader(page, 'http://localhost:6006/?path=/story/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-accordion--overview');
    await expect(iframe.locator('#storybook-root')).toHaveScreenshot({name: 'accordion-screenshot-default-with-react-strictmode-1.png'});
});
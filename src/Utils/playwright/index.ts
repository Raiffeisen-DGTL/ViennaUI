import { Page } from '@playwright/test';

export const storybookLoader = async (page: Page, url: string) => {
    await page.goto(url);
    const iframeElement = await page.locator('iframe').elementHandle();
    await iframeElement?.contentFrame();

    return page.frameLocator('#storybook-preview-iframe');
};

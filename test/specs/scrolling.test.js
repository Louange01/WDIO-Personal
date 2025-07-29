//ENV=main npx wdio --spec ./test/specs/scrolling.test.js

import Assertions from '../pageobjects/scrolling.page.js';

describe('scroll to Elemental Selenium link and click it', () => {
    it('should scroll to Elemental Selenium link and click it', async () => {
        await browser.url(`${browser.options.baseUrl}`);
        await Assertions.ScrollToElementalSeleniumLink();
        await Assertions.elementalSeleniumLink.waitForDisplayed({ timeout: 5000 });
        await Assertions.elementalSeleniumLink.waitForClickable({ timeout: 5000 });
        assert.equal(await Assertions.elementalSeleniumLink.isDisplayed(), true);
        assert.equal(await Assertions.elementalSeleniumLink.isClickable(), true);
        await Assertions.ClickElementalSeleniumLink();
        await browser.waitUntil(async () => (await browser.getWindowHandles()).length > 1, {
            timeout: 5000,
            timeoutMsg: 'New tab did not open'
        });
        await browser.switchToWindow((await browser.getWindowHandles())[1]);
        const { url, title, h1Text } = await Assertions.VerifyElementalSeleniumPage();
        assert.equal(url, 'https://elementalselenium.com/');
        assert.equal(title, 'Home | Elemental Selenium');
        assert.equal(h1Text, 'Elemental Selenium');
        await browser.closeWindow();
        await browser.switchToWindow((await browser.getWindowHandles())[0]);
    })
});
describe('Add email,retrieve password and return Internal server error', () => {
    it('should return Internal server error', async () => {
        await browser.url(`${browser.options.baseUrl}/forgot_password`);
        await Assertions.SubmitForgotPassword('louange@gmail.com');
        assert.equal(await Assertions.GetErrorHeadingText(), 'Internal Server Error');
    });
    it.skip('should scroll to the footer', async () => {
        await Assertions.pageHeader.waitForDisplayed();
        await Assertions.ScrollToPageFooter();
        assert.equal(true, await Assertions.pageFooter.isDisplayedInViewport());
    });
});
import assert from 'assert';
import Assertions from '../pageobjects/scrolling.page.js';

describe('Add email,retrieve password and return Internal server error', () => {
    it.skip('should return Internal server error', async () => {
        await browser.url('https://the-internet.herokuapp.com/forgot_password');
        await Assertions.submitForgotPassword('louange@gmail.com');
        assert.equal(await Assertions.getErrorHeadingText(), 'Internal Server Error');
    });

    it.skip('should scroll to the footer', async () => {
        await Assertions.pageHeader.waitForDisplayed();
        await Assertions.scrollToPageFooter();
        assert.equal(true, await Assertions.pageFooter.isDisplayedInViewport());
    });

    it('should scroll to Elemental Selenium link and click it', async () => {
        await browser.url('https://the-internet.herokuapp.com/');

        await Assertions.scrollToElementalSeleniumLink();
        await Assertions.elementalSeleniumLink.waitForDisplayed({ timeout: 5000 });
        await Assertions.elementalSeleniumLink.waitForClickable({ timeout: 5000 });

        assert.equal(await Assertions.elementalSeleniumLink.isDisplayed(), true);
        assert.equal(await Assertions.elementalSeleniumLink.isClickable(), true);

        await Assertions.clickElementalSeleniumLink();

        await browser.waitUntil(async () => (await browser.getWindowHandles()).length > 1, {
            timeout: 5000,
            timeoutMsg: 'New tab did not open'
        });
        await browser.switchToWindow((await browser.getWindowHandles())[1]);

        const { url, title, h1Text } = await Assertions.verifyElementalSeleniumPage();

        assert.equal(url, 'https://elementalselenium.com/', `Expected URL to be https://elementalselenium.com/, but got: ${url}`);
        assert.equal(title, 'Home | Elemental Selenium', `Expected title to be 'Home | Elemental Selenium', but got: ${title}`);
        assert.equal(h1Text, 'Elemental Selenium', `Expected H1 to say 'Elemental Selenium', but got: ${h1Text}`);

        await browser.closeWindow();
        await browser.switchToWindow((await browser.getWindowHandles())[0]);
    })
});
// it('should detect when element is no longer visible', async () => {
//     const emailInput = await $('#email');
//     const retrieveBtn = await $('button.radius');
//     await emailInput.setValue(email);
//     await retrieveBtn.click();
// })
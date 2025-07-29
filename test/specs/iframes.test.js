//ENV=iframe npx wdio --spec ./test/specs/iframes.test.js

import IframeWindow from "../pageobjects/iframe.page";

describe.skip('Switch Window', () => {
    it('Should switch to the next window', async () => {
        await browser.url(`${browser.options.baseUrl}/window-operations`)
        await IframeWindow.ClickHereLink()
        await browser.switchWindow(`${browser.options.baseUrl}/window-operations`)
        assert.equal(await IframeWindow.h1Header.isExisting(), true)
        assert.equal(await IframeWindow.h1Header.isDisplayed(), true)
        assert.equal(await IframeWindow.h1Header.getText(), 'Window Operations')
    })
})
describe('Switch to Iframe', () => {
    it('Should switch to iframe', async () => {
        await browser.url(`${browser.options.baseUrl}/iframes`)
        await IframeWindow.iframeBody.waitForDisplayed()
        await browser.pause(2000)
        await browser.switchFrame(IframeWindow.iframeBody)
        assert.equal(await IframeWindow.iframeH1.isDisplayed(), true)
        assert.equal(await IframeWindow.h1Header.getText(), 'Playwright enables reliable end-to-end testing for modern web apps.')
    })
})
describe('scroll to the 2nd iframe', () => {
    it('should scroll and select the 2nd iframe', async () => {
        await browser.switchFrame(null)
        await IframeWindow.ScrollToBottomFrame()
        await browser.pause(3000)
        await IframeWindow.iframeBody2.waitForDisplayed()
        await browser.switchFrame(IframeWindow.iframeBody2)
        assert.equal(await IframeWindow.iframe2H1.getText(), "Selenium automates browsers. That's it!")

    })
})
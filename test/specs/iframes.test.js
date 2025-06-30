import IframeWindow from "../pageobjects/iframe.page"; // Changed from newWindowPage to IframeWindow
import assert from "assert";

describe.skip('Switch Window', () => {
    it('Should switch to the next window', async () => {
        await browser.url('https://practice-automation.com/window-operations/')
        await IframeWindow.clickHereLink()
        await browser.switchWindow('https://practice-automation.com/window-operations/')
        assert.equal(true, await IframeWindow.h1Header.isExisting())
        assert.equal(true, await IframeWindow.h1Header.isDisplayed())
        assert.equal('Window Operations', await IframeWindow.h1Header.getText())
    })
})
describe('Switch to Iframe', () => {
    it('Should switch to iframe', async () => {
        await browser.url('https://practice-automation.com/iframes')
        await IframeWindow.iframeBody.waitForDisplayed()

        await browser.pause(2000)

        await browser.switchFrame(IframeWindow.iframeBody)
        assert.equal(await IframeWindow.iframeH1.isDisplayed(), true)

        // await IframeWindow.sendTextToBody('Playwright enables reliable end-to-end testing for modern web apps')
        assert.equal(await IframeWindow.h1Header.getText(), 'Playwright enables reliable end-to-end testing for modern web apps.')

    })
})
describe('scroll to the 2nd iframe', () => {
    it('should scroll and select the 2nd iframe', async () => {
        // to ensure that we are in main page context (not inside any iframe)
        await browser.switchFrame(null)
        await IframeWindow.scrollToBottomFrame()
        await browser.pause(3000)
        await IframeWindow.iframeBody2.waitForDisplayed()
        // assert.equal(await IframeWindow.iframeBody2.isDisplayed(), true);
        await browser.switchFrame(IframeWindow.iframeBody2)
        // read from main page h1 ( "Iframes")
        assert.equal(await IframeWindow.iframe2H1.getText(), "Selenium automates browsers. That's it!")

    })
})

// describe("My Iframe application", () => {
//     it("should interact with Iframe and ID 'Playwright' heading", async () => {
//         /*
//           Url to test iframe on: https://practice-automation.com/iframes
//           You can hard code the url for now and the elements 
//           we'll move them into pageobject when we meet
//         */
//         // await LoginPage.open();
//         await browser.url('https://practice-automation.com/iframes')

//         // I added the pauses in for testing purposes but those be removed
//         await browser.pause(3000);

//         // Access iframe by attribute like name..
//         const iframeElement = await $("iframe[name='top-iframe']");
//         await iframeElement.waitForDisplayed();

//         // Switch using the element directly
//         await browser.switchFrame(iframeElement);

//         // Now interact with elements inside
//         const heading = await $("span[class='highlight_gXVj']");
//         await heading.waitForDisplayed();
//         // await expect(heading).toHaveText("Playwright");
//         assert.equal(await heading.getText(), "laywright")

//         await browser.pause(3000);
//     });
// });
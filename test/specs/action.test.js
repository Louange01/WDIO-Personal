// import { act } from "react";
import actionsPage from "../pageobjects/actions.page";
import { assert } from "chai";

describe('move to elements', function () {
    it('Move to element for the user', async () => {
        await browser.url('https://the-internet.herokuapp.com/hovers');
        await actionsPage.moveToElement(actionsPage.hovers);
        await actionsPage.moveToElement(actionsPage.figure);
        await actionsPage.clickElement(actionsPage.viewProfile);
        browser.pause(5000);
    });

    it('Keys action perform tab   ', async () => {
        await browser.url('https://the-internet.herokuapp.com/key_presses?');
        await actionsPage.enterSearch("Tab");
        assert.equal(await actionsPage.getResultlableText(), 'You entered: TAB')
    })
    it('Keys action perform shift   ', async () => {
        await actionsPage.enterSearch("Shift");
        assert.equal(await actionsPage.getResultlableText(), 'You entered: SHIFT')
    })
    it('Keys action perform Alt   ', async () => {
        await actionsPage.enterSearch("Alt");
        assert.equal(await actionsPage.getResultlableText(), 'You entered: ALT')
    })
})

describe.skip('WebdriverIO API Actions', function () {
    it('should hover on figure', async () => {
        await browser.url('https://the-internet.herokuapp.com/hovers') //(`${browser.options.baseUrl}/hovers`)
        actionsPage.hoverOnFigure(3)
        assert.equal("name: user1", actionsPage.getFigureDetailsText(3))
    })

    it('should hover on figure', async () => {
        await browser.url('https://the-internet.herokuapp.com/hovers') //(`${browser.options.baseUrl}/hovers`)
        actionsPage.hoverOnFigure(4)
        assert.equal("name: user2", actionsPage.getFigureDetailsText(4))
    })
    it('should hover on figure', async () => {
        await browser.url('https://the-internet.herokuapp.com/hovers') //(`${browser.options.baseUrl}/hovers`)
        actionsPage.hoverOnFigure(5)
        assert.equal("name: user3", actionsPage.getFigureDetailsText(5))
    })

    it.skip('should send keyboard value Enter', async () => {
        await browser.url('https://the-internet.herokuapp.com/key_presses')
        await actionsPage.clickTarget()
        await actionsPage.sendKeysToTarget("Return")
        await browser.pause(5000)
        assert.equal(await actionsPage.getResultText(), '')
    })
    it('should send keyboard value Tab', async () => {
        await actionsPage.clickTarget()
        await actionsPage.sendKeysToTarget("Tab")
        assert.equal(await actionsPage.getResultText(), "You entered: TAB")
    })

    it('should send keyboard value Shift', async () => {
        await actionsPage.clickTarget()
        await actionsPage.sendKeysToTarget("Shift")
        assert.equal(await actionsPage.getResultText(), "You entered: SHIFT")
    })
})
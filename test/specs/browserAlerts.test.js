import BrowserAlerts from "../pageobjects/browserAlerts.page";
import assert from "assert"

describe('Javascript Alerts', () => {
    it('should get text of alert', async () => {
        await browser.url('https://the-internet.herokuapp.com/javascript_alerts')
        await BrowserAlerts.clickJavascriptAlertButton(1);
        // assert.equal(await browser.getAlertText(), 'I am a JS Alert');
        await browser.acceptAlert();
        assert.equal(await BrowserAlerts.getResultText(), 'You successfully clicked an alert')

    })
    // it('should accept alert', async () => {
    //     await BrowserAlerts.clickJavascriptAlertButton(1);
    //     await browser.acceptAlert()
    //     assert.equal('You successfully clicked an alert', await BrowserAlerts.getResultText())
    // })
    it('should dismiss alert', async () => {
        await BrowserAlerts.clickJavascriptAlertButton(2);
        await browser.dismissAlert()
        assert.equal(await BrowserAlerts.getResultText(), 'You clicked: Cancel')
    })
})
describe.skip('handle alert pop-ups', () => {
    it('should accept the alert', async () => {
        await browser.url('https://the-internet.herokuapp.com/javascript_alerts')
        await BrowserAlerts.clickOnAlertButton(1);
        assert.equal(await browser.getAlertText(), 'I am a JS Alert');
        // const alertText = browser.getAlertText()
        // assert.equal('I am a JS Alert', await alertText)
        await broswer.acceptAlert()
        console.log(await BrowserAlerts.getResultText())
        assert.equal('you sucessfully clicked an alert', await BrowserAlerts.getResultText())
        browser.pause(3000)
    })
    // it('should dismiss the alert', async () => {
    //     await browser.url('https://the-internet.herokuapp.com/javascript_alerts')
    //     await BrowserAlerts.clickOnAlertButton(2)
    //     browser.dismissAlert()
    //     console.log(await BrowserAlerts.getResultText())
    //     assert.equal('You clicked: Cancel', await BrowserAlerts.getResultText())
    //   
    //   browser.pause(3000)
    // })
})



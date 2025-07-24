//ENV=main npx wdio --spec ./test/specs/browserAlerts.test.js  

import BrowserAlerts from "../pageobjects/browserAlerts.page";
import assert from "assert"

describe('Javascript Alerts', () => {
    it('should get text of alert', async () => {
        await browser.url('/javascript_alerts')
        await BrowserAlerts.ClickJavascriptAlertButton(1);
        await browser.acceptAlert();
        assert.equal(await BrowserAlerts.GetResultText(), 'You successfully clicked an alert')
    })
    it('should accept alert', async () => {
        await BrowserAlerts.ClickJavascriptAlertButton(1);
        await browser.acceptAlert()
        assert.equal('You successfully clicked an alert', await BrowserAlerts.GetResultText())
    })
    it('should dismiss alert', async () => {
        await BrowserAlerts.ClickJavascriptAlertButton(2);
        await browser.dismissAlert()
        assert.equal(await BrowserAlerts.GetResultText(), 'You clicked: Cancel')
    })
})



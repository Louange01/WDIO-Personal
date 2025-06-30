import assert from "assert"
import WaitForEnabled from "../pageobjects/waitForEnabled.page"


describe('Wait For Enabled', () => {
    it('should wait for enabled', async () => {
        await browser.url('https://the-internet.herokuapp.com/dynamic_controls')
        await WaitForEnabled.clickEnableButton()
        await WaitForEnabled.inputEnabledField.waitForEnabled(4000)
        assert.equal(await WaitForEnabled.inputEnabledField.isEnabled(), true)
    })
    it('should wait for the input field to be disabled', async () => {
        await WaitForEnabled.clickEnableButton()
        await WaitForEnabled.inputEnabledField.waitForEnabled(4000, true)
        assert.equal(await WaitForEnabled.inputEnabledField.isEnabled(), true)
    })
})
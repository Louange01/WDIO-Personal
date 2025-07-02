import assert from "assert"
import WaitForEnabled from "../pageobjects/waitForEnabled.page"

describe('Wait For Enabled', () => {
    it('should wait for enabled', async () => {
        await browser.url('https://the-internet.herokuapp.com/dynamic_controls')
        await WaitForEnabled.clickEnableButton()
        await WaitForEnabled.inputEnabledField.waitForEnabled({ timeout: 4000 })
        assert.equal(await WaitForEnabled.inputEnabledField.isEnabled(), true)
    })
    it('should wait for the input field to be disabled', async () => {
        await WaitForEnabled.clickDisabledButton()
        await WaitForEnabled.inputEnabledField.waitForEnabled({ reverse: true })
        assert.equal(await WaitForEnabled.inputEnabledField.isEnabled(), false)
    })
})
describe.only('WaitUntil', () => {
    it('should wait until the button text changes to Add', async () => {
        await browser.url('https://the-internet.herokuapp.com/dynamic_controls')
        await WaitForEnabled.clickPageButton()
        browser.waitUntil(async () => {
            return await WaitForEnabled.pageButton.getText() === 'Add'
        }, 
        6000, 'Expect button text to change')
    })
    it('should wait until the button text changes to Remove', async () => {
        await WaitForEnabled.clickPageButton()
        browser.waitUntil(async () => {
            return await WaitForEnabled.pageButton.getText() === 'Remove'
        }, 
        6000, 'Expect button text to change')
        assert.equal(await WaitForEnabled.pageButton.getText(), 'Remove')
    })
})
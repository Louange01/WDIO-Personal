import WaitForExist from "../pageobjects/waitForExist.page";
import assert from "assert"

describe('Wait For Exist', () => {
    it('should wait until the delete button exists', async () => {
        browser.url('https://the-internet.herokuapp.com/add_remove_elements/')
        await WaitForExist.clickExampleButton()
        await WaitForExist.deleteButton(1).waitForExist()
        assert.equal(await WaitForExist.deleteButton(1).isExisting(), true)
    })
    it('should wait for the delete button to not exist', async () => {
        await WaitForExist.clickDeleteButton(1)
        await WaitForExist.deleteButton(1).waitForExist({ timeout: 500, reverse: true })
        assert.equal(await WaitForExist.deleteButton(1).isExisting(), false)
        browser.pause(2000)
    })
}) 
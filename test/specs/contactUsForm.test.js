import RegisterUser from "../pageobjects/registerUser.page"
import assert from "assert"

describe('succesfully submit a contact Us form ', () => {
    it('should navigate and confirm home page is visible', async () => {
        browser.url(`${browser.options.baseUrl}`)
        assert.equal(await RegisterUser.verifyHomePageVisible(), true)
        await RegisterUser.clickContactUsButton()
    })
    it('should verify GET IN TOUCH is visible and enter contact info', async () => {
        await RegisterUser.verifyGetInTouchText()
        await RegisterUser.fillContactForm("Tryphene", "tryphene@gmail.com", "Enquiry", "would like to enquire about the page")
    })
    it("should upload the file ", async () => {
        const filePath = "images/contactUsFormIMG.png"
        const remoteFilePath = await browser.uploadFile(filePath)
        await RegisterUser.uploadFile.setValue(remoteFilePath)
        // assert.equal(await RegisterUser.checkUploadText(), 'contactUsFormIMG.png')
    })
    it('should click on the submit button', async () => {
        await RegisterUser.clickSubmitButton()
        await browser.acceptAlert();
        await RegisterUser.verifySuccessMessage()
        assert.equal(await RegisterUser.successMsg.isDisplayed(), true, 'Success! Your details have been submitted successfully')
        // assert.equal(await RegisterUser.verifySuccessMessage(), 'Success! Your details have been submitted successfully')
        await RegisterUser.clickHomePage()
        assert.equal(await RegisterUser.verifyHomePageVisible(), true)

    })


})
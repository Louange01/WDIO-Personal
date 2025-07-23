//  ENV=qa npx wdio --spec ./test/specs/contactUsForm.test.js

import ContactUsForm from "../pageobjects/contactUsForm.page"
import assert from "assert"

describe('succesfully submit a contact Us form ', () => {
    it('should navigate and confirm home page is visible', async () => {
        browser.url(`${browser.options.baseUrl}`)
        assert.equal(await ContactUsForm.VerifyHomePageVisible(), true)
        await ContactUsForm.ClickContactUsButton()
    })
    it('should verify GET IN TOUCH is visible and enter contact info', async () => {
        await ContactUsForm.VerifyGetInTouchText()
        await ContactUsForm.FillContactForm("Tryphene", "tryphene@gmail.com", "Enquiry", "would like to enquire about the page")
    })
    it("should upload the file ", async () => {
        const filePath = "images/contactUsFormIMG.png"
        const remoteFilePath = await browser.uploadFile(filePath)
        await ContactUsForm.uploadFile.setValue(remoteFilePath)
        assert.equal(await ContactUsForm.CheckUploadText(), 'contactUsFormIMG.png')
    })
    it('should click on the submit button', async () => {
        await ContactUsForm.ClickSubmitButton()
        await browser.acceptAlert();
        await ContactUsForm.VerifySuccessMessage()
        assert.equal(await ContactUsForm.successMsg.isDisplayed(), true, 'Success! Your details have been submitted successfully')
        await ContactUsForm.ClickHomePage()
        assert.equal(await ContactUsForm.VerifyHomePageVisible(), true)
    })
})
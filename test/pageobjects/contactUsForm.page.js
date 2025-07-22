class ContactUsForm {
    get homePageSlider() { return $(".carousel-inner"); }
    get contactUsButton() { return $('a[href="/contact_us"]'); }
    get getInTouchText() { return $('//h2[text()="Get In Touch"]'); }
    get contactUsNameInput() { return $('input[data-qa="name"]'); }
    get contactUsEmailInput() { return $('input[data-qa="email"]'); }
    get contactUsSubjectInput() { return $('input[data-qa="subject"]'); }
    get messageTextarea() { return $('textarea[data-qa="message"]'); }
    get uploadFile() { return $('input[name="upload_file"]'); }
    get submitBtn() { return $('input[data-qa="submit-button"]'); }
    get successMsg() { return $('//div[contains(text(),"Success! Your details have been submitted successfully.")]'); }
    get homeBtn() { return $('//a[contains(text(),"Home")]'); }

    async VerifyHomePageVisible() {
        await this.homePageSlider.waitForDisplayed();
        return await this.homePageSlider.isDisplayed();
    }
    async ClickContactUsButton() {
        await this.contactUsButton.waitForDisplayed()
        await this.contactUsButton.click();
    }
    async VerifyGetInTouchText() {
        await this.getInTouchText.waitForDisplayed()
        await this.getInTouchText.click()
    }
    async FillContactForm(name, email, subject, message) {
        await this.contactUsNameInput.waitForDisplayed();
        await this.contactUsNameInput.setValue(name);
        await this.contactUsEmailInput.waitForDisplayed();
        await this.contactUsEmailInput.setValue(email);
        await this.contactUsSubjectInput.waitForDisplayed()
        await this.contactUsSubjectInput.setValue(subject);
        await this.messageTextarea.waitForDisplayed()
        await this.messageTextarea.setValue(message);
    }
    async CheckUploadText() {
        let path = 'C:\\fakepath\\contactUsFormIMG.png'
        const finalPath = path.replaceAll('C:\\fakepath\\', '');
        console.log(finalPath);
    }
    async ClickSubmitButton() {
        await this.submitBtn.isDisplayed()
        await this.submitBtn.click()
    }
    async VerifySuccessMessage() {
        await this.successMsg.waitForDisplayed({ timeout: 10000 })
        await this.successMsg.isDisplayed()
        await this.successMsg.getValue()
    }
    async ClickHomePage() {
        await this.homeBtn.waitForDisplayed()
        await this.homeBtn.click()
    }
}
export default new ContactUsForm();

// internet.pages.js
class Internet {
    get pageHeader() { return $('h1.heading') }
    get subHeading() { return $('h2') }
    get pageFooter() { return $('#page-footer') }
    get parent() { return $('ul') }
    get childElements() { return this.parent.$$('li') }
    link(index) { return $(`ul li:nth-child(${index}) a`) }
    specificChildElement(index) { return this.parent.$(`li:nth-child(${index})`) }
    checkboxes(index) { return $(`#checkboxes input:nth-child(${index})`) }

    get abTestingLink() { return $('a[href="/abtest"]'); }
    get checkboxesLink() { return $('a[href="/checkboxes"]'); }
    get loginLink() { return $('a[href="/login"]'); }
    get abTestingHeading() { return $('h3'); }
    get usernameInput() { return $('#username'); }
    get passwordInput() { return $('#password'); }
    get loginButton() { return $('button[type="submit"]'); }
    get flashMessage() { return $('#flash'); }
    getCheckbox(index) {
        return $(`input[type="checkbox"]:nth-child(${index * 2 - 1})`);
    }
    async GetLiText() {
        await this.childElements.forEach((element) => {
            console.log(element.getText())
        })
    }
    async GetSpecificElementText(index) {
        await this.specificChildElement(index).waitForDisplayed()
        return await this.specificChildElement(index).getText()
    }
    async ClickCheckbox(index) {
        await this.checkboxes(index).waitForDisplayed()
        await this.checkboxes(index).click()
    }
    async ClickOnLink() {
        if (await this.firstLink.isDisplayed() === true) {
            await this.firstLink.click()
        }
        await this.h3Header.waitForDisplayed()
    }
    async ClickLink(index) {
        await this.link(index).waitForDisplayed()
        await this.link(index).click()
    }
    async EnterUsername(text) {
        await this.username.waitForDisplayed()
        await this.username.setValue(text)
    }
    async EnterPassword(text) {
        await this.password.waitForDisplayed()
        await this.password.setValue(text)
    }
    async GetTitle() {
        return await browser.getTitle();
    }
    async ClickABTestingLink() {
        await this.abTestingLink.click();
    }
    async GetABTestingHeading() {
        return await this.abTestingHeading.getText();
    }
    async ClickCheckboxesLink() {
        await this.checkboxesLink.click();
    }
    // async ClickCheckbox(index) {
    //     await this.getCheckbox(index).click();
    // }
    async IDBCursorsCheckboxSelected(index) {
        return await this.getCheckbox(index).isSelected();
    }
    async ClickLoginLink() {
        await this.loginLink.click();
    }
    async EnterUsername(username) {
        await this.usernameInput.setValue(username);
    }
    async EnterPassword(password) {
        await this.passwordInput.setValue(password);
    }
    async ClickLoginButton() {
        await this.loginButton.click();
    }
    async Login(username, password) {
        await this.EnterUsername(username);
        await this.EnterPassword(password);
        await this.ClickLoginButton();
    }
    async GetFlashMessage() {
        await this.flashMessage.waitForDisplayed();
        return await this.flashMessage.getText();
    }
    async open() {
        await browser.url('/');
    }
    async getTitle() {
        return await browser.getTitle();
    }
}
export default new Internet();

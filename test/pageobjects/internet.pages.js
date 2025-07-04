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

    async getLiText() {
        await this.childElements.forEach((element) => {
            console.log(element.getText())
        })
    }
    async getSpecificElementText(index) {
        await this.specificChildElement(index).waitForDisplayed()
        return await this.specificChildElement(index).getText()
    }
    async clickCheckbox(index) {
        await this.checkboxes(index).waitForDisplayed()
        await this.checkboxes(index).click()
    }
    async clickOnLink() {
        if (await this.firstLink.isDisplayed() === true) {
            await this.firstLink.click()
        }
        await this.h3Header.waitForDisplayed()
    }
    async clickLink(index) {
        await this.link(index).waitForDisplayed()
        await this.link(index).click()
    }
   async  enterUsername(text) {
        await this.username.waitForDisplayed()
        await this.username.setValue(text)
    }
     async enterPassword(text) {
       await this.password.waitForDisplayed()
        await this.password.setValue(text)
    }
}
export default new Internet();
//     get childElements() { return this.parent.$$('li') }
//     getLiText() {
//         this.childElements.filter((element) => {
//             console.log(element.getText())
//         })
//     }
// }
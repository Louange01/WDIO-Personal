class Assertions {
    get pageHeader() { return $('h3'); }
    get pageFooter() { return $('#page-footer'); }
    get emailInput() { return $('#email'); }
    get retrieveBtn() { return $('button.radius'); }
    get heading() { return $('h1'); }
    get elementalSeleniumLink() { return $('a[href="http://elementalselenium.com/"]'); }

    async scrollToPageFooter() {
        await this.pageFooter.scrollIntoView();
    }

    async scrollToElementalSeleniumLink() {
        await this.elementalSeleniumLink.scrollIntoView();
    }

    async clickElementalSeleniumLink() {
        await this.elementalSeleniumLink.waitForClickable();
        await this.elementalSeleniumLink.click();
    }

    async verifyElementalSeleniumPage() {
        await browser.waitUntil(async () => {
            return (await browser.getUrl()).includes('elementalselenium.com');
        });

        await this.heading.waitForDisplayed({ timeout: 5000 });
        return {
            url: await browser.getUrl(),
            title: await browser.getTitle(),
            h1Text: await this.heading.getText()
        };
    }
    //     async getPoweredByText() {
    //     return await this.pageFooter.getText();
    // }
    async submitForgotPassword(email) {
        await this.emailInput.waitForDisplayed();
        await this.emailInput.setValue(email);
        await this.retrieveBtn.waitForDisplayed();
        await this.retrieveBtn.click();
    }

    async getErrorHeadingText() {
        await this.heading.waitForDisplayed();
        return await this.heading.getText();
    }
}
export default new Assertions();

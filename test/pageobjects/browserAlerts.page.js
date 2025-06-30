class BrowserAlerts {
    get result() {
        return $('.example #result')
    }
    get resultText() {
        return $('#result');
    }
    async javascriptAlertButton(index) {
        return $(`.example li:nth-child(${index}) button`)
    }
    async clickJavascriptAlertButton(index) {
        await (await this.javascriptAlertButton(index)).waitForDisplayed();
        await (await this.javascriptAlertButton(index)).click();
    }
    async getResultText() {
        await this.resultText.waitForDisplayed();
        return await this.resultText.getText();
        // }
        // get result() {
        //     return $('.example #result')
        // }
        // get resultText() {
        //     return this.result.getText()
        // }
        // async getAlertButton(index) {
        //     return $(`ul li:nth-child(${index}) button`)
        // }
        // async clickOnAlertButton(index) {
        //     await this.getAlertButton(index).waitForDisplayed()
        //     await this.getAlertButton(index).click()

        // }
    }
}
export default new BrowserAlerts();

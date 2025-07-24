class BrowserAlerts {
    get result() {
        return $('.example #result')
    }
    get resultText() {
        return $('#result');
    }
    async JavascriptAlertButton(index) {
        return $(`.example li:nth-child(${index}) button`)
    }
    async ClickJavascriptAlertButton(index) {
        await (await this.javascriptAlertButton(index)).waitForDisplayed();
        await (await this.javascriptAlertButton(index)).click();
    }
    async GetResultText() {
        await this.resultText.waitForDisplayed();
        return await this.resultText.getText();
    }
    async ClickOnAlertButton(index) {
        await this.getAlertButton(index).waitForDisplayed()
        await this.getAlertButton(index).click()
    }
}
export default new BrowserAlerts();

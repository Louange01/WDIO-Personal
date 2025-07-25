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
        await (await this.JavascriptAlertButton(index)).waitForDisplayed();
        await (await this.JavascriptAlertButton(index)).click();
    }
    async GetResultText() {
        await this.resultText.waitForDisplayed();
        return await this.resultText.getText();
    }
}
export default new BrowserAlerts();

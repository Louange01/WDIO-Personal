class WaitForEnabled {
    get enableButton() {
        return $('#input-example button')
    }
    get inputEnabledField() {
        return $('#input-example input')
    }
    async clickEnableButton() {
        await this.enableButton.waitForDisplayed()
        await this.enableButton.click()
    }
}
export default new WaitForEnabled();
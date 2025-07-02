class WaitForEnabled {
    get enableButton() {
        return $('//button[contains(text(), "Enable")]')
    }
    get inputEnabledField() {
        return $('#input-example input')
    }
    get disabledbutton() {
        return $('//button[contains(text(), "Disable")]')
    }
    get pageButton() {
        return $('#checkbox-example button')
    }
    clickPageButton() {
        this.pageButton.waitForDisplayed()
        this.pageButton.click()
    }
    async clickEnableButton() {
        await this.enableButton.waitForDisplayed()
        await this.enableButton.click()
    }
    async clickDisabledButton() {
        await this.disabledbutton.waitForDisplayed()
        await this.disabledbutton.click()
    }
}
export default new WaitForEnabled();
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
    async ClickPageButton() {
        this.pageButton.waitForDisplayed()
        this.pageButton.click()
    }
    async ClickEnableButton() {
        await this.enableButton.waitForDisplayed()
        await this.enableButton.click()
    }
    async ClickDisabledButton() {
        await this.disabledbutton.waitForDisplayed()
        await this.disabledbutton.click()
    }
}
export default new WaitForEnabled();
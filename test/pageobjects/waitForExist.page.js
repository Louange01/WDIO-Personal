class WaitForExist {
    get exampleButton() { return $('.example button') }
    deleteButton(index) { return $(`#elements button:nth-child(${index})`) }

    async clickExampleButton() {
        await this.exampleButton.waitForDisplayed()
        await this.exampleButton.click()
    }
    async clickDeleteButton(index) {
        await this.deleteButton(index).waitForDisplayed()
        await this.deleteButton(index).click()
    }

}
export default new WaitForExist();
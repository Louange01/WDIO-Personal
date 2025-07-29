class WaitForExist {
    get exampleButton() { return $('.example button') }
    deleteButton(index) { return $(`#elements button:nth-child(${index})`) }

    async ClickExampleButton() {
        await this.exampleButton.waitForDisplayed()
        await this.exampleButton.click()
    }
    async ClickDeleteButton(index) {
        await this.deleteButton(index).waitForDisplayed()
        await this.deleteButton(index).click()
    }

}
export default new WaitForExist();
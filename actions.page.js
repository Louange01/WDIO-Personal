class internet {
    // figures(index) { return $('.example .figure:nth-child(${index}) img') }
    // figureDetails(index) { return $('.example.figure: nth - child(${ index }).figcaption h5') }
    // async hoverOnFigure(index) {
    //     await this.figures(index).waitForDisplayed()
    //     await this.figures(index).moveTo(1, 1)
    // }
    // async getFigureDetailsText(index) {
    //     awaitthis.figureDetails(index).waitForDisplayed()
    //     return this.figureDetails(index).getText()
    // }

    // get target() { return $('#target') }
    // get resultText() { return $('#result') }

    // async clickTarget() {
    //     await this.target.waitForDisplayed()
    //     await this.target.click()
    // }
    // async sendKeysToTarget(value) {
    //     await this.target.waitForDisplayed()
    //     await this.target.click()
    //     await browser.keys(value) // Using the global browser object, not this.target.browser
    // }

    // async getResultText() {
    //     await this.resultText.waitForDisplayed()
    //     return await this.resultText.getText()
    // }


    get hovers() { return $('.example') }
    get figure() { return $('.figure') }
    get viewProfile() { return $('a[href^="/users/1"]') }

    async moveToElement(element) {
        element.waitForDisplay()
        element.moveTo();
    }

    async clickElement(element) {
        element.waitForDisplay()
        element.click();
    }

    get searchField() { return $('#target') }
    get resultLable() { return $('#result') }

    async getResultlableText() {
        await this.resultLable.waitForDisplayed();
        return await this.resultLable.getText();
    }
    async enterSearch(value) {
        await this.searchField.waitForDisplayed();
        await this.searchField.click()
        await browser.keys(value)
    }

}

export default new internet();
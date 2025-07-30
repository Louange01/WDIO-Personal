class DownloadInvoicePO {
    get downloadInvoiceBtn() { return $("//a[contains(text(),'Download Invoice')]") }
    get continueBtn() { return $("//a[contains(text(),'Continue')]") }

    async ClickDownloadInvoiceBtn() {
        await this.downloadInvoiceBtn.waitForDisplayed()
        await this.downloadInvoiceBtn.click()
    }
    async ClickContinueBtn() {
        await this.continueBtn.waitForDisplayed()
        await this.continueBtn.click()
    }
}
export default new DownloadInvoicePO();
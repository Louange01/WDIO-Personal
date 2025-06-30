class IframeWindow {
    get hereLink() { return $('.example a') }
    clickHereLink() {
        this.hereLink.waitForDisplayed()
        this.hereLink.click()
    }
    get h1Header() { return $('h1') };//[class="hero__title heroTitle_ohkl"]
    get iframeBody() { return $("iframe[name='top-iframe']"); }
    get iframeH1() {
        return $("span[class='highlight_gXVj']");
    }
    get iframeBody2() {
        return $('iframe[name="bottom-iframe"]')
    }
    get iframe2H1() {
        return $('h1[class="d-1 fw-bold"]')
    }
    async scrollToBottomFrame() {
        await this.iframeBody2.scrollIntoView()
    }

    async sendTextToBody() {
        await this.iframeBody.waitForDisplayed();
        // await this.iframeBody.clearValue();
        // await this.iframeBody.click();
        // await this.iframeBody.keys(value);
    }

}
export default new IframeWindow();

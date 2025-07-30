class IframeWindow {
    get hereLink() { return $('.example a') }
    get h1Header() { return $('h1') };
    get iframeBody() { return $("iframe[name='top-iframe']"); }
    get iframeH1() { return $("span[class='highlight_gXVj']"); }
    get iframeBody2() { return $('iframe[name="bottom-iframe"]') }
    get iframe2H1() { return $('h1[class="d-1 fw-bold"]') }

    async ClickHereLink() {
        this.hereLink.waitForDisplayed()
        this.hereLink.click()
    }
    async ScrollToBottomFrame() {
        await this.iframeBody2.scrollIntoView()
    }
    async SendTextToBody() {
        await this.iframeBody.waitForDisplayed();
    }
}
export default new IframeWindow();

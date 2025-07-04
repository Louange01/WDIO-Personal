import internetPages from "../pageobjects/internet.pages";
import assert from "assert"
import loginDetails from "../../data/loginDetails";

describe.skip("Interacting with elements", () => {
    before(async () => {
        it("Get text for element", async () => {
            await browser.url('https://the-internet.herokuapp.com/')
        });
        let text = $("//*[@id='page-footer']").getText()
        console.log(text)
        internetPages.getLiText()
        internetPages.getSpecificElementText(3)
    })
})
describe(' Test element actions', () => {
    it('should click element', async () => {
        browser.url('https://the-internet.herokuapp.com')
        await internetPages.clickOnLink()
        assert.equal(browser.getUrl(), 'http://the-internet.herokuapp.com/abtest')
    })
    it('should get Text', async () => {
        await browser.url('https://the-internet.herokuapp.com')
        assert.equal(await internetPages.getSpecificElementText(1), 'A/B Testing')
    })
    it('should click checkbox', async () => {
        await internetPages.clickCheckbox(1)
        assert.equal(await internetPages.checkbox(1).isSelected(), true)
    })
    it('should click checkbox', async () => {
        await internetPages.clickLink(6)
        await internetPages.clickCheckbox(1)
        assert.equal(await internetPages.checkboxes(1).isSelected(), true)
    })
    it('should uncheck checkox', async () => {
        await internetPages.clickCheckbox(1)
        assert.equal(await internetPages.checkboxes(1).isSelected(), false)
    })
    it('should enter username', async () => {
        await browser.url('https://the-internet.herokuapp.com/login')
        await internetPages.enterUsername(loginDetails.userName)
        assert.equal(loginDetails.userName, await internetPages.username.getValue())
    })
    it('should enter password', async () => {
        browser.url('https://the-internet.herokuapp.com/login')
        await internetPages.enterPassword(loginDetails.password)
        assert.equal(loginDetails.password, await internetPages.password.getValue())
    })
    it('should clear Value', async () => {
        await internetPages.username.click()
        await internetPages.username.clearValue()
        assert.equal('', await internetPages.username.getValue())
    })
})

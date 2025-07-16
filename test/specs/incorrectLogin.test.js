// ENV=qa npx wdio --spec ./test/specs/incorrectLogin.test.js

import assert from "assert"
import RegisterUser from "../pageobjects/registerUser.page"


describe('login user with Incorrect email and password', () => {
    it('should Verify that home page is visible successfully', async () => {
        browser.url(`${browser.options.baseUrl}`)
        assert.equal(await RegisterUser.verifyHomePageVisible(), true)
    })
    it(" Should Click on 'Signup / Login' button", async () => {
        await RegisterUser.clickSignupLogin();
        assert.equal(await RegisterUser.verifyloginAccountTextVisible(), true);
        await RegisterUser.enterLoginDetails("louange@rapidtrade.com", "Louange");
        await RegisterUser.clickLoginButton();
        assert.equal(await RegisterUser.verifyIncorrectloginMessage(), 'Your email or password is incorrect!')
    })

})
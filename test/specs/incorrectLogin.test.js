// ENV=qa npx wdio --spec ./test/specs/incorrectLogin.test.js

import assert from "assert"
import RegisterUser from "../pageobjects/registerUser.page"

describe('login user with Incorrect email and password', () => {
    it('should Verify that home page is visible successfully', async () => {
        browser.url(`${browser.options.baseUrl}`)
        assert.equal(await RegisterUser.VerifyHomePageVisible(), true)
    })
    it(" Should Click on 'Signup / Login' button", async () => {
        await RegisterUser.ClickSignupLogin();
        assert.equal(await RegisterUser.VerifyloginAccountTextVisible(), true);
        await RegisterUser.EnterLoginDetails("louange@rapidtrade.com", "Louange");
        await RegisterUser.ClickLoginButton();
        assert.equal(await RegisterUser.VerifyIncorrectloginMessage(), 'Your email or password is incorrect!')
    })

})
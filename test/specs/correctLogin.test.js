// ENV=qa npx wdio --spec ./test/specs/correctLogin.test.js

//The email address and password are not being accepted; therefore, we can not confirm that we are logged in and then delete the account afterwards

import RegisterUser from "../pageobjects/registerUser.page";
import assert from "assert"

describe('login user with correct email and password', () => {
    it('should Verify that home page is visible successfully', async () => {
        browser.url(`${browser.options.baseUrl}`)
        assert.equal(await RegisterUser.verifyHomePageVisible(), true)
    })
    it(" Should Click on 'Signup / Login' button and  verify login account text is visible", async () => {
        await RegisterUser.clickSignupLogin();
        assert.equal(await RegisterUser.verifyloginAccountTextVisible(), true);
        await RegisterUser.enterLoginDetails("louange@gmail.com", "Pass@word1");

    })
    it('should click login button and verify logged in as username is visible', async () => {
        await RegisterUser.clickLoginButton();
        assert.equal(await RegisterUser.verifyLoggedInAsUser(), true)
    })

    it('should click Delete Account button and verify ACCOUNT DELETED is visible', async () => {
        await RegisterUser.clickDeleteAccount()
        await browser.pause(2000)
        assert.equal(await RegisterUser.verifyAccountDeleted(), true)
    })

})

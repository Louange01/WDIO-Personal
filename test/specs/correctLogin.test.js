// ENV=qa npx wdio --spec ./test/specs/correctLogin.test.js

import RegisterUser from "../pageobjects/registerUser.page";
import assert from "assert"

describe('login user with correct email and password', () => {
    let testUser = {
        name: "Louange" + Math.floor(Math.random() * 10000),
        email: "louange" + Math.floor(Math.random() * 10000) + "@gmail.com"
    };
    it('should Verify that home page is visible successfully', async () => {
        browser.url(`${browser.options.baseUrl}`)
        assert.equal(await RegisterUser.VerifyHomePageVisible(), true)
    })
    it("should click on Signup/Login button", async () => {
        await RegisterUser.ClickSignupLogin();
        assert.equal(await RegisterUser.VerifyNewUserSignupVisible(), true);
        await RegisterUser.EnterSignupDetails(testUser.name, testUser.email);
        await browser.pause(2000)
        const emailInput = await RegisterUser.signupEmailField.getValue();
        console.log(emailInput);
        await RegisterUser.ClickSignupButton();
        assert.equal(await RegisterUser.VerifyEnterAccountInfoVisible(), true);
        await RegisterUser.FillAccountInformation();
    });
    it("should select newsletter checkbox", async () => {
        await RegisterUser.SelectNewsletterCheckbox();
        await RegisterUser.SelectSpecialOffersCheckbox();
    });
    it("should fill address information details", async () => {
        await RegisterUser.FillAddressInformation();
        await RegisterUser.ClickCreateAccount();
        assert.equal(await RegisterUser.VerifyAccountCreated(), true);
    });
    it("should click Continue button", async () => {
        await RegisterUser.ClickContinue();
        assert.equal(await RegisterUser.VerifyLoggedInAsUser(testUser.name), true);
    });
    it('should click Logout button', async () => {
        await RegisterUser.ClickLogout();
        assert((await browser.getUrl()).includes('login') || (await browser.getUrl()).includes('signin'), 'Should be on login page');
    });
    it(" Should Click on 'Signup / Login' button and  verify login account text is visible", async () => {
        await RegisterUser.ClickSignupLogin();
        assert.equal(await RegisterUser.VerifyloginAccountTextVisible(), true);
        await RegisterUser.EnterLoginDetails(testUser.email, "Pass@word1");
        const emailInput = await RegisterUser.loginEmailField.getValue();
        console.log(emailInput);
    })
    it('should click login button and verify logged in as username is visible', async () => {
        await RegisterUser.ClickLoginButton();
        assert.equal(await RegisterUser.VerifyLoggedInAsUser(testUser.name), true)
    })
    it('should click Delete Account button and verify ACCOUNT DELETED is visible', async () => {
        await RegisterUser.ClickDeleteAccount()
        await browser.pause(2000)
        assert.equal(await RegisterUser.VerifyAccountDeleted(), true)
    })
})

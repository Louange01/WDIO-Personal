// ENV=qa npx wdio --spec ./test/specs/logOutUser.test.js

import RegisterUser from "../pageobjects/registerUser.page";
import assert from "assert"

describe('login user with correct email and password', () => {
    // generated a test user object that produces random credentials but remains the same throughout an entire test suite
    let testUser = {
        name: "Louange" + Math.floor(Math.random() * 10000),
        email: "louange" + Math.floor(Math.random() * 10000) + "@gmail.com"
    };

    it('should Verify that home page is visible successfully', async () => {
        browser.url(`${browser.options.baseUrl}`)
        assert.equal(await RegisterUser.verifyHomePageVisible(), true)
    })

    it("should click on Signup/Login button", async () => {
        await RegisterUser.clickSignupLogin();
        assert.equal(await RegisterUser.verifyNewUserSignupVisible(), true);
        await RegisterUser.enterSignupDetails(testUser.name, testUser.email);
        await RegisterUser.clickSignupButton();
        assert.equal(await RegisterUser.verifyEnterAccountInfoVisible(), true);
        await RegisterUser.fillAccountInformation();
    });

    it("should select newsletter checkbox", async () => {
        await RegisterUser.selectNewsletterCheckbox();
        await RegisterUser.selectSpecialOffersCheckbox();
    });

    it("should fill address information details", async () => {
        await RegisterUser.fillAddressInformation();
        await RegisterUser.clickCreateAccount();
        assert.equal(await RegisterUser.verifyAccountCreated(), true);
    });

    it("should click Continue button", async () => {
        await RegisterUser.clickContinue();
        assert.equal(await RegisterUser.verifyLoggedInAsUser(testUser.name), true);
    });
    it('should click Logout button', async () => {
        await RegisterUser.clickLogout();
        assert((await browser.getUrl()).includes('login') || (await browser.getUrl()).includes('signin'), 'Should be on login page');
    });
});
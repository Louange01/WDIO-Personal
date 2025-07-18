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
        assert.equal(await RegisterUser.verifyHomePageVisible(), true)
    })

    it("should click on Signup/Login button", async () => {
        await RegisterUser.clickSignupLogin();
        assert.equal(await RegisterUser.verifyNewUserSignupVisible(), true);
        await RegisterUser.enterSignupDetails(testUser.name, testUser.email);
        await browser.pause(2000)
        const emailInput = await RegisterUser.signupEmailField.getValue();
        console.log(emailInput);
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

    it(" Should Click on 'Signup / Login' button and  verify login account text is visible", async () => {
        await RegisterUser.clickSignupLogin();
        assert.equal(await RegisterUser.verifyloginAccountTextVisible(), true);
        await RegisterUser.enterLoginDetails(testUser.email, "Pass@word1");
        const emailInput = await RegisterUser.loginEmailField.getValue();
        console.log(emailInput);

    })
    it('should click login button and verify logged in as username is visible', async () => {
        await RegisterUser.clickLoginButton();
        assert.equal(await RegisterUser.verifyLoggedInAsUser(testUser.name), true)
    })

    it('should click Delete Account button and verify ACCOUNT DELETED is visible', async () => {
        await RegisterUser.clickDeleteAccount()
        await browser.pause(2000)
        assert.equal(await RegisterUser.verifyAccountDeleted(), true)
    })

})

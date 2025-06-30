import RegisterUser from "../pageobjects/registerUser.page";
import assert from "assert"

describe('Registering a user on the browser', () => {
    it('should Verify that home page is visible successfully', async () => {
        await browser.url('https://automationexercise.com/')
        assert.equal(await RegisterUser.verifyHomePageVisible(), true);
    })
    it('should click on Signup/Login button', async () => {
        await RegisterUser.clickSignupLogin();
        assert.equal(await RegisterUser.verifyNewUserSignupVisible(), true);
        await RegisterUser.enterSignupDetails('Louange' + Math.floor(Math.random() * 10000), 'louange' + Math.floor(Math.random() * 10000) + 'louange@rapidtrade.com');
        await RegisterUser.clickSignupButton();
        assert.equal(await RegisterUser.verifyEnterAccountInfoVisible(), true);
        await RegisterUser.fillAccountInformation();
    });
    it('should select newsletter checkbox', async () => {
        await RegisterUser.selectNewsletterCheckbox();
        await RegisterUser.selectSpecialOffersCheckbox();
    });
    it('should fill address information details', async () => {
        await RegisterUser.fillAddressInformation();
        await RegisterUser.clickCreateAccount();
        assert.equal(await RegisterUser.verifyAccountCreated(), true);
    });
    it('should click Continue button', async () => {
        await RegisterUser.clickContinue();
        assert.equal(await RegisterUser.verifyLoggedInAsUser('Louange'), true);
    });

    it('should click Delete Account button', async () => {
        await RegisterUser.clickDeleteAccount();
        assert.equal(await RegisterUser.verifyAccountDeleted(), true);
        await RegisterUser.clickContinue();

    });
});

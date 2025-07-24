// ENV=qa npx wdio --spec ./test/specs/registerUser.test.js

import RegisterUser from "../pageobjects/registerUser.page";
import assert from "assert";

describe("Registering a user on the browser", () => {
  it("should Verify that home page is visible successfully", async () => {
    await browser.url(`${browser.options.baseUrl}`)
    assert.equal(await RegisterUser.VerifyHomePageVisible(), true);
  });
  it("should click on Signup/Login button", async () => {
    await RegisterUser.clickSignupLogin();
    assert.equal(await RegisterUser.verifyNewUserSignupVisible(), true);
    await RegisterUser.enterSignupDetails(
      "Louange" + Math.floor(Math.random() * 10000),
      "louange" + Math.floor(Math.random() * 10000) + "louange@rapidtrade.com"
    );
    await RegisterUser.ClickSignupButton();
    assert.equal(await RegisterUser.verifyEnterAccountInfoVisible(), true);
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
    assert.equal(await RegisterUser.VerifyLoggedInAsUser("Louange"), true);
  });

  it("should click Delete Account button", async () => {
    await RegisterUser.ClickDeleteAccount();
    assert.equal(await RegisterUser.VerifyAccountDeleted(), true);
    await RegisterUser.ClickContinue();
  });
});

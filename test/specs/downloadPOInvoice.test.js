// ENV=qa npx wdio --spec ./test/specs/downloadPOInvoice.test.js

import PlaceOrderWhileCheckout from "../pageobjects/placeOrderWC.page";
import RegisterUser from "../pageobjects/registerUser.page";
import DownloadInvoicePO from "../pageobjects/downloadPOInvoice.page";
import fs from "fs";
import path from "path";

describe("Fill all details in Signup and create account", () => {
  it("shouldn Navigate to browser", async () => {
    browser.url(`${browser.options.baseUrl}`);
    assert.equal(await RegisterUser.VerifyHomePageVisible(), true);
    await RegisterUser.ClickSignupLogin();
  });
  it("should Register / Login button", async () => {
    assert.equal(await RegisterUser.VerifyNewUserSignupVisible(), true);
    await RegisterUser.EnterSignupDetails(
      "Louange" + Math.floor(Math.random() * 10000),
      "louange" + Math.floor(Math.random() * 10000) + "louange@rapidtrade.com"
    );
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
    assert.equal(await RegisterUser.VerifyLoggedInAsUser("Louange"), true);
  });
});
describe("Place Order: Register while Checkout", () => {
  it("should add products to cart and navigate to checkout", async () => {
    await browser.url(`${browser.options.baseUrl}/products`);
    await PlaceOrderWhileCheckout.AddProductsToCart();
    await PlaceOrderWhileCheckout.ClickCartButton();
    assert.equal(await PlaceOrderWhileCheckout.IsCartPageDisplayed(), true);
    await PlaceOrderWhileCheckout.ClickProceedToCheckout();
  });
});
describe("Proceed with the order", () => {
  it("should Verify Address Details and Review Your Order", async () => {
    await PlaceOrderWhileCheckout.VerifyAddressAndOrder();
    assert.equal(await PlaceOrderWhileCheckout.VerifyAddressAndOrder(), true);
  });
  it("should Enter description in comment text area and click Place Order", async () => {
    await PlaceOrderWhileCheckout.EnterCommentAndPlaceOrder(
      "Test order comment"
    );
    await PlaceOrderWhileCheckout.FillPaymentDetails();
    await PlaceOrderWhileCheckout.ClickPayAndConfirm();
  });
});
describe("download purchase order Invoice", () => {
  it("should click on download invoice", async () => {
    await DownloadInvoicePO.ClickDownloadInvoiceBtn();

    const downloadPath = path.resolve("./downloads");
    const filePath = path.join(downloadPath, "invoice.txt"); // ./downloads/invoice.txt
    console.log(filePath);

    //wait until the file is downloaded and check if the file is downloaded
    await browser.waitUntil(
      () => {
        try {
          const files = fs.readdirSync(downloadPath);
          /**
           * Caters for the following file names:
           * invoice.txt
           * invoice(1).txt
           * invoice_2024.txt
           * my_invoice.txt
           */
          return files.some(
            (file) => file.includes("invoice") && file.endsWith(".txt")
          );
        } catch (error) {
          return false;
        }
      },
      {
        timeout: 5000,
        timeoutMsg: "file not found",
      }
    );
  });
  it("should Click Delete Account button", async () => {
    await DownloadInvoicePO.ClickContinueBtn();
    await PlaceOrderWhileCheckout.ClickDeleteAccount();
    assert.equal(await PlaceOrderWhileCheckout.IsAccountDeleted(), true);
    await PlaceOrderWhileCheckout.ClickContinueButton();
  });
});

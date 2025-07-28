class PlaceOrderWhileCheckout {

    get homePageLogo() { return $('img[alt="Website for automation practice"]'); }
    get productsSection() { return $('.features_items'); }
    get addToCartButtons() { return $$('.productinfo .btn-default'); }
    get cartButton() { return $('a[href="/view_cart"]'); }
    get continueShoppingButton() { return $('.btn-success'); }
    get hereButton() { return $("//u[contains(text(),'here')]") }
    get continueButton() { return $('a[data-qa="continue-button"]'); }

    // Cart Page Elements
    get cartPageTitle() { return $('.breadcrumbs .active'); }
    get proceedToCheckoutButton() { return $('.btn-default.check_out'); }
    get registerLoginButton() { return $('//u[contains(text(),"Register / Login")]'); }

    // Checkout Elements
    get addressDetails() { return $('.checkout-information .address'); }
    get reviewOrder() { return $('.cart_info'); }
    get commentTextArea() { return $('textarea[name="message"]'); }
    get placeOrderButton() { return $('a[href="/payment"]'); }

    // Payment Elements
    get nameOnCard() { return $('input[data-qa="name-on-card"]'); }
    get cardNumber() { return $('input[data-qa="card-number"]'); }
    get cvcNumber() { return $('input[data-qa="cvc"]'); }
    get expiryMonth() { return $('input[data-qa="expiry-month"]'); }
    get expiryYear() { return $('input[data-qa="expiry-year"]'); }
    get payAndConfirmButton() { return $('button[data-qa="pay-button"]'); }

    // Order Success Elements
    get deleteAccountButton() { return $('a[href="/delete_account"]'); }
    get accountDeletedMessage() { return $('h2[data-qa="account-deleted"]'); }
    // get orderSuccessMessage() { return $('p[data-qa="order-placed"]'); }

    async IsHomePageVisible() {
        await this.homePageLogo.waitForDisplayed();
        return await this.homePageLogo.isDisplayed();
    }
    async ClickCartButton() {
        await this.cartButton.waitForDisplayed()
        await this.cartButton.click();
    }
    async IsCartPageDisplayed() {
        await this.cartPageTitle.waitForDisplayed();
        return await this.cartPageTitle.isDisplayed();
    }
    async ClickHereButton() {
        await this.hereButton.isDisplayed()
        await this.hereButton.click()
    }
    async AddProductsToCart() {
        await this.addToCartButtons[0].scrollIntoView();
        await this.addToCartButtons[0].click();
        await this.continueShoppingButton.waitForDisplayed();
        await this.continueShoppingButton.click();
        await this.addToCartButtons[1].scrollIntoView();
        await this.addToCartButtons[1].click();
        await this.continueShoppingButton.waitForDisplayed();
        await this.continueShoppingButton.click();
    }
    async ClickProceedToCheckout() {
        await this.proceedToCheckoutButton.click();
    }
    async ClickRegisterLoginButton() {
        await this.registerLoginButton.click();
    }
    async VerifyAddressAndOrder() {
        await this.addressDetails.waitForDisplayed();
        await this.reviewOrder.waitForDisplayed();
        const isAddressVisible = await this.addressDetails.isDisplayed();
        const isOrderVisible = await this.reviewOrder.isDisplayed();
        return isAddressVisible && isOrderVisible;
    }
    async EnterCommentAndPlaceOrder(comment) {
        await this.commentTextArea.waitForDisplayed({ timeout: 1000 });
        await this.commentTextArea.clearValue();
        await this.commentTextArea.setValue(String(comment));
        await this.placeOrderButton.click();
    }
    async FillPaymentDetails() {
        await this.nameOnCard.waitForDisplayed({ timeout: 2000 });
        await this.nameOnCard.setValue(String('Test User'));
        await this.cardNumber.setValue(String('4111111111111111'));
        await this.cvcNumber.setValue(String('123'));
        await this.expiryMonth.setValue(String('12'));
        await this.expiryYear.setValue(String('2025'));
    }
    async ClickPayAndConfirm() {
        await this.payAndConfirmButton.waitForDisplayed({ timeout: 1000 });
        await this.payAndConfirmButton.click();
    }
    // async IsOrderSuccessful() {
    //     await this.orderSuccessMessage.waitForDisplayed();
    //     return await this.orderSuccessMessage.isDisplayed();
    // }
    async ClickDeleteAccount() {
        await this.deleteAccountButton.click();
    }
    async IsAccountDeleted() {
        await this.accountDeletedMessage.waitForDisplayed();
        return await this.accountDeletedMessage.isDisplayed();
    }
    async ClickContinueButton() {
        await this.continueButton.click();
    }

}
export default new PlaceOrderWhileCheckout();
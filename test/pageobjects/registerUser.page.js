class RegisterUser {
    get signupLoginButton() {
        return $('a[href="/login"]');
    }
    get homePageSlider() {
        return $('.carousel-inner');
    }
    get loggedInAsText() {
        return $('li:nth-child(10) a');
    }
    get deleteAccountButton() {
        return $('a[href="/delete_account"]');
    }
    get newUserSignupText() {
        return $('div.signup-form h2');
    }
    get signupNameField() {
        return $('input[data-qa="signup-name"]');
    }
    get signupEmailField() {
        return $('input[data-qa="signup-email"]');
    }
    get signupButton() {
        return $('button[data-qa="signup-button"]');
    }
    get enterAccountInfoText() {
        return $('div.login-form h2');
    }
    get titleMrRadio() {
        return $('#id_gender1');
    }
    get titleMrsRadio() {
        return $('#id_gender2');
    }
    get nameField() {
        return $('#name');
    }
    get emailField() {
        return $('#email');
    }
    get passwordField() {
        return $('#password');
    }
    get dayDropdown() {
        return $('#days');
    }
    get monthDropdown() {
        return $('#months');
    }
    get yearDropdown() {
        return $('#years');
    }
    get newsletterCheckbox() {
        return $('#newsletter');
    }
    get specialOffersCheckbox() {
        return $('#optin');
    }
    get firstNameField() {
        return $('#first_name');
    }
    get lastNameField() {
        return $('#last_name');
    }
    get companyField() {
        return $('#company');
    }
    get addressField() {
        return $('#address1');
    }
    get address2Field() {
        return $('#address2');
    }
    get countryDropdown() {
        return $('#country');
    }
    get stateField() {
        return $('#state');
    }
    get cityField() {
        return $('#city');
    }
    get zipcodeField() {
        return $('#zipcode');
    }
    get mobileNumberField() {
        return $('#mobile_number');
    }
    get createAccountButton() {
        return $('button[data-qa="create-account"]');
    }
    get accountCreatedText() {
        return $('h2[data-qa="account-created"]');
    }
    get continueButton() {
        return $('a[data-qa="continue-button"]');
    }
    get accountDeletedText() {
        return $('h2[data-qa="account-deleted"]');
    }
    async verifyHomePageVisible() {
        await this.homePageSlider.waitForDisplayed();
        return await this.homePageSlider.isDisplayed();
    }
    async clickSignupLogin() {
        await this.signupLoginButton.click();
    }
    async verifyNewUserSignupVisible() {
        await this.newUserSignupText.waitForDisplayed();
        return await this.newUserSignupText.isDisplayed();
    }
    async enterSignupDetails(name, email) {
        await this.signupNameField.setValue(name);
        await this.signupEmailField.setValue(email);
    }
    async clickSignupButton() {
        await this.signupButton.click();
    }
    async verifyEnterAccountInfoVisible() {
        await this.enterAccountInfoText.waitForDisplayed();
        return await this.enterAccountInfoText.isDisplayed();
    }
    async fillAccountInformation() {
        await this.titleMrRadio.click();
        await this.passwordField.setValue('Pass@word1');
        await this.dayDropdown.selectByVisibleText('10');
        await this.monthDropdown.selectByVisibleText('October');
        await this.yearDropdown.selectByVisibleText('1995');
    }
    async selectNewsletterCheckbox() {
        await this.newsletterCheckbox.click();
    }
    async selectSpecialOffersCheckbox() {
        await this.specialOffersCheckbox.click();
    }
    async fillAddressInformation() {
        await this.firstNameField.setValue('John');
        await this.lastNameField.setValue('Doe');
        await this.companyField.setValue('Test Company');
        await this.addressField.setValue('123 Test Street');
        await this.address2Field.setValue('Apartment 4B');
        await this.countryDropdown.selectByVisibleText('United States');
        await this.stateField.setValue('California');
        await this.cityField.setValue('Los Angeles');
        await this.zipcodeField.setValue('90210');
        await this.mobileNumberField.setValue('+1234567890');
    }
    async clickCreateAccount() {
        await this.createAccountButton.click();
    }
    async verifyAccountCreated() {
        await this.accountCreatedText.waitForDisplayed();
        return await this.accountCreatedText.isDisplayed();
    }
    async clickContinue() {
        await this.continueButton.click();
    }
    async verifyLoggedInAsUser(username) {
        await this.loggedInAsText.waitForDisplayed();
        return (await this.loggedInAsText.getText()).includes(username);
    }
    async clickDeleteAccount() {
        await this.deleteAccountButton.click();
    }
    async verifyAccountDeleted() {
        await this.accountDeletedText.waitForDisplayed();
        return await this.accountDeletedText.isDisplayed();
    }
}
export default new RegisterUser();
// ENV=main npx wdio --spec ./test/specs/elements.test.js

import Internet from "../pageobjects/internet.pages";

describe("Simple Internet Tests", () => {
    it("should get page title", async () => {
        await browser.url(`${browser.options.baseUrl}`)
        assert.equal(await Internet.GetTitle(), "The Internet");
    });
    it("should click A/B Testing link", async () => {
        await Internet.ClickABTestingLink();
        assert.equal((await browser.getUrl()).includes("abtest"), true);
    });
    it("should get A/B Testing heading", async () => {
        assert.equal(await Internet.GetABTestingHeading(), "A/B Test Control");
    });
    it("should interact with checkboxes", async () => {
        await browser.url(`${browser.options.baseUrl}`)
        await Internet.ClickCheckboxesLink();
        await browser.url(`${browser.options.baseUrl}/checkboxes`)
        await Internet.ClickCheckbox(1);
        await Internet.ClickCheckbox(1);
    });
    it("should login with valid credentials", async () => {
        await browser.url('https://the-internet.herokuapp.com/login')
        await Internet.Login("tomsmith", "SuperSecretPassword!");
        assert.equal((await browser.getUrl()).includes("secure"), true);
        assert.equal((await Internet.GetFlashMessage()).includes("You logged into a secure area!"), true);
    });
    it("should login with invalid credentials", async () => {
        await browser.url('https://the-internet.herokuapp.com/login')
        await Internet.Login("invaliduser", "invalidpass");
        assert.equal((await Internet.GetFlashMessage()).includes("Your username is invalid!"), true);
    });
});
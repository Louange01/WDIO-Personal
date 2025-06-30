class Dropdown {

    get dropdownMenu() {
        return $('#dropdown')
    }
    get dropdownMenuOption1() {
        return $('//option[contains(text(), "Option 1")]')
    }
    get dropdownMenuOption2() {
        return $('#dropdown option:nth-child(3)')
    }
    async clickDropdownMenu() {
        await this.dropdownMenu.waitForDisplayed()
        await this.dropdownMenu.click()
    }
    async clickDropdownMenuOption1() {
        await this.dropdownMenuOption1.waitForDisplayed()
        await this.dropdownMenuOption1.click()
    }
    async selectOptionByText(text) {
        await this.dropdownMenu.waitForDisplayed();
        await this.dropdownMenu.selectByVisibleText(text);
    }
}
export default new Dropdown();

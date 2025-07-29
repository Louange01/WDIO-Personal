//ENV=main npx wdio --spec ./test/specs/dropdown.test.js

import Dropdown from "../pageobjects/dropdown.page"

describe('Dropdown menue', () => {
    it('should select option1 from the dropdown ', async () => {
        await browser.url(`${browser.options.baseUrl}/dropdown`)
        await Dropdown.clickDropdownMenu()
        await Dropdown.clickDropdownMenuOption1()
        assert.equal(Dropdown.dropdownMenuOption1.isSelected(), true)
    })
})
describe.only('Dropdown handling with selectByVisibleText ', () => {
    it('should select dropdown by visible text', async () => {
        await browser.url(`${browser.options.baseUrl}/dropdown`);
        await Dropdown.selectOptionByText('Option 1');
        assert.equal(await Dropdown.dropdownMenuOption1.isSelected(), true);
    });
    it('should select dropdown by visible text', async () => {
        await Dropdown.selectOptionByText('Option 2');
        assert.equal(await Dropdown.dropdownMenuOption2.isSelected(), true);
    });
});


import { assert } from "chai";
import VerifyAllProducts from "../pageobjects/verifyAllProducts.page";


describe('Verify All Products and product detail page', () => {
    it('Should confirm homepage and Click on Products button', async () => {
        browser.url(`${browser.options.baseUrl}`)
        await VerifyAllProducts.ClickProductButton()
    })
    it('Should Verify user is navigated to ALL PRODUCTS page successfully', async () => {
        browser.url('https://automationexercise.com/products')
        await VerifyAllProducts.VerifyAllProductsPageVisible();
        assert.equal(await VerifyAllProducts.VerifyAllProductsPageVisible(), 'ALL PRODUCTS');
    })
    it('Should show the products list is visible and Click on View Product of first product', async () => {
        await VerifyAllProducts.VerifyProductsListVisible();
        await VerifyAllProducts.ClickFirstProductViewButton();
    })
})
describe.only('Verify product detail page', () => {
    it('Should User is landed to product detail page', async () => {
        browser.url('https://automationexercise.com/product_details/1')
    })
    it('Should Verify that detail is visible: product name, category, price, availability, condition, brand', async () => {
        // assert.equal(await VerifyAllProducts.VerifyAllProductDetails(), true)
        await VerifyAllProducts.VerifyAllProductDetails()
        assert.equal(await VerifyAllProducts.VerifyAllProductDetails(), 'Blue Top')
        // assert.equal(await VerifyAllProducts.productName.getText(), 'Blue Top')
        // assert.equal(await VerifyAllProducts.categoryInfo.getText(),'Category: Women > Tops')
    })
})
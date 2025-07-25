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
describe('Verify product detail page', () => {
    it('Should User is landed to product detail page', async () => {
        browser.url('https://automationexercise.com/product_details/1')
    })
    it('Should Verify that detail is visible: product name, category, price, availability, condition, brand', async () => {
        const productTexts = await VerifyAllProducts.GetAllProductDetailsArray();
        console.log(productTexts);
        assert.equal(productTexts[0], 'Blue Top');
        assert.equal(productTexts[1], 'Category: Women > Tops');
        assert.equal(productTexts[2], 'Rs. 500');
        assert.equal(productTexts[3], 'Brand:');
        assert.equal(productTexts[4], 'Condition:');
        assert.equal(productTexts[5], 'Availability:');
    })
})
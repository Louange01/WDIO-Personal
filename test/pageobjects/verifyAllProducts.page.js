class VerifyAllProducts {
  get productsButton() { return $('a[href="/products"]'); }
  get allProductsTitle() { return $('.title.text-center'); }
  get productsList() { return $('.features_items'); }
  get allProducts() { return $$('.productinfo'); }
  get firstProductViewButton() { return $('.choose a[href*="/product_details"]'); }
  get homePageSlider() { return $(".carousel-inner"); }

  async ClickProductButton() {
    await this.productsButton.waitForDisplayed()
    await this.productsButton.click()
  }
  async VerifyAllProductsPageVisible() {
    await this.allProductsTitle.waitForDisplayed();
    await this.allProductsTitle.isDisplayed();
    return await this.allProductsTitle.getText();
  }
  async VerifyProductsListVisible() {
    await this.productsList.waitForDisplayed();
    await this.productsList.isDisplayed();
  }
  async ClickFirstProductViewButton() {
    await this.firstProductViewButton.waitForDisplayed();
    await this.firstProductViewButton.click();
  }

  get productName() { return $('.product-information h2'); }
  get categoryInfo() { return $("//p[contains(text(),'Category: Women > Tops')]"); }
  get priceInfo() { return $("//span[contains(text(),'Rs. 500')]"); }
  get availabilityInfo() { return $("//b[contains(text(),'Availability:')]"); }
  get conditionInfo() { return $("//b[contains(text(),'Condition:')]"); }
  get brandInfo() { return $("//b[contains(text(),'Brand:')]"); }
  get productImage() { return $('.product-details .view-product img'); }

  async VerifyProductName() {
    await this.productName.waitForDisplayed();
    await this.productName.isDisplayed();
    return await this.productName.getText()

  }
  async VerifyCategory() {
    await this.categoryInfo.waitForDisplayed();
    return await this.categoryInfo.isDisplayed();
    // await this.categoryInfo.getText();
  }
  async VerifyPrice() {
    await this.priceInfo.waitForDisplayed();
    return await this.priceInfo.isDisplayed();
    // await this.priceInfo.getText();
  }
  async VerifyAvailability() {
    await this.availabilityInfo.waitForDisplayed();
    return this.availabilityInfo.isDisplayed();
    // await this.availabilityInfo.getText();

  }
  async VerifyCondition() {
    await this.conditionInfo.waitForDisplayed();
    return await this.conditionInfo.isDisplayed();
    // await this.conditionInfo.getText();
  }
  async VerifyBrand() {
    await this.brandInfo.waitForDisplayed();
    return await this.brandInfo.isDisplayed();
    // await this.brandInfo.getText();
  }
  async VerifyProductImage() {
    await this.productImage.waitForDisplayed();
    return await this.productImage.isDisplayed();
    // return this.productImage.getText();
  }
  async VerifyAllProductDetails() {
    await this.VerifyProductName();
    await this.VerifyCategory();
    await this.VerifyPrice();
    await this.VerifyAvailability();
    await this.VerifyCondition();
    await this.VerifyBrand();
    await this.VerifyProductImage();
    console.log('All product details verified successfully!');
  }
}
export default new VerifyAllProducts();
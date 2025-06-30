import internetPages from "../pageobjects/internet.pages";

// describe("Interacting with elements", function () {
//     it("get Text for element", () => {
//         browser.url('/')
//         let text = $("h2").getText()
//         console.log(text)
//     })
// });

// describe("Interacting with elements", function () {
//     it("Get text for element", () => {
//         browser.url('/')
//         let text = $("#page-footer").getText()
//         console.log(text)
//     })
// })

// const internetPages = require("../pages/internet.page")
describe("Interacting with elements", function () {
    before(async () => {
        it("Get text for element", async () => {
            await browser.url('https://the-internet.herokuapp.com/')
        });
        let text = $("//*[@id='page-footer']").getText()
        console.log(text)
        internetPages.getLiText()
        internetPages.getSpecificElementText(3)
    })
})

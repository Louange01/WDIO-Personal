// internet.pages.js
class Internet {
    get pageHeader() { return $('h1.heading') }
    get subHeading() { return $('h2') }
    get pageFooter() { return $('#page-footer') }
    get parent() { return $('ul') }
    get childElements() { return this.parent.$$('li') }
    specificChildElement(index) { return this.parent.$(`li:nth-child(${index})`) }

    getLiText() {
        this.childElements.forEach((element) => {
            console.log(element.getText())
        })
    }

    getSpecificElementText(index) {
        console.log(this.specificChildElement(index).getText())
    }

}
export default new Internet()
// class Internet {  // Changed to uppercase 'I'
//     get pageHeader() { return $('h1.heading') }
//     get subHeading() { return $('h2') }
//     get pageFooter() { return $('#page-footer') }
//     get parent() { return $('ul') }
//     get childElements() { return this.parent.$$('li') }
//     getLiText() {
//         this.childElements.filter((element) => {
//             console.log(element.getText())
//         })
//     }
// }
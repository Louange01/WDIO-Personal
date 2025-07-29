//ENV=main npx wdio --spec ./test/specs/dragAndDrop.test.js

import Dropping from "../pageobjects/dragAndDrop.page";

describe('drag and dropping', () => {
    it('should drag box a to box b', async () => {
        browser.url(`${browser.options.baseUrl}/drag_and_drop`);
        await Dropping.dragboxAToBoxB()
        await browser.pause(2000);
        assert.equal(await Dropping.boxBHeader.getText(), 'A')
    })
})
describe('drag and drop 2nd example', () => {
    it('should drag', async () => {
        browser.url('https://crossbrowsertesting.github.io/drag-and-drop.html');
        await Dropping.dragDraggableToDroppable()
        await browser.pause(3000)
        assert.equal(await Dropping.droppableParagraph.getText(), 'Dropped!')
    })
})
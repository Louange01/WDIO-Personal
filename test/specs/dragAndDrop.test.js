import Dropping from "../pageobjects/dragAndDrop.page";
import assert from "assert";

describe('drag and dropping', () => {
    it('should drag box a to box b', async () => {
        browser.url('https://the-internet.herokuapp.com/drag_and_drop');
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
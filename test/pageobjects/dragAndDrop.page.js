class Dropping {
    get boxA() {
        return $('[id="column-a"]')
    }
    get boxB() {
        return $('[id="column-b"]')
    }
    get boxAHeader() {
        return $('#column-a header')
    }
    get boxBHeader() {
        return $('#column-b header')
    }
    get draggable() { return $('#draggable') }
    get droppable() { return $('#droppable') }
    get droppableParagraph() { return $('#droppable p') }

    async dragDraggableToDroppable() {
        await this.draggable.waitForDisplayed()
        await this.draggable.dragAndDrop(this.droppable)
    }
    async dragboxAToBoxB() {
        await this.boxA.waitForDisplayed()
        await this.boxA.dragAndDrop(this.boxB)
    }
}
export default new Dropping();
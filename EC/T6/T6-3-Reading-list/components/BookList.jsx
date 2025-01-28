class BookList{
    constructor(readBooks, notReadBooks, nextBook, currentBook, lastBook){
        this.readBooks = readBooks
        this.notReadBooks = notReadBooks
        this.nextBook = nextBook
        this.currentBook = currentBook
        this.lastBook = lastBook
        this.allBooks = []
    }

    finishCurrentBook(){
        this.currentBook.read = true

        const noFormatDate = Date.now()
        const currentDate = new Date(noFormatDate)
        this.currentBook.readDate = currentDate.toDateString()

        this.lastBook = this.currentBook
        this.currentBook = this.nextBook

        this.nextBook.read = false
    }
}

export const bookList = new BookList(0, 0, null, null, null)
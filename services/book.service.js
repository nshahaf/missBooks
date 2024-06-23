import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'bookDB'
_createBooks()

export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
    getNextBookId,
    getFilterBy,
    setFilterBy,
    getDefaultFilter,
}

function query(filterBy = null) {//Need update
    return storageService.query(BOOK_KEY)
}

function get(bookId) {//updated
    return storageService.get(BOOK_KEY, bookId)
}

function remove(bookId) {//updated
    return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {//updated
    if (book.id) {
        return storageService.put(BOOK_KEY, book)
    } else {
        return storageService.post(BOOK_KEY, book)
    }
}

function getEmptyBook() {//updated
    return {
        id: '',
        title: '',
        subtitle: '',
        authors: [],
        publishedDate: null,
        description: '',
        pageCount: null,
        categories: [],
        language: '',
        listPrice:
        {
            amount: null,
            currencyCode: 'USD',
            isOnSale: false
        }
    }
}

function getDefaultFilter() {
    return {title:'', price: 0}
}

function getFilterBy() {//updated
    return { ...gFilterBy }
}

function setFilterBy(filterBy = {}) {//updated
    if (filterBy.txt !== undefined) gFilterBy.txt = filterBy.txt
    return gFilterBy
}

function getNextBookId(bookId) {//updated
    return storageService.query(BOOK_KEY)
        .then(books => {
            let nextBookIdx = books.findIndex(book => book.id === bookId) + 1
            if (nextBookIdx === books.length) nextBookIdx = 0
            return books[nextBookIdx].id
        })
}

function _createBooks() {//need update
    let books = utilService.loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        books = []
        books.push(_createBook('he', 'USD',false))
        books.push(_createBook('en', 'ILS',false))
        books.push(_createBook('he', 'EUR',true))
        utilService.saveToStorage(BOOK_KEY, books)
    }
}

function _createBook(lang,code,isOnSale) {//Need update
    const book = getEmptyBook(vendor, maxSpeed)
    book.id = utilService.makeId()
    book.title = utilService.makeLorem(2)
    book.subtitle = utilService.makeLorem(5)
    book.authors = utilService.makeLorem(3).split(' ')
    book.publishedDate = getRandomIntInclusive(1950, 2024)
    book.description = utilService.makeLorem(5)
    book.pageCount = utilService.getRandomIntInclusive(150, 600)
    book.categories = ["Computers","Hack"]
    book.language = lang
    book.listPrice.amount = utilService.getRandomIntInclusive(20, 250)
    book.listPrice.currencyCode = code
    book.listPrice.isOnSale = isOnSale

    return book
}
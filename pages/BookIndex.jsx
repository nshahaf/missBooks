//renders the filter and the list
import { bookService } from "../services/book.service.js"
import { BookList } from "../cmps/BookList.jsx"
import {BookDetails} from "../pages/BookDetails.jsx"  
import { BookFilter } from "../cmps/BookFilter.jsx"

const { useEffect, useState } = React

export function BookIndex() {
    const [books, setBooks] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
    const [selectedBookId, setSelectedBookId] = useState(null)

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        console.log('loadBooks')
        bookService.query(filterBy)
            .then(books => setBooks(books))
            .then(() => console.log('books:', books))
            .catch(err => { console.log('Had issues with:', err) })
    }

    function onRemoveBook(bookId) {
        console.log('remove Book')
        bookService.remove(bookId)
            .then(() => {
                setBooks(books => books.filter(book => book.id !== bookId))
            })
            .catch(err => { console.log('Had issues with:', err) })
    }

    function onSetFilter(filterBy) {
        console.log('setFilter')
        setFilterBy({ ...filterBy })
    }

    function onSelectBookId(bookId) {
        setSelectedBookId(bookId)
    }


    if (!books) return <div>Loading...</div>
    return (
        <section className="book-index">
            {!selectedBookId &&
                <React.Fragment>
                    <BookFilter filterBy={filterBy} onSetFilter={onSetFilter}/>
                    <BookList
                        books={books}
                        onRemoveBook={onRemoveBook}
                        onSelectBookId={onSelectBookId}
                    />

                </React.Fragment>
            }
            {selectedBookId && <BookDetails onBack={() => setSelectedBookId(null)} bookId={selectedBookId} />}
        </section>
    )
}
//renders the filter and the list
const { Link } = ReactRouterDOM
import { BookFilter } from "../cmps/BookFilter.jsx"
import { BookList } from "../cmps/BookList.jsx"
import { bookService } from "../services/book.service.js"
import {BookDetails} from "../pages/BookDetails.jsx"  

const { useEffect, useState } = React

export function BookIndex() {
    const [books, setBooks] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy)
            .then(books => setBooks(books))
            .catch(err => { console.log('Had issues with:', err) })
    }

    function onRemoveBook(bookId) {//add user msg on success and on failure
        bookService.remove(bookId)
            .then(() => {
                setBooks(books => books.filter(book => book.id !== bookId))
            })
            .catch(err => { console.log('Had issues with:', err) })
    }

    function onSetFilter(filterBy) {
        setFilterBy({ ...filterBy })
    }


    if (!books) return <div>Loading...</div>

    return (
        <section className="book-index">
                    <button><Link to="/book/edit">Add Book</Link></button>
                    <BookFilter filterBy={filterBy} onSetFilter={onSetFilter}/>
                    <BookList
                        books={books}
                        onRemoveBook={onRemoveBook}
                    />
        </section>
    )
}
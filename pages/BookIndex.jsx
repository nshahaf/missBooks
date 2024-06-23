//renders the filter and the list
import { bookService } from "../services/book.service.js"
import { BookList } from "../cmps/BookList.jsx"
// import { BookFilter } from "../cmps/BookFilter.jsx"
// import {BookDetails} from "../cmps/BookDetails.jsx"   

const {useEffect,useState} = React

export function BookIndex() {
    const [books, setBooks] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        console.log('loadBooks')
        bookService.query(filterBy)
        .then(books => setBooks(books))
        .then(() => console.log('books:',books))
        .catch(err => {console.log('Had issues with:', err)})
    }

    function onRemoveBook(bookId) {
        console.log('remove Book')
        bookService.remove(bookId)
            .then(()=> {
                setBooks(books => books.filter(book => book.id !== bookId))
            })
            .catch(err => {console.log('Had issues with:', err)})
    }

    function onSetFilter(filterBy) {
        console.log('setFilter')
        setFilterBy({...filterBy})
    }


    if(!books) return <div>Loading...</div>
    return (
        <section className="book-index">
            <BookList books={books} />
        </section>
    )
}
// a preview with basic book details
import { bookService } from "../services/book.service.js"
import {  } from "../assets/img/";
const { useEffect, useState } = React

export function BookDetails({ bookId, onBack }) {

    const [book, setBook] = useState(null)

    useEffect(() => {
        bookService.get(bookId)
            .then(book => setBook(book))
    }, [])

    if (!book) return <div>Loading...</div>

    return (
        <div className="book-details">
            <h2>{book.title}</h2>
            <h4>{book.subtitle}</h4>
            <img src={`../assets/img/${book.thumbnail}`} alt="" />
            <h5><span>Description: </span>{book.description}</h5>
            <h5><span>Authors: </span> {book.authors.join(' ')}</h5>
            <h5><span>Published Date: </span> {book.publishedDate}</h5>
            <h5><span>Page Count: </span> {book.pageCount}</h5>
            <h5><span>Categories: </span> {book.categories.join(' ')}</h5>
            <h5><span>Language: </span> {book.language}</h5>
            <h5><span>List Price: </span> {book.listPrice.amount} {book.listPrice.currencyCode}</h5>
            <button onClick={onBack}>Back</button>
        </div>
    )
}
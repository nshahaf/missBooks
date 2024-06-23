// Renders a list of <BookPreview> components
import { BookPreview } from './BookPreview.jsx'

export function BookList({ books, onRemoveBook,onSelectBookId}) {

  return (
    <ul className='book-list'>
      {books.map((book) =>
        <li key={book.id} className="book-preview">
          <BookPreview book={book} />
          <section>
            <button onClick={() => onRemoveBook(book.id)}>Remove</button>
            <button onClick={() => onSelectBookId(book.id)}>Details</button>
          </section>
        </li>
      )}
    </ul>
  )
}




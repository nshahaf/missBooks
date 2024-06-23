// Renders a list of <BookPreview> components
import { BookPreview } from './BookPreview.jsx'

export function BookList({ books }) {

  return (
    <ul className='book-list'>
      {books.map((book) =>
        <li key={book.id} className="book-preview">
          <BookPreview book={book} />
        </li>
      )}
    </ul>
  )
}


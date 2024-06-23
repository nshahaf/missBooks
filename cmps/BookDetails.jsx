//full details of a specific book
//recive a book and return a full details of the book

export function BookDetails({ book }) { 
  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Year: {book.year}</p>
      <p>Genre: {book.genre}</p>
    </div>
  )
}
// a preview with basic book details

export function BookPreview({ book }) {

    const { title, subtitle, authors, publishedDate, description, pageCount, categories, language, listPrice: { amount, currencyCode } } = book

    return (
        <React.Fragment>
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
            <h5><span>Description: </span>{description}</h5>
            <h5><span>Authors: </span> {authors.join(' ')}</h5>
            <h5><span>Published Date: </span> {publishedDate}</h5>
            <h5><span>Page Count: </span> {pageCount}</h5>
            <h5><span>Categories: </span> {categories.join(' ')}</h5>
            <h5><span>Language: </span> {language}</h5>
            <h5><span>List Price: </span> {amount} {currencyCode}</h5>
        </React.Fragment>
    )
}
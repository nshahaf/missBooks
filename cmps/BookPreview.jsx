
export function BookPreview({ book }) {

    const { vendor, speed } = book
    return (
        <article className="book-preview">
            <h2>Vendor: {vendor}</h2>
            <h4>Car Speed: {speed}</h4>
            <img src={`../assets/img/${book.vendor}.png`} alt="" />
        </article>
    )
}
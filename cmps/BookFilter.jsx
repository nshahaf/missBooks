// allow the user to filter the book list by name & price

export function BookListFilter({ filterBooks }) {
    return (
        <div>
            <input
                type="text"
                placeholder="Filter by name"
                onChange={(ev) => filterBooks('name', ev.target.value)}
            />
            <input
                type="number"
                placeholder="Filter by price"
                onChange={(ev) => filterBooks('price', ev.target.value)}
            />
        </div>
    )
}
// allow the user to filter the book list by name & price

const { useState, useEffect } = React

export function BookFilter({ filterBy, onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break;

            case 'checkbox':
                value = target.checked
                break

            default:
                break;
        }

        setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }

    const { title, price } = filterByToEdit

    return (
        <div className="book-filter">
            <form onSubmit={onSetFilter}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    placeholder="Filter by name"
                    name="title"
                    id="title"
                    onChange={(ev) => filterBooks('name', ev.target.value)}
                />
                <input
                    type="number"
                    placeholder="Filter by price"
                    onChange={(ev) => filterBooks('price', ev.target.value)}
                />
            </form>
        </div>
    )
}
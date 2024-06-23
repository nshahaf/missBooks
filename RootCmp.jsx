import { About } from "./pages/About.jsx";
import { Home } from "./pages/Home.jsx";
import { BookIndex } from "./pages/BookIndex.jsx";

const { useState } = React

export function App() {
    const [page, setPage] = useState('home')

    return (
        <section className="app">
            <header className="app-header">
                    <nav className="app-nav">
                        <a onClick={() => setPage('home')} href="#">Home</a>
                        <a onClick={() => setPage('about')} href="#">About</a>
                        <a onClick={() => setPage('book')} href="#">Books</a>
                    </nav>
            </header>
            <main class="container">
                {page === 'home' && <Home />}
                {page === 'about' && <About />}
                {page === 'car' && <BookIndex />}
            </main>
        </section>
    )
}

    
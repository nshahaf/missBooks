const Router = ReactRouterDom.HashRouter
const { Route, Routes, Navigate } = ReactRouterDOM

import { About } from "./pages/About.jsx";
import { BookIndex } from "./pages/BookIndex.jsx";
import { Home } from "./pages/Home.jsx";

const { useState } = React

export function App() {

    const [page, setPage] = useState('book')

    return (
        <section className="app-container">
            <header className="app-header">
                    <nav className="app-nav">
                        <a onClick={() => setPage('home')} href="#">Home</a>
                        <a onClick={() => setPage('about')} href="#">About</a>
                        <a onClick={() => setPage('book')} href="#">Books</a>
                    </nav>
            </header>
            
            <main className="container">
                {page === 'home' && <Home />}
                {page === 'about' && <About />}
                {page === 'book' && <BookIndex />}
            </main>
        </section>
    )
}

    
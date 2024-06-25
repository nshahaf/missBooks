const Router = ReactRouterDOM.HashRouter
const { Route, Routes, Navigate } = ReactRouterDOM

import { AppHeader } from "./cmps/AppHeader.jsx"
import { Home } from "./pages/Home.jsx"
import { About } from "./pages/About.jsx"
import { BookIndex } from "./pages/BookIndex.jsx"
import { BookDetails } from "./pages/BookDetails.jsx"
import { BookEdit } from "./pages/BookEdit.jsx"
import { NotFound } from "./cmps/NotFound.jsx"
import { UserMsg } from "./cmps/UserMsg.jsx"
import { AddReview } from "./cmps/AddReview.jsx"
import { Dashboard } from "./pages/Dashboard.jsx"


export function App() {

    return (

        <Router>
            <section className="app">
                < AppHeader />
                <main className="container">
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/book" element={<BookIndex />} />
                        <Route path="/Dashboard" element={<Dashboard/>} />
                        <Route path="/book/:bookId" element={<BookDetails />} />
                            <Route path="/book/:bookId/review" element={<AddReview />}/>
                        <Route path="/book/edit" element={<BookEdit />} />
                        <Route path="/book/edit/:bookId" element={<BookEdit />} />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <UserMsg/>
            </section >
        </Router>
    )
}


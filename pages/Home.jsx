//a simple welcome page
import { SimpleWelcome } from '../cmps/SimpleWelcome.jsx'

export function Home() {
    return (
        <section className='home-page'>
            <h2>Home Page</h2>
            <SimpleWelcome />
        </section>
    )
}

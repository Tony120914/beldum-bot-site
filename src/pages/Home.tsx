import Navbar from '../components/Navbar.jsx';
import Introductions from '../components/home/Introductions.jsx';

export default function Home() {
    return (
    <>
        <header className='sticky-top'>
            <Navbar />
        </header>
        <div className='container-fluid mt-3'>
            <main>
                <Introductions />
            </main>
        </div>
    </>
    )
}

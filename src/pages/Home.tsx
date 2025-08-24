import Navbar from '../components/Navbar';
import Introductions from '../components/home/Introductions';

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

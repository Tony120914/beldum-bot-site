import Navbar from '../components/Navbar.jsx';
import Commands from '../components/docs/Commands.jsx';

export default function Docs() {
    return (
    <>
        <header className='sticky-top'>
            <Navbar />
        </header>
        <div className='container-fluid mt-3'>
            <main>
                <Commands />
            </main>
        </div>
    </>
    )
}

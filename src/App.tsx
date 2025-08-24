import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
// import Commands from './components/Commands';
// import Footer from './components/Footer';

export default function App() {
    return (
    <>
        <header>
            <Navbar />
        </header>
        <div className='container-fluid mt-3'>
            <main>
                <Introduction />
                <h1 className='display-6 text-warning text-center' id='commands'>Commands</h1>
                {/* <Commands /> */}
                {/* <Footer /> */}
            </main>
        </div>
    </>
    )
}

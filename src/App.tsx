import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
// import Commands from './components/Commands';
// import Footer from './components/Footer';

export default function App() {
    return (
    <>
        <Navbar />
        <main>
            <div className='container mt-5'>
                <Introduction />
                <hr className='mb-5 mt-5'/>
                <h1 className='display-6 text-warning text-center' id='commands'>Commands</h1>
                {/* <Commands /> */}
                {/* <Footer /> */}
            </div>
        </main>
    </>
    )
}

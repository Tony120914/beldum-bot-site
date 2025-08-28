import Navbar from "../Navbar.js";
import Introductions from "./home/Introductions.js";


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

import Navbar from "../Navbar.js";
import Introduction from "./home/Introduction.js";
import Stats from "./home/Stats.js";

export default function Home() {
    return (
    <>
        <header className='sticky-top'>
            <Navbar />
        </header>
        <div className='container-fluid mt-3'>
            <main>
                <Introduction />
                <Stats />
            </main>
        </div>
    </>
    )
}

import Back from "../Back.js";
import Navbar from "../Navbar.js";
import Commands from "./docs/Commands.js";


export default function Docs() {
    return (
    <>
        <header className='sticky-top'>
            <Navbar back={<Back to='/'/>} />
        </header>
        <div className='container-fluid mt-3'>
            <main>
                <Commands />
            </main>
        </div>
    </>
    )
}

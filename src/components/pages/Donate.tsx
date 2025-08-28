import Back from "../Back.js";
import Navbar from "../Navbar.js";
import DonateOptions from "./donate/DonateOptions.js";


export default function Donate({ }) {
    return (
    <>
        <header className='sticky-top'>
            <Navbar back={<Back to='/'/>} />
        </header>
        <div className='container-fluid mt-3'>
            <main>
                <DonateOptions />
            </main>
        </div>
    </>
    );
}

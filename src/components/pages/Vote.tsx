import Back from "../Back.js";
import Navbar from "../Navbar.js";
import VoteOptions from "./vote/VoteOptions.js";


export default function Vote({ }) {
    return (
    <>
        <header className='sticky-top'>
            <Navbar back={<Back to='/'/>} />
        </header>
        <div className='container-fluid mt-3'>
            <main>
                <VoteOptions />
            </main>
        </div>
    </>
    );
}

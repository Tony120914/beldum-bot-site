import BackButton from "../BackButton.js";
import Navbar from "../Navbar.js";
import CommandsTable from "./docs/CommandsTable.js";

export default function Docs() {
    return (
    <>
        <header className='sticky-top'>
            <Navbar back={<BackButton to='/'/>} />
        </header>
        <div className='container-fluid mt-3'>
            <main>
                <CommandsTable />
            </main>
        </div>
    </>
    )
}

'use client';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Commands from './components/Commands';
import Footer from './components/Footer';

export default function Home() {

    // import bootstrap js
    // import bootstrap tooltips
    useEffect(()=>{
        async function importBootstrap() {
            const bootstrap = await import("bootstrap/dist/js/bootstrap");
            // import { Tooltip } from 'bootstrap/dist/js/bootstrap';
            const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
            const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
        }
        importBootstrap();
    },[])
    
    return (
        <>
            <Navbar />
            <main>
                <div className='container mt-5'>
                    <Introduction />
                    <hr className='mb-5 mt-5'/>
                    <h1 className='display-6 text-warning text-center' id='commands'>Commands</h1>
                    <Commands />
                    <Footer />
                </div>
            </main>
        </>
    )
}

'use client';
import { useState, useEffect } from 'react';

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
        </>
    )
}

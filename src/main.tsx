import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from "react-router";
import './scss/styles.scss'
import './css/styles.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import Home from './pages/Home.jsx';
import Docs from './pages/Docs.jsx';

const root = document.getElementById('root');
if (!root) throw new Error("root missing in index.html");
createRoot(root).render(
    <StrictMode>
        <HashRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='docs'>
                    <Route index element={<Docs />} />
                </Route>
            </Routes>
        </HashRouter>
    </StrictMode>,
)

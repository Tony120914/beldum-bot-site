import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './scss/styles.scss'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import App from './App.tsx'

const root = document.getElementById('root');
if (!root) throw new Error("root missing in index.html");
createRoot(root).render(
    <StrictMode>
        <App />
    </StrictMode>,
)

import { createHashRouter } from "react-router";
import Docs from "./components/pages/Docs.js";
import Donate from "./components/pages/Donate.js";
import Home from "./components/pages/Home.js";
import Vote from "./components/pages/Vote.js";



const hashRouter = createHashRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/docs',
        element: <Docs />
    },
    {
        path: '/donate',
        element: <Donate />
    },
    {
        path: '/vote',
        element: <Vote />
    },
]);

export default hashRouter;

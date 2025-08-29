import { createHashRouter } from "react-router";
import Home from "./components/pages/Home.js";
import Docs from "./components/pages/Docs.js";
import Support from "./components/pages/Support.js";

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
        path: '/support',
        element: <Support />
    }
]);

export default hashRouter;

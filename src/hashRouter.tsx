import { createHashRouter } from "react-router";
import Home from './pages/Home.jsx';
import Docs from './pages/Docs.jsx';

const hashRouter = createHashRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/docs',
        element: <Docs />
    },
]);

export default hashRouter;

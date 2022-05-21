import Main  from './pages/Main/Main'
import Applic  from './pages/Applic/Applic'
import { MAIN_ROUTE, APPLIC_ROUTE } from './utils/const'

export const PublicRoutes = [
    {
        Component: <Main/>,
        path: MAIN_ROUTE
    },
    {
        Component: <Applic/>,
        path: APPLIC_ROUTE
    }
];

export const ClientRoutes = [
    {
        Component: <Main/>,
        path: MAIN_ROUTE
    },
    {
        Component: <Applic/>,
        path: APPLIC_ROUTE
    }
];

export const WorkerRoutes = [
    {
        Component: <Main/>,
        path: MAIN_ROUTE
    }
];

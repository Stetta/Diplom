import Main  from './pages/Main/Main'
import Applic  from './pages/Applic/Applic'
import { MAIN_ROUTE, APPLIC_ROUTE, PROFILE_ROUTE } from './utils/const'
import Profile from './pages/Profile/Profile';

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
        Component: <Profile/>,
        path: PROFILE_ROUTE
    }
];

export const WorkerRoutes = [
    {
        Component: <Main/>,
        path: MAIN_ROUTE
    }
];

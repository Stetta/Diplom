import Main  from './pages/Main/Main'
import Applic  from './pages/Applic/Applic'
import { MAIN_ROUTE, APPLIC_ROUTE, PROFILE_ROUTE, APPLICTEXT_ROUTE, MYAPPLIC_ROUTE, CHAT_ROUTE, ADMINPROFILE_ROUTE, ADMINAPPLIC_ROUTE, CHART_ROUTE } from './utils/const'
import Profile from './pages/Profile/Profile';
import ApplicText from './pages/ApplicText/ApplicText';
import MyApplic from './pages/MyApplic/MyApplic';
import Chat from './pages/Chat/Chat';
import AdminProfile from './pages/AdminProfile/AdminProfile';
import AdminApplic from './pages/AdminApplic/AdminApplic';
import Chart from './pages/Chart/Chart';

export const PublicRoutes = [
    {
        Component: <Main/>,
        path: MAIN_ROUTE
    },
    {
        Component: <Applic/>,
        path: APPLIC_ROUTE
    },
    {
        Component: <ApplicText/>,
        path: APPLICTEXT_ROUTE
    }
];

export const ClientRoutes = [
    {
        Component: <Main/>,
        path: MAIN_ROUTE
    },
    {
        Component: <Profile/>,
        path: PROFILE_ROUTE
    },
    {
        Component: <ApplicText/>,
        path: APPLICTEXT_ROUTE
    },
    {
        Component: <MyApplic/>,
        path: MYAPPLIC_ROUTE
    },
    {
        Component: <Chat/>,
        path: CHAT_ROUTE
    }
];

export const WorkerRoutes = [
    {
        Component: <Main/>,
        path: MAIN_ROUTE
    },
    {
        Component: <AdminProfile/>,
        path: ADMINPROFILE_ROUTE
    },
    {
        Component: <AdminApplic/>,
        path: ADMINAPPLIC_ROUTE
    },
    {
        Component: <Chart/>,
        path: CHART_ROUTE
    },
    {
        Component: <ApplicText/>,
        path: APPLICTEXT_ROUTE
    },
    {
        Component: <MyApplic/>,
        path: MYAPPLIC_ROUTE
    },
    {
        Component: <Chat/>,
        path: CHAT_ROUTE
    }
];

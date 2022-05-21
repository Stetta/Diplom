import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Applic from "../pages/Applic/Applic";
import Main from "../pages/Main/Main";
import { ClientRoutes, PublicRoutes } from "../routes";

const AppRoute = (isAuth) => {
    return (
        // <BrowserRouter>
        //         <Main/>
        //         <Applic/>
        // </BrowserRouter>
        <Routes>
            {PublicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={Component}/>
            ))}
        </Routes>
    );
    // return (
    //     <Routes>
    //         {PublicRoutes.map(({ path, Component }) => (
    //             <Route key={path} path={path} element={Component}/>
    //         ))}
    //     </Routes>
    // );
};
export default AppRoute;
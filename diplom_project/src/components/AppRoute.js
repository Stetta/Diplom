import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Applic from "../pages/Applic/Applic";
import Main from "../pages/Main/Main";
import { ClientRoutes, PublicRoutes, WorkerRoutes } from "../routes";

const AppRoute = (isAuth) => {
  if (isAuth.isAuth) {
    if (JSON.parse(localStorage.getItem("clientData")).IdRole) {
      return (
        <Routes>
          {WorkerRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={Component} />
          ))}
          <Route path="*" element={<Navigate to="/adminprofile" replace />}></Route>
        </Routes>
      );
    }
    return (
      <Routes>
        {ClientRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component} />
        ))}
        <Route path="*" element={<Navigate to="/profile" replace />}></Route>
      </Routes>
    );
  }
  return (
    <Routes>
      {PublicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} />
      ))}
    </Routes>
  );
};
export default AppRoute;

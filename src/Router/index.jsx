import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../Components/ProtectedRoute";
import { useAuthContext } from "../Context/authContext";
import { Spinner } from "../Global/style";

const Login = lazy(() => import("../Pages/Login"));
const Signup = lazy(() => import( "../Pages/Signup"));
const Home = lazy(() => import("../Pages/Home"));

export const PATHS = {
  LOGIN: "/login",
  SIGNUP: "/signup",
  HOME: "/home",
};

const Router = () => {
  const { isAuthorized } = useAuthContext();
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route index element={<Navigate to={PATHS.LOGIN} />} />

        <Route
          path={PATHS.LOGIN} 
          element={isAuthorized ? <Navigate to={PATHS.HOME} /> : <Login />}
        />
        <Route
          path={PATHS.SIGNUP} 
          element={isAuthorized ? <Navigate to={PATHS.HOME} /> : <Signup />}
        />

        <Route path="/" element={<ProtectedRoute />}>
          <Route path={PATHS.HOME} element={<Home />} />
        </Route>
        <Route path="/*" element={<h3>Page not Found</h3>} />
      </Routes>
    </Suspense>
  );
};

export default Router;
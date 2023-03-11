import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../Context/authContext";
import { PATHS } from "../../Router";

export default function ProtectedRoute() {
  const { isAuthorized } = useAuthContext();

  return <>{isAuthorized ? <Outlet /> : <Navigate to={PATHS.LOGIN} />}</>;
}

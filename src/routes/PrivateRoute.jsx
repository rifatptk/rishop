import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (!isAuth) return <Navigate to="/login" replace />;

  return children;
}

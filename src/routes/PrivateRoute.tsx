import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const isAuth = localStorage.getItem("isAuthenticated") === "true";

  return isAuth ? <Outlet /> : <Navigate to={"/signup"} />;
};

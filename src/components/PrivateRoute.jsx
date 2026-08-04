import { useAuth } from "../redux/useAuth";
import { Navigate } from "react-router";

export const PrivateRoute = ({ component, navigateTo = "/" }) => {
  const { isRefreshing, isLoggedIn } = useAuth();

  const shouldUserRedirect = !isLoggedIn && !isRefreshing;

  return shouldUserRedirect ? <Navigate to={navigateTo} /> : component;
};
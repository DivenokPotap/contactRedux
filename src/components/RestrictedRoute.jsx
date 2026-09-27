import { Navigate } from "react-router";
import { useAuth } from "../redux/Auth/useAuth";

export const RestrictedRoute = ({ component, navigateTo = "/" }) => {
  const { isLoggedIn, isRefreshing } = useAuth();

  if (isRefreshing) {
    return <div>Loading...</div>
  }

  return isLoggedIn ? <Navigate to={navigateTo} /> : component;
};
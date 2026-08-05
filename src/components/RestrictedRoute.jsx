import { Navigate } from "react-router";
import { useAuth } from "../redux/Auth/useAuth";

export const RestrictedRoute = ({ component, navigateTo = "/" }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={navigateTo} /> : component;
};
import { useAuth } from "../redux/Auth/useAuth";
import { Navigate } from "react-router";

export const PrivateRoute = ({ component, navigateTo = "/" }) => {
  const { isLoggedIn } = useAuth();

  const shouldUserRedirect = !isLoggedIn;

  return shouldUserRedirect ? <Navigate to={navigateTo} /> : component;
};
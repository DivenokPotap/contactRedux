import { useAuth } from '../redux/useAuth';
import { AppBar } from './AppBar/AppBar';
import { AuthNavigation } from "./AuthNavigation/AuthNavigation";
import { Outlet } from "react-router";


export const Layout = () => {
    const { isLoggedIn } = useAuth();
  return (
    <>
        {isLoggedIn ? <AppBar /> : <AuthNavigation />}
      <Outlet />
    </>
  );
};
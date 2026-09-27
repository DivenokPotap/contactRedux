import { useAuth } from "../../redux/Auth/useAuth";
import { NavLink } from "react-router";
import { clearAuthToken } from "../../redux/Auth/authSlice";
import { authApi, useSignOutMutation } from "../../redux/Auth/authApi";
import styled from 'styled-components';
import css from './AppBar.module.css'
import { clearToken } from "../../services/api";
import { useDispatch } from "react-redux";
  const StyledNav = styled(NavLink)`
  margin-left: 50px;
`

export const AppBar = () => {
  const dispatch = useDispatch()
  const [logOut, { isLoading, isError }] = useSignOutMutation();
    const { user } = useAuth();
  const handleSignOut = async () => {
    try {
      await logOut().unwrap()
    } catch (error) {
          toast.error("Введіть дані");
    } finally {
      clearToken();
      dispatch(clearAuthToken());
    }

    };
  
  return (
    <div>
      <nav className={css.wrap}>
        <div>
          <StyledNav to="/contacts">Контакти</StyledNav>
          <StyledNav to="/">Додому</StyledNav>
        </div>
      <div className={css.LogOut}>
      <p>
        Вітаємо, <b>{user.name}</b>
      </p>
      <button className={css.CBTN} type="button" onClick={handleSignOut}>
        Вийти
      </button>
        </div>
        </nav>
   </div>
  );
};
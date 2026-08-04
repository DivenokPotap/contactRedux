import { useAuth } from "../../redux/useAuth";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router";
import { fetchLogOutUser } from "../../redux/authOperations";
import styled from 'styled-components';
import css from './AppBar.module.css'

export const AppBar = () => {
  const dispatch = useDispatch();
    const { user } = useAuth();
    
    const handleSignOut = () => {
    dispatch(fetchLogOutUser());
    };
  
  
  const StyledNav = styled(NavLink)`
  margin-left: 50px;
`



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
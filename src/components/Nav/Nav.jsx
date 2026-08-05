import { NavLink } from "react-router";
import { useAuth } from "../../redux/Auth/useAuth"

export const Nav = () => {
    const { isLoggedIn } = useAuth();

    return (
        <div>
        <NavLink to="/">
            Додому
        </NavLink>
        {isLoggedIn && (
        <NavLink to="/contacts">
            Контакти
        </NavLink>
        )} 
        </div>
    )
}
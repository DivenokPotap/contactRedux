import { NavLink } from "react-router";
import { useAut } from "../../redux/useAut"

export const Nav = () => {
    const { isLoggedIn } = useAut();

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
import { NavLink } from "react-router"
import css from "./AuthNavigation.module.css"

export const AuthNavigation = () => {
    return (
        <div>
            <nav className={css.nav}>
            <NavLink to="/register">
                Реєстрація
            </NavLink>
             <NavLink to="/login">
                Ввійти
                </NavLink>
            </nav>
        </div>
    )
}
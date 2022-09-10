import { NavLink } from "react-router-dom";
import Style from "../../Assets/scss/Navigation.module.scss";
import "../../Assets/scss/burger.scss";
import { slide as Menu } from "react-burger-menu";

export const Navigation = () => {
  return (
    <nav className={Style.nav}>
      <ul>
        <li>
          <NavLink to="/">Forside</NavLink>
        </li>
        <li>
          <NavLink to="/list">Boliger til salg</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export const BurgerNav = () => {
  return (
    <nav className={Style.burgerNav}>
      <Menu right>
        <NavLink id="home" className="menu-item" to="/">
          Forside
        </NavLink>
        <NavLink id="list" className="menu-item" to="/list">
          Boliger til salg
        </NavLink>
        <NavLink id="login" className="menu-item" to="/login">
          Login
        </NavLink>
      </Menu>
    </nav>
  );
};

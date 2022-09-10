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
        <a id="home" className="menu-item" href="/">
          Forside
        </a>
        <a id="list" className="menu-item" href="/list">
          Boliger til salg
        </a>
        <a id="login" className="menu-item" href="/login">
          Login
        </a>
      </Menu>
    </nav>
  );
};

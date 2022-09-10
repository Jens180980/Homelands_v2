import React from "react";
import { Link } from "react-router-dom";
import { BurgerNav, Navigation } from "../Partials/Navigation";
import Style from "../../Assets/scss/Header.module.scss";
import { SearchBar } from "./SearchBar";

export const Header = () => {
  return (
    <header className={Style.header}>
      <div className={Style.empty}></div>
      <section>
        <div className={Style.logo}>
          <Link to="/">
            <h1>Homelands</h1>
          </Link>
        </div>
        <div className={Style.goLeft}>
          <Navigation />
          <SearchBar />
        </div>
      </section>
      <div>
        <BurgerNav />
      </div>
    </header>
  );
};

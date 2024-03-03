import React from "react";
import { NavLink } from "react-router-dom";

const NavBarNew = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      document.querySelector(".nav-bar").style.background = "black";
      document.querySelector(".nav-bar").style.opacity = "0.96";
    } else if (window.scrollY < 20) {
      document.querySelector(".nav-bar").style.background = `linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.8085828081232493) 0%,
        rgba(255, 255, 255, 0) 100%`;
    }
  });

  return (
    <div className="nav-bar">
      <img src="./img/logo.png" alt="" className="logo" />
      <div className="navigation">
        <NavLink to="/">
          <li>Acceuil</li>
        </NavLink>
        <NavLink to="/films">
          <li>Films</li>
        </NavLink>
        <NavLink to="/series">
          <li>Séries</li>
        </NavLink>
        <NavLink to="/nouveautes">
          <li>Nouveautés films</li>
        </NavLink>
      </div>
      <div className="right-nav">
        <div className="dropdown">
          <i className="fa-solid fa-user mainmenubtn"></i>
          <i className="fa-solid fa-caret-down arrow-down"></i>
          <div className="dropdown-child">
            <div className="profil">
              <img src="./img/logoProfil.jpeg" alt="" className="img-profil" />
              <p>Profil 1</p>
            </div>
            <div className="profil">
              <img src="./img/logoProfil2.jpeg" alt="" className="img-profil" />
              <p>Profil 2</p>
            </div>
            <div className="profil">
              <img src="./img/logoProfil3.jpeg" alt="" className="img-profil" />
              <p>Profil 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarNew;

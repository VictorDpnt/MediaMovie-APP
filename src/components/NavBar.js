import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  const [inputValuee, setInputValuee] = useState("");
  const handleInput = () => {
    document.querySelector(".input-search").addEventListener("input", (e) => {
      setInputValuee(e.target.value);
    });

    props.onInputChange(inputValuee);
  };

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
        <div className="search">
          <img
            className="loupe"
            alt="svgImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoOC41MzMzMyw4LjUzMzMzKSI+PHBhdGggZD0iTTEzLDNjLTUuNTExLDAgLTEwLDQuNDg5IC0xMCwxMGMwLDUuNTExIDQuNDg5LDEwIDEwLDEwYzIuMzk2NTEsMCA0LjU5NzM4LC0wLjg1MTAxIDYuMzIyMjcsLTIuMjYzNjdsNS45NzA3LDUuOTcwN2MwLjI1MDgyLDAuMjYxMjQgMC42MjMyNywwLjM2NjQ4IDAuOTczNzEsMC4yNzUxMmMwLjM1MDQ0LC0wLjA5MTM2IDAuNjI0MTEsLTAuMzY1MDMgMC43MTU0NywtMC43MTU0N2MwLjA5MTM2LC0wLjM1MDQ0IC0wLjAxMzg4LC0wLjcyMjg5IC0wLjI3NTEyLC0wLjk3MzcxbC01Ljk3MDcsLTUuOTcwN2MxLjQxMjY2LC0xLjcyNDg4IDIuMjYzNjcsLTMuOTI1NzYgMi4yNjM2NywtNi4zMjIyN2MwLC01LjUxMSAtNC40ODksLTEwIC0xMCwtMTB6TTEzLDVjNC40MzAxMiwwIDgsMy41Njk4OCA4LDhjMCw0LjQzMDEyIC0zLjU2OTg4LDggLTgsOGMtNC40MzAxMiwwIC04LC0zLjU2OTg4IC04LC04YzAsLTQuNDMwMTIgMy41Njk4OCwtOCA4LC04eiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg=="
            onClick={() => {
              document.querySelector(".input-search").style.width = "220px";
              document.querySelector(".search").style.background = "black";
              document.querySelector(".search").style.border =
                "1px solid white";
            }}
          />

          <input className="input-search" type="search" onInput={handleInput} />
        </div>

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

export default NavBar;

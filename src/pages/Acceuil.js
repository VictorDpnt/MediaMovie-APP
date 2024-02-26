import React, { useEffect, useState } from "react";

import NavBar from "../components/NavBar";
import axios from "axios";
import Cards from "../components/Cards";

const Acceuil = () => {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(1);
  let axio = "";
  const [data, setData] = useState([]);

  const handleInputChange = (newInputValue) => {
    setInputValue(newInputValue);
  };

  // _________________________________

  if (inputValue === "") {
    axio =
      "https://api.themoviedb.org/3/search/multi?api_key=864b6602f4018630491e67fa714381e6&query=a&page=" +
      count +
      "&language=fr-FR";
  } else {
    axio =
      "https://api.themoviedb.org/3/search/multi?api_key=864b6602f4018630491e67fa714381e6&query=" +
      inputValue +
      "&page=" +
      count +
      "&language=fr-FR";
  }
  useEffect(() => {
    axios.get(axio).then((res) => setData(res.data.results));
  }, [inputValue, count]);

  function increment() {
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 1) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 1);
      }
    });
  }

  return (
    <div className="acceuil">
      <NavBar onInputChange={handleInputChange} />
      <div className="img-background" id="img-bg">
        <h1>AVATAR : LE DERNIER MAÎTRE DE L'AIR</h1>
        <h3>
          Les quatre nations de l'air, de l'eau de la terre et du feu vivaient
          en harmonie jusqu'à ce que la nation du feu déclare la guerre. Un
          siècle plus tard, aucune perspective de paix n'est en vue. Alors Aang,
          un avatar découvre qu'il a le pouvoir de contrôler les quatre
          éléments. Il s'unit avec Katara et son frère Sokka pour restaurer la
          paix dans un monde meurtri par la guerre.
        </h3>
      </div>
      <div className="card-container">
        <ul className="cards-items">
          {data.map((movie) => (
            <Cards key={movie.id} movie={movie} />
          ))}
        </ul>
      </div>
      <div className="arrow-pages">
        <a href="#img-bg">
          <p className="first-page" onClick={() => setCount(1)}>
            Première page
          </p>
        </a>
        <a href="#img-bg">
          <i
            className="fa-solid fa-chevron-left"
            onClick={() => {
              decrement();
            }}
          ></i>
        </a>

        <p className="page-number">{count}</p>
        <a href="#img-bg">
          <i
            className="fa-solid fa-chevron-right"
            onClick={() => {
              increment();
            }}
          ></i>
        </a>
        <a href="#img-bg">
          <p className="last-page" onClick={() => setCount(500)}>
            Dernière page
          </p>
        </a>
      </div>
    </div>
  );
};

export default Acceuil;

import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import Cards from "../components/Cards";

const Films = () => {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(1);
  let axio = "";
  const [data, setData] = useState([]);

  const handleInputChange = (newInputValue) => {
    setInputValue(newInputValue);
  };

  if (inputValue === "") {
    axio =
      "https://api.themoviedb.org/3/movie/top_rated?api_key=864b6602f4018630491e67fa714381e6&query=harry&page=" +
      count +
      "&language=fr-FR";
  } else {
    axio =
      "https://api.themoviedb.org/3/search/movie?api_key=864b6602f4018630491e67fa714381e6&query=" +
      inputValue +
      "&page=" +
      count +
      "&language=fr-FR";
  }
  useEffect(() => {
    axios.get(axio).then((res) => setData(res.data.results));
  }, [inputValue, count, axio]);

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
    <div className=" movie">
      <NavBar onInputChange={handleInputChange} />
      <div className="img-background" id="img-bg">
        <h1>INTERSTELLAR</h1>
        <h3>
          Dans un proche futur, la Terre est devenue hostile pour l'homme. Les
          tempêtes de sable sont fréquentes et il n'y a plus que le maïs qui
          peut être cultivé, en raison d'un sol trop aride. Cooper est un
          pilote, recyclé en agriculteur, qui vit avec son fils et sa fille dans
          la ferme familiale. Lorsqu'une force qu'il ne peut expliquer lui
          indique les coordonnées d'une division secrète de la NASA, il est
          alors embarqué dans une expédition pour sauver l'humanité.
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
          <p className="last-page" onClick={() => setCount(460)}>
            Dernière page
          </p>
        </a>
      </div>
    </div>
  );
};

export default Films;

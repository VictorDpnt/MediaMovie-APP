import React, { useEffect, useState } from "react";

import axios from "axios";
import Cards from "../components/Cards";
import NavBar from "../components/NavBar";

const Nouveautes = () => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=864b6602f4018630491e67fa714381e6&page=" +
          count +
          "&language=fr-FR"
      )
      .then((res) => setData(res.data.results));
  }, [count]);

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
    <div className="now-playing">
      <NavBar />
      <div className="img-background" id="img-bg">
        <h1>DUNE - DEUXIÈME PARTIE</h1>
        <h3>
          Paul Atréides se rallie à Chani et aux Fremen tout en préparant sa
          revanche contre ceux qui ont détruit sa famille. Alors qu'il doit
          faire un choix entre l'amour de sa vie et le destin de la galaxie, il
          devra néanmoins tout faire pour empêcher un terrible futur que lui
          seul peut prédire.
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
            class="fa-solid fa-chevron-left"
            onClick={() => {
              decrement();
            }}
          ></i>
        </a>

        <p className="page-number">{count}</p>
        <a href="#img-bg">
          <i
            class="fa-solid fa-chevron-right"
            onClick={() => {
              increment();
            }}
          ></i>
        </a>
        <a href="#img-bg">
          <p className="last-page" onClick={() => setCount(182)}>
            Dernière page
          </p>
        </a>
      </div>
    </div>
  );
};

export default Nouveautes;

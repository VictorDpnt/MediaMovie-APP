import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import CardsSerie from "../components/CardsSerie";

const Series = () => {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(1);
  let axio = "";
  const [data, setData] = useState([]);

  const handleInputChange = (newInputValue) => {
    setInputValue(newInputValue);
  };

  if (inputValue === "") {
    axio =
      "https://api.themoviedb.org/3/tv/top_rated?api_key=864b6602f4018630491e67fa714381e6&query=game&page=" +
      count +
      "&language=fr-FR";
  } else {
    axio =
      "https://api.themoviedb.org/3/search/tv?api_key=864b6602f4018630491e67fa714381e6&query=" +
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
    <div className=" tv">
      <NavBar onInputChange={handleInputChange} />
      <div className="img-background" id="img-bg">
        <h1>ONE PIECE</h1>
        <h3>
          Luffy, transformé en homme élastique après avoir mangé un fruit du
          démon, rêve de devenir le roi des pirates et de trouver le mystérieux
          “One Piece”. L'ère des pirates bat son plein, Luffy au chapeau de
          paille et son équipage affronteront des ennemis hauts en couleurs et
          vivront des aventures rocambolesques !
        </h3>
      </div>
      <div className="card-container">
        <ul className="cards-items">
          {data.map((movie) => (
            <CardsSerie key={movie.id} movie={movie} />
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
          <p className="last-page" onClick={() => setCount(96)}>
            Dernière page
          </p>
        </a>
      </div>
    </div>
  );
};

export default Series;

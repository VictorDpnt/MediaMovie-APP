import { useState } from "react";
import RecommandationMovie from "./RecommandationMovie";

const Cards = ({ movie }) => {
  const [showMoreInfos, setShowMoreInfos] = useState(false);
  const dateFormateur = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join(" / ");
  };

  const genreFinder = () => {
    let genreArray = [];

    for (let i = 0; i < movie.genre_ids.length; i++) {
      switch (movie.genre_ids[i]) {
        case 28:
          genreArray.push("Action");
          break;
        case 12:
          genreArray.push("Aventure");
          break;
        case 16:
          genreArray.push("Animation");
          break;
        case 35:
          genreArray.push("Comédie");
          break;
        case 80:
          genreArray.push("Policier");
          break;
        case 99:
          genreArray.push("Documentaire");
          break;
        case 18:
          genreArray.push("Drame");
          break;
        case 10751:
          genreArray.push("Famille");
          break;
        case 14:
          genreArray.push("Fantasy");
          break;
        case 36:
          genreArray.push("Historique");
          break;
        case 27:
          genreArray.push("Horreur");
          break;
        case 10402:
          genreArray.push("Music");
          break;
        case 9648:
          genreArray.push("Mystère");
          break;
        case 10749:
          genreArray.push("Romance");
          break;
        case 878:
          genreArray.push("Science Fiction");
          break;
        case 10770:
          genreArray.push("TV Show");
          break;
        case 53:
          genreArray.push("Thriller");
          break;
        case 10752:
          genreArray.push("Guerre ");
          break;
        case 37:
          genreArray.push("Western");
          break;
        default:
          break;
      }
    }
    return genreArray.map((genre) => <li key={genre}>{genre}</li>);
  };

  return (
    <div className="container carousel-box">
      <div className="card carousel">
        <div className="front carousel-item">
          <p className="media-type">{movie.media_type}</p>
          <img
            src={
              movie.poster_path
                ? "https://image.tmdb.org/t/p/original" + movie.poster_path
                : "./img/poster.jpg"
            }
            alt={movie.poster_path}
            className="img-movie"
          />
          <p className="title-front">
            {movie.title ? movie.title : movie.name}
          </p>
        </div>
        <div
          className="back"
          onClick={() => {
            setShowMoreInfos(!showMoreInfos);
          }}
          onMouseLeave={() => {
            setShowMoreInfos(false);
          }}
        >
          <div className="bg-back">
            <img
              src={
                movie.backdrop_path
                  ? "https://image.tmdb.org/t/p/original" + movie.backdrop_path
                  : "./img/poster.jpg"
              }
              alt={movie.poster_path}
              className="img-movie"
            />
          </div>
          <h1 className="title">{movie.title ? movie.title : movie.name}</h1>
          {movie.release_date ? (
            <p className="date">
              Sortie le {dateFormateur(movie.release_date)}
            </p>
          ) : null}
          <h3 className="note">
            {movie.vote_average.toFixed(1)} /10<span>🌟</span>
          </h3>
          <div className="genre">
            <ul className="genre">
              {movie.genre_ids
                ? genreFinder()
                : movie.genres.map((genre) => (
                    <li key={genre}>{genre.name}</li>
                  ))}
            </ul>
          </div>
          {movie.origin_country ? (
            <p className="originary">Pays d'origine : {movie.origin_country}</p>
          ) : (
            <p className="originary">
              Langue d'origine : {movie.original_language.toUpperCase()}
            </p>
          )}
          <div className="synopsis">
            <h1>Synopsis</h1>
            {movie.overview ? (
              <p>{movie.overview}</p>
            ) : (
              <p>Pas de synopsis disponible pour le moment ...</p>
            )}
          </div>

          <h5 onClick={() => setShowMoreInfos(!showMoreInfos)}>
            Titres similaires ...
          </h5>

          {showMoreInfos && <RecommandationMovie movieId={movie.id} />}
        </div>
      </div>
    </div>
  );
};

export default Cards;

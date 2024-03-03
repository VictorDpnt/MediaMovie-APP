import axios from "axios";
import React, { useEffect, useState } from "react";

const RecommandationMovie = ({ movieId }) => {
  const [recommandationData, setRecommandationData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=864b6602f4018630491e67fa714381e6&language=fr-FR`
      )
      .then((res) => setRecommandationData(res.data.results));
  }, []);

  return (
    <div className="recommandation">
      {recommandationData.slice(0, 16).map((reco) => {
        return (
          <div className="reco-items">
            <img
              src={
                reco.poster_path
                  ? "https://image.tmdb.org/t/p/original" + reco.poster_path
                  : "./img/poster.jpg"
              }
              alt={reco.poster_path}
              className="img-movie"
            />
            {/* <h6>{reco.title}</h6> */}
          </div>
        );
      })}
    </div>
  );
};

export default RecommandationMovie;

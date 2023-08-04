import React, { useEffect, useState } from "react";
import { MovieJson } from "../types/Home";
import { useParams } from "react-router-dom";
import { MovieParams, movieDetailJson } from "../types/MovieDetail";
import "../styles/MovieDetail.css"
function MovieDetail() {
  const params: MovieParams = useParams() as MovieParams;

  let [movieDetails, setMovieDetails] = useState<movieDetailJson | null>(null);

  useEffect(() => {
    (async (id: string) => {
      const movieData = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=fdfd0a4e59e3443a83c2ba4f1f4b491f`
      );
      const movieJson: movieDetailJson = await movieData.json();
      console.log(movieJson);
      setMovieDetails(movieJson);
    })(params.id);
  });

  return (
    <div>   
      <div className="content">
        <h1 className="movie-title">{movieDetails?.title} </h1>
        <img className="movie-image"
          src={`https://image.tmdb.org/t/p/original${movieDetails?.poster_path}`}
          alt=""
        />
                   <p>Rating: {movieDetails?.vote_average.toFixed(2)}</p>
        <p>{movieDetails?.overview}</p>{" "}
      </div>
    
    </div>
  );
}

export default MovieDetail;

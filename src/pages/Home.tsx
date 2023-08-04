import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import { MovieJson, result } from "../types/Home";
import "../styles/Home.css";

function Home() {
  let [movieList, setMovieList] = useState<result[]>([]);

  const MovieCardList = movieList.map((res: result) => {
    return (
      <MovieCard
        id={res.id}
        imageUrl={res.poster_path}
        name={res.title}
        rating={res.vote_average}
      />
    );
  });

  const getMovie = async (name: string) => {
    const retrive = async () => {
      let data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${name}&page=1&api_key=fdfd0a4e59e3443a83c2ba4f1f4b491f`
      );
      return data;
    };
    const result = await retrive();
    const resultJson: MovieJson = await result.json();
    console.log(resultJson);
    setMovieList(resultJson.results);
  };

  return (
    <div>
      <div className="search-container">
        <SearchBar getMovie={getMovie} />
      </div>
      <div className="container">
        <div className="cards">
          {MovieCardList.length ? MovieCardList : "No Results"}
        </div>
      </div>
    </div>
  );
}

export default Home;

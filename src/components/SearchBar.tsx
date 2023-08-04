import React, { useState } from "react";
import "../styles/SearchBar.css";
type searchBarProps = {
  getMovie: (name: string) => void;
};

function SearchBar({ getMovie }: searchBarProps) {
  const [query, setQuery] = useState<string>("");

  return (
    <form
      className="search-bar"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      }}
    >
      <input
        type="search"
        className="search-input"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setQuery(e.target.value);
        }}
        name="q"
        placeholder="Enter the movie name"
      />
      <input
        className="search-button"
        type="submit"
        onClick={(e) => {
          console.log("clicked");
          getMovie(query);
        }}
        value="Search"
      />
    </form>
  );
}

export default SearchBar;

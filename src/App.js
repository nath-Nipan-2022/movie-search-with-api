import React, { useState, useEffect, useCallback } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import Skeletons from "./components/Skeletons";
import { useFetch } from "./hook/useFetch";

const App = () => {
  const [search, setSearch] = useState("spider man");
  const { data: movies, isLoading, error } = useFetch(search);

  const handleSearch = (term) => {
    setSearch(term);
  };

  const renderMovies = movies.map((movie) => {
    return <MovieCard key={movie.show.id} show={movie.show} />;
  });

  return (
    <div className="container">
      <h1 className="heading">MovieLand</h1>
      <header>
        <SearchBar handleSearch={handleSearch} />
      </header>

      <main>
        <div className="movies_container">
          {isLoading ? <Skeletons times={10} /> : renderMovies}
        </div>

        {error && (
          <div className="error-message">
            <div>{error}</div>;
          </div>
        )}
      </main>
    </div>
  );
};

export default App;

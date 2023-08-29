import React, { useState } from "react";
import searchIcon from "../assets/search.svg";

const SearchBar = ({ handleSearch }) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    handleSearch(term);
    setTerm("");
  };

  return (
    <article className="search-bar-wrapper">
      <form onSubmit={handleSubmit} className="search">
        <span>
          <img src={searchIcon} alt="search icon" width={20} />
        </span>
        <input
          onChange={(e) => setTerm(e.target.value)}
          type="search"
          value={term}
          placeholder="Search movies like: Spider Man"
        />
      </form>
    </article>
  );
};

export default SearchBar;

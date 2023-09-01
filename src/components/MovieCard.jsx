import React from "react";
import placeholder from "../assets/images/placeholder-image.png";
import { starIcon, plusIcon } from "../assets/icons";
import { Link } from "react-router-dom";

const MovieCard = ({ show: movie }) => {
  const { image, name, premiered, rating, genres } = movie;

  return (
    <Link className="movie_card" to={`/movie/${movie.id}`}>
      <figure className="movie-image">
        <img
          src={image ? image.medium : placeholder}
          alt="movie poster"
          max-width={100}
        />
      </figure>

      <article className="movie_desc flex justify-between">
        <div className="movie_desc_rating flex align-center">
          <img src={starIcon} alt="star icon" width={12} height={12} />
          <span>{rating.average != null ? rating.average : ""}</span>
        </div>
        {/* title & desc */}
        <div className="movie_desc_main">
          <h3 className="title">
            <span>{name}</span>
          </h3>
          <p className="year">
            <span>{premiered.slice(0, 4)} </span>
          </p>
          <div className="btns flex align-center justify-between">
            <button className="primary-btn">Watch Now</button>
            <button className="plus-btn">
              <img src={plusIcon} alt="plus icon" width={12} height={12} />
            </button>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default MovieCard;

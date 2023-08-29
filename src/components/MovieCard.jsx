import React from "react";
import placeholder from "../assets/placeholder-image.png";

const MovieCard = ({ show: movie }) => {
  const { image, name, premiered, rating, genres } = movie;

  return (
    <article className="movie_card">
      <figure>
        <img
          src={image ? image.medium : placeholder}
          alt="movie poster"
          max-width={100}
        />
      </figure>

      <article className="movie_desc">
        <div className="details">
          <h3 className="genre">
            <span>{genres[0]}</span>
          </h3>
          <h3 className="rating">
            <span>{rating.average != null ? rating.average + "/10" : ""}</span>
          </h3>
          <h3 className="year">
            <span>{premiered} </span>
          </h3>
          <h3 className="title">
            <span>{name}</span>
          </h3>
        </div>
      </article>
    </article>
  );
};

export default MovieCard;

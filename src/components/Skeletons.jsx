const Skeletons = ({ times }) => {
  const skeletons = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <article
          key={i}
          className="movie_skeleton-card"
          style={{ animationDelay: `${i * 100}ms` }}
        ></article>
      );
    });
  return skeletons;
};

export default Skeletons;

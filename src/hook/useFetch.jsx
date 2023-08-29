import { useCallback, useEffect, useState } from "react";

export const useFetch = (query) => {
  const url = `https://api.tvmaze.com/search/shows?q=`;

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = useCallback(
    async (query) => {
      try {
        setIsLoading(true);
        const res = await fetch(`${url}${query}`);
        const data = await res.json();

        console.log(data);
        setIsLoading(false);
        setData(data);
      } catch (e) {
        console.log(e.message);
        setError(e.message);
      }
    },
    [url]
  );

  useEffect(() => {
    fetchMovies(query);
  }, [fetchMovies, query]);

  return {
    isLoading,
    data,
    error,
  };
};

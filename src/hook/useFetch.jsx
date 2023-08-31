import { useCallback, useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`${url}`);
      const data = await res.json();

      console.log(data.slice(0, 45));
      setIsLoading(false);
      setData(data.slice(0, 45));
    } catch (e) {
      console.log(e.message);
      setError(e.message);
    }
  }, [url]);

  useEffect(() => {
    fetchMovies(url);
  }, [fetchMovies, url]);

  return {
    isLoading,
    data,
    error,
  };
};

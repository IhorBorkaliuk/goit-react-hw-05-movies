import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {AppBar} from 'components/AppBar/AppBar';
// import { searchMovies } from 'components/SearchMovies/SearchMovies';
import MoviesList from 'components/ListOfMovies/ListOfMovies';
import { Loader } from 'shared/Loader';
import { getSearchMovies } from 'services/fetchMovies';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const onChangeQuery = query => {
    setSearchParams({ query: query });
    setMovies([]);
  };

  useEffect(() => {
    const getMovies = async () => {
      if (!query) {
        return;
      }
      setIsLoading(true);

      try {
        const data = await getSearchMovies({ query });
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, [query]);

  return (
    <>
      <AppBar />
      <searchMovies onSubmit={onChangeQuery} />
      {movies.length !== 0 && <MoviesList movies={movies} />}
      {isLoading && <Loader />}
      {error && <p>Please try again later!</p>}
    </>
  );
};

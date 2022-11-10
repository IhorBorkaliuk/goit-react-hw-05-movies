import { MovieList } from 'components/MovieList/MovieList';
import SearchBox from 'components/AppSearch/AppSearch';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSearchMovie } from 'services/fetchMovies';
import { Loader } from 'components/Loader/Loader';
import { Notify } from 'notiflix';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const query = searchParams.get('query');

  const searchSubmit = query => {
    setSearchParams({ query: query });
    setMovies([]);
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchMovies = async () => {
      try {
        setLoading(true);

        const result = await getSearchMovie(query);
        setMovies(result.results);
      } catch {
        Notify.failure('Oops! We have some problems, try again later');
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [query]);

  return (
    <div>
      {loading && <Loader />}
      <SearchBox onSubmit={searchSubmit} />
      <MovieList movies={movies} />
    </div>
  );
}

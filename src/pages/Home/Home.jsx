import { getTrendingMovies } from 'services/fetchMovies';
import { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import { TitleText } from 'components/MovieCard/MovieCardStyled';
import { Notify } from 'notiflix';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const result = await getTrendingMovies();
        setMovies(result.results);
      } catch {
          Notify.failure('Oops! We have some problems, try again later');
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  if (!movies) {
    return null;
  }

  return (
    <main>
      {loading && <Loader />}
      <TitleText>Trending today</TitleText>
      <MovieList movies={movies} />
    </main>
  );
}

import { Loader } from 'shared/Loader';
import { useEffect, useState } from 'react';
import { AppBar } from 'components/AppBar/AppBar';
import { fetchTrending } from 'services/fetchMovies';
import MoviesList from 'components/ListOfMovies/ListOfMovies';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const trendingMovies = async () => {
      setIsLoading(true);
      try {
        const response = await fetchTrending();
        setMovies(response);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    trendingMovies();
  }, []);

  return (
    <>
      <AppBar />

      {movies.length !== 0 && (
        <div>
          <h1>Trending movies</h1>
          <MoviesList movies={movies} />
        </div>
      )}

      {isLoading && <Loader />}
      {error && <p>Please try again later!</p>}
    </>
  );
};

export default Home
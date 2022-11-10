import MovieCard from 'components/MovieCard/MovieCard';
import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { getMovieById } from 'services/fetchMovies';
import { Loader } from 'components/Loader/Loader';
import { Back } from './MovieDetailsStyled';
import { Notify } from 'notiflix';

export default function MovieDetails() {
  const [movie, setMovie] = useState(0);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from ?? '/';

  const goBack = () => navigate(from);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);

        const result = await getMovieById(movieId);
        setMovie(result);
      } catch {
        Notify.failure('Oops! We have some problems, try again later');
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return null;
  }

  return (
    <>
      {loading && <Loader />}
      <Back onClick={goBack}>Back</Back>
      {movie && <MovieCard movie={movie} />}
    </>
  );
}

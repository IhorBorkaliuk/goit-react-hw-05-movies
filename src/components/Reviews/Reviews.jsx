import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/fetchMovies';
import ReviewsList from './ReviewsList/ReviewsList';
import { Notify } from 'notiflix';

export default function Reiwers() {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(setMovieReviews);
  }, [movieId]);

  if (!movieReviews) {
    return;
  }

  if (movieReviews.length === 0) {
    return Notify.failure('We have no responses');
  }

  return <ReviewsList movieReiwers={movieReviews} />;
}

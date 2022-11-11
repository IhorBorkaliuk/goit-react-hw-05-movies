import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/fetchMovies';
import ReviewsList from './ReviewsList/ReviewsList';
import { Notify } from 'notiflix';

export default function Reviews() {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(setMovieReviews);
  }, [movieId]);
  

  if (!movieReviews) {
    Notify.failure(`We have not found reviews`);
    return
  }

  if (movieReviews.length !== 0) {
     Notify.success(`We have found ${movieReviews.length} reviews`);
  }
  

  return <ReviewsList movieReviews={movieReviews} />;
}

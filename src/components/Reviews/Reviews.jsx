import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/fetchMovies';
import ReviewsList from './ReviewsList/ReviewsList';

export default function Reviews() {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(setMovieReviews);
  }, [movieId]);
  

  if (!movieReviews) {
    return
  }
  

  return <ReviewsList movieReviews={movieReviews} />;
}

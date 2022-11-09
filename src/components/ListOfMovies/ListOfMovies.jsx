import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const movie = movies.data.results;
  const location = useLocation();

  return (
    <ul>
      {movie.map(({ title, id }) => (
        <li key={id}>
          <button state={{ from: location }} to={`/movies/${id}`}>
            <h2>{title}</h2>
          </button>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.object.isRequired,
};

export default MoviesList;

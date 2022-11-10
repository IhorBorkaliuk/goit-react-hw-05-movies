import Placeholder from 'images/not-found.png';
import {
  CastContainer,
  CastItem,
} from 'components/Cast/CastList/CastListStyled';

export default function CastList({ movieCast }) {
  const results = movieCast.map(item => {
    const { id, profile_path, original_name, character } = item;

    return (
      <CastItem key={id}>
        <img
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w500${profile_path}`
              : Placeholder
          }
          alt={original_name}
        />
        <p>
          <b>{original_name ? original_name : 'no_info'}</b>
        </p>
        <p>{character ? character : 'no_info'}</p>
      </CastItem>
    );
  });

  return <CastContainer>{results}</CastContainer>;
}
import {
  CardWrap,
  Description,
  Poster,
  Wrapper,
  Link,
  WrapperLink,
  TitleText,
} from 'components/MovieCard/MovieCardStyled';
import { Outlet, useLocation } from 'react-router-dom';
import Placeholder from 'images/not-found.png';

export default function MovieCard({ movie }) {
  const location = useLocation();
  const from = location.state?.from ?? '/movies';

  const {
    poster_path,
    title,
    vote_average,
    overview,
    genres,
    release_date,
    backdrop_path,
  } = movie;

  const backdrop = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}`;
  return (
    <>
      <CardWrap backdrop_path={backdrop}>
        <Wrapper>
          <Poster
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : Placeholder
            }
          />
          <Description>
            <h1>{title}</h1>
            <p>
              <b>{release_date}</b>
            </p>
            <p>
              User score :{' '}
              <b>
                {vote_average
                  ? Math.round((vote_average * 100) / 10)
                  : 'no_info'}
                %
              </b>
            </p>
            <h2>Overview</h2>
            <p>{overview ? overview : 'no_info'}</p>
            <h2>Genres</h2>
            <p>
              {genres ? genres.map(item => item.name).join(', ') : 'no_info'}
            </p>
          </Description>
        </Wrapper>
      </CardWrap>
      <TitleText>Additional information</TitleText>
      <WrapperLink>
        <Link state={{ from }} to="cast">
          Cast
        </Link>
        <Link state={{ from }} to="reviews">
          Reviews
        </Link>
      </WrapperLink>
      <Outlet />
    </>
  );
}

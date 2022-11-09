import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Movies } from 'pages/Movies';

const Home = lazy(() => import('pages/Home'));
const SharedLayout = lazy(() => import('components/SharedLayout/SharedLayout'));

export const App = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<SharedLayout />} />
          <Route index element={<Home />} />
          {/* <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<CastMovie />} />
            <Route path="reviews" element={<ReviewsMovie />} />
          </Route> */}
          <Route path="movies" element={<Movies />} />
          {/* <Route path=":movieId" element={<MovieDetails />}>
            <Route path="cast" element={<CastMovie />} />
            <Route path="reviews" element={<ReviewsMovie />} />
          </Route> */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
};

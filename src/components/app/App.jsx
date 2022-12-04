import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/layout/Layout';
import { Home } from 'components/home/Home';
import { StyledApp } from './AppStyled';
import { Movies } from 'components/movie/Movies';
import { MovieDetails } from 'components/movieDetails/MovieDetails';
import { Cast } from 'components/cast/Cast';
import { Reviews } from 'components/reviews/Reviews';

export const App = () => {
  return (
    <StyledApp>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </StyledApp>
  );
};

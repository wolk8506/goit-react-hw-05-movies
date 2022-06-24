import { Routes, Route } from 'react-router-dom';
import { useState, lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from './Loader/Loader';

const Home = lazy(() =>
  import('./Home/Home').then(module => ({ default: module.Home }))
);
const Movies = lazy(() =>
  import('./Movies/Movies').then(module => ({ default: module.Movies }))
);
const Navigation = lazy(() =>
  import('./Navigation/Navigation').then(module => ({
    default: module.Navigation,
  }))
);
const MovieDatails = lazy(() =>
  import('./MovieDetails/MovieDetails').then(module => ({
    default: module.MovieDatails,
  }))
);
const Cast = lazy(() =>
  import('./Cast/Cast').then(module => ({ default: module.Cast }))
);
const Reviews = lazy(() =>
  import('./Reviews/Reviews').then(module => ({ default: module.Reviews }))
);
const NotFoundView = lazy(() =>
  import('./NotFoundView/NotFoundView').then(module => ({
    default: module.NotFoundView,
  }))
);

export const App = () => {
  const [btnBack, setBtnBack] = useState('/');

  const btnBackChange = data => {
    setBtnBack(data);
  };

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Navigation />
        <Routes>
          {/* <Route index element={<Home onClick={btnBackChange} />} /> */}
          <Route path="/" element={<Home onClick={btnBackChange} />} />
          <Route path="/movies" element={<Movies onClick={btnBackChange} />} />
          <Route
            path="/movies/:movieId/*"
            element={<MovieDatails btnBack={btnBack} />}
          >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundView />} />
        </Routes>
        <ToastContainer />
      </Suspense>
    </div>
  );
};

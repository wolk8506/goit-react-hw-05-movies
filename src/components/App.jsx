import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from './Pages/Loader';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'a8df323e9ca157a6f58df54190ee006c';

const loader = componentName => {
  return lazy(() =>
    import(`./Pages/${componentName}`).then(module => ({
      default: module[componentName],
    }))
  );
};

const Home = loader('Home');
const Movies = loader('Movies');
const Navigation = loader('Navigation');
const MovieDetails = loader('MovieDetails');
const Cast = loader('Cast');
const Reviews = loader('Reviews');
const NotFoundView = loader('NotFoundView');

export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={<Home BASE_URL={BASE_URL} API_KEY={API_KEY} />}
          />
          <Route
            path="/movies"
            element={<Movies BASE_URL={BASE_URL} API_KEY={API_KEY} />}
          />
          <Route
            path="/movies/:movieId/*"
            element={<MovieDetails BASE_URL={BASE_URL} API_KEY={API_KEY} />}
          >
            <Route
              path="cast"
              element={<Cast BASE_URL={BASE_URL} API_KEY={API_KEY} />}
            />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundView />} />
        </Routes>
        <ToastContainer />
      </Suspense>
    </div>
  );
};

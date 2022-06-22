import { Routes, Route } from 'react-router-dom';
import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';
import { Navigation } from './Navigation/Navigation';

export const App = () => {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
};

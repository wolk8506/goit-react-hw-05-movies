import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import s from 'components/Pages/Pages.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Home = ({ BASE_URL, API_KEY }) => {
  const [popularMov, setPopularMov] = useState([]);
  const URL = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-EN&page=1`;

  useEffect(() => {
    axios.get(URL).then(response => {
      setPopularMov(response.data.results);
    });
  }, [URL]);

  return (
    <>
      <h2>Trending today</h2>
      <ul className={s.movList}>
        {popularMov.map(m => (
          <li key={m.id} className={s.movName}>
            <Link to={`/movies/${m.id}`}>{m.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

Home.propTypes = {
  BASE_URL: PropTypes.string.isRequired,
  API_KEY: PropTypes.string.isRequired,
};

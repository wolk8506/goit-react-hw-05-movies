import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import s from 'components/Pages/Pages.module.css';
import { Link } from 'react-router-dom';

export const Home = ({ onClick, BASE_URL, API_KEY }) => {
  const [popularMov, setPopularMov] = useState([]);
  const URL = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-EN&page=1`;
  useEffect(() => {
    onClick('/');
    axios.get(URL).then(response => {
      setPopularMov(response.data.results);
    });
  }, [URL, onClick]);

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

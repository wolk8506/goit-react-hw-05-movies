import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import s from 'components/Home/Home.module.css';
import { Link } from 'react-router-dom';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'a8df323e9ca157a6f58df54190ee006c';

const URL = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-EN&page=1`;

export const Home = ({ onClick }) => {
  const [popularMov, setPopularMov] = useState([]);
  // console.log(useRoutes);

  useEffect(() => {
    onClick('/');
    axios.get(URL).then(response => {
      setPopularMov(response.data.results);
      // console.log(response.data.results);
    });
  }, [onClick]);

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

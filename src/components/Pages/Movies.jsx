import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import s from 'components/Pages/Pages.module.css';
import PropTypes from 'prop-types';

export const Movies = ({ BASE_URL, API_KEY }) => {
  const [movies, setMovies] = useState('');
  const [searchMovies, setSearchMovies] = useState('');
  const [queryMovie, setQueryMovie] = useState('');
  const location = useLocation();
  const history = useNavigate();

  const URL = `${BASE_URL}search/movie${searchMovies}&api_key=${API_KEY}&language=en-EN&page=1&include_adult=false`;

  useEffect(() => {
    setSearchMovies(location.search);
  }, [location.search]);

  const handleNameChange = e => {
    setMovies(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (movies.trim() === '') {
      toast.warn('There is nothing for this request!');
      return;
    }

    history({
      ...location,
      search: `query=${movies}`,
    });

    setSearchMovies(`?query=${movies}`);
    setMovies('');
  };

  useEffect(() => {
    if (searchMovies === '') {
      return;
    }

    axios.get(URL).then(response => {
      setQueryMovie(response.data.results);
    });
  }, [URL, searchMovies]);

  return (
    <div className={s.movies_block}>
      <form className={s.form}>
        <input
          type="text"
          placeholder="Search images and photos"
          value={movies}
          onChange={handleNameChange}
        />
        <button type="submit" onClick={handleSubmit}>
          <ImSearch />
          <span>Search</span>
        </button>
      </form>
      <ul className={s.moviesList}>
        {queryMovie &&
          queryMovie.map(m => (
            <li key={m.id}>
              <Link to={`/movies/${m.id}`} state={{ from: location }}>
                {m.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

Movies.propTypes = {
  BASE_URL: PropTypes.string.isRequired,
  API_KEY: PropTypes.string.isRequired,
  // onClick: PropTypes.func.isRequired,
};

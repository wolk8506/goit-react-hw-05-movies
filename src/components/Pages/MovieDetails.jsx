import axios from 'axios';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { Loader } from 'components/Pages/Loader';
import movieImg from 'components/img/movie.jpg';
import s from 'components/Pages/Pages.module.css';
import PropTypes from 'prop-types';

export const MovieDetails = ({ btnBack, BASE_URL, API_KEY }) => {
  const { movieId } = useParams();
  const URL = `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-EN`;
  const BASE_SRC = 'https://image.tmdb.org/t/p/w500';
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    setMovie([]);
    axios.get(URL).then(response => {
      setMovie(response.data);
    });
  }, [URL]);

  return (
    <>
      <Link to={btnBack} className={s.link_back}>
        &#129044; Back
      </Link>
      {movie && (
        <div className={s.movieblock}>
          <img
            className={s.img}
            src={
              movie.poster_path
                ? `${BASE_SRC}${movie.poster_path}`
                : `${movieImg}`
            }
            alt=""
            width={300}
          />
          <div>
            <h1>{movie.title}</h1>
            <p>User Score: {movie.vote_average}</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <p>
              {movie.genres && movie.genres.map(genre => genre.name).join(', ')}
            </p>
          </div>
        </div>
      )}
      <div className={s.infoblock}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}> Reviews</Link>
          </li>
        </ul>
      </div>
      <div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

MovieDetails.propTypes = {
  BASE_URL: PropTypes.string.isRequired,
  API_KEY: PropTypes.string.isRequired,
  btnBack: PropTypes.string.isRequired,
};

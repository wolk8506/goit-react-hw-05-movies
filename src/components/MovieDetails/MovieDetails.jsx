import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';
import movieImg from 'components/MovieDetails/movie.jpg';
import s from 'components/MovieDetails/MovieDetails.module.css';

export const MovieDatails = ({ btnBack }) => {
  const { movieId } = useParams();
  // console.log(movieId);
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const API_KEY = 'a8df323e9ca157a6f58df54190ee006c';
  const URL = `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-EN`;
  const BASE_SRC = 'https://image.tmdb.org/t/p/w500';
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    setMovie([]);
    axios.get(URL).then(response => {
      setMovie(response.data);
      // console.log(response);
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
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </div>
    </>
  );
};

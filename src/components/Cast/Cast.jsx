import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import person from 'components/Reviews/person.png';

export const Cast = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=a8df323e9ca157a6f58df54190ee006c&language=en-US`;
  const BASE_SRC = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    setReviews([]);
    axios.get(URL).then(response => {
      setReviews(response.data.cast);

      // console.log(response.data.cast);
    });
  }, [URL]);
  return (
    reviews &&
    reviews.map(c => (
      <div key={c.id}>
        <h3>{c.name}</h3>
        <p>{c.character}</p>
        <img
          src={c.profile_path ? `${BASE_SRC}${c.profile_path}` : `${person}`}
          alt={c.name}
          width={200}
        />
      </div>
    ))
  );
};

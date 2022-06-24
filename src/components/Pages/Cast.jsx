import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import person from 'components/img/person.png';

export const Cast = ({ BASE_URL, API_KEY }) => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const URL = `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
  const BASE_SRC = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    setReviews([]);
    axios.get(URL).then(response => {
      setReviews(response.data.cast);
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

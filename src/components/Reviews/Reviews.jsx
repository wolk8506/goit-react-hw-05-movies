import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [noReviews, setNoReviews] = useState(false);
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=a8df323e9ca157a6f58df54190ee006c&language=en-US&page=1`;
  useEffect(() => {
    setReviews([]);
    setNoReviews(false);
    axios.get(URL).then(response => {
      setReviews(response.data.results);
      if (response.data.results.length === 0) {
        setNoReviews(true);
      }
      // console.log(response.data.results.length === 0);
    });
  }, [URL]);
  return (
    <>
      {noReviews && <p>We don't have any reviews for this movie.</p>}
      {reviews &&
        reviews.map(c => (
          <div key={c.author}>
            <h3>{c.author}</h3>
            <p>{c.content}</p>
          </div>
        ))}
    </>
  );
};

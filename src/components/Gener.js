import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Gener({ title, genre_id }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          url: `https://api.themoviedb.org/3/discover/movie?genre_id=28`,
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTg5NjZmNzZiYTY2ZTU3ZDBlNjYyYzlkYTA3OWViMyIsInN1YiI6IjY1MjY3M2E5ZWE4NGM3MDEwYzE5YjM5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WyF4_V8406CARBkiimRBXEKXJgtuFoJ7mq_1M2otJpQ'
          },
        };

        const response = await axios.get(options.url, { headers: options.headers });
        console.log(options.url);
        console.log(response);
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // Fetch data when the 'title' prop changes

  return (
    <div className='gener' style={{ margin:'5px 0', fontSize:'15px'} }>
      <p className='title' style={{color:'#878787'}}>{title}</p>
      <div className='movies-container' style={{ display: 'flex', gap: '30px', justifyContent: 'space-between' }}>
        {movies.map((movie) => (
          <img key={movie.id} src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} style={{width:'20%', borderRadius:"10px"}} />
        )).filter((ele,index)=>index<4)}
      </div>
    </div>
  );
}

export default Gener;

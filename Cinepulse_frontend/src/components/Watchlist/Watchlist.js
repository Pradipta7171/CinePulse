import React from 'react';
import './Watchlist.css'; 

const Watchlist = () => {
  const movies = [
    {
      title: 'Jailer',
      genre: 'Action',
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BNDA5YzlhNjItMDgxNC00MjQ4LWIzMDMtYTUyMzBhNjViNDk3XkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg',
    },
    {
      title: 'The Kings Men',
      genre: 'Action',
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMDEzZDY2ZDktNTlmOS00NThjLThkNTEtMjE5MzI5NWEwZmRjXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg',
    },
    {
      title: 'Evil Dead Rise',
      genre: 'Horror',
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMmZiN2VmMjktZDE5OC00ZWRmLWFlMmEtYWViMTY4NjM3ZmNkXkEyXkFqcGdeQXVyMTI2MTc2ODM3._V1_FMjpg_UX1000_.jpg',
    },
    {
      title: 'Fast X',
      genre: 'Action',
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BNzZmOTU1ZTEtYzVhNi00NzQxLWI5ZjAtNWNhNjEwY2E3YmZjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg',
    },
    {
      title: 'John Wick 4',
      genre: 'Action',
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg',
    },
    {
      title: 'Free Guy',
      genre: 'Comedy',
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BOTY2NzFjODctOWUzMC00MGZhLTlhNjMtM2Y2ODBiNGY1ZWRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
    },
    {
      title: 'Dolittle',
      genre: 'Comedy',
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMDNkODA5ZGQtODczOS00OTQxLThhMTItMjk0ZmNhMDM0YjNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
    },
    {
      title: 'Thor-Love & Thunder',
      genre: 'Sci-Fi',
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
    },
  ];

  return (
    <div className="watchlist-contain">
      <h1>What to Watch - <span className="glowing-text">CINEPULSE</span></h1>
      <div className="movielist-contain">
        {movies.map((movie, index) => (
          <div className="moviecard-container" key={index}>
            <img src={movie.imageUrl} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>Genre: {movie.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watchlist;

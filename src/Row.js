import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import styled from 'styled-components';
import axios from './axios';
import requests from './requests';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || '')
        .then((url) => {
          // https://www.youtube.com/watch?v=PaumIOvp7mM&ab_channel=MovieclipsTrailers
          // the get('v') is for to give me on the 'v' value in the URL
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((err) => console.log(err));
    }
  };

  // console.table(movies);
  // console.log(movies);

  return (
    <RowContainer>
      <h2>{title}</h2>
      <RowPosters>
        {movies.map((movie) => (
          <ImageRowPoster
            className={`image_row_poster ${isLargeRow && 'row_posterLarge'}`}
            key={movie.id}
            onClick={() => handleClick(movie)}
            src={`${requests.baseImagesUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </RowPosters>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </RowContainer>
  );
}

export default Row;

const RowContainer = styled.div`
  margin-left: 20px;
  cursor: pointer;
`;

const RowPosters = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ImageRowPoster = styled.img`
  object-fit: contain;
  width: 100%;
  max-height: 100px;
  margin-right: 10px;
  transition: transform 450ms;
  &:hover {
    transform: scale(1.08);
    opacity: 1;
  }
  &.row_posterLarge {
    max-height: 250px;
    &:hover {
      transform: scale(1.09);
      opacity: 1;
    }
  }
`;

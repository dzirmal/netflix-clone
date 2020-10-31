import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from './axios';
import requests from './requests';

import { Button } from '@material-ui/core';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  // console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <Header
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
      }}>
      <BannerContents>
        <Title>{movie?.title || movie?.name || movie?.original_name}</Title>
        <DivButton>
          <Button
            style={{
              backgroundColor: 'rgba(51,51,51,0.5)',
              marginRight: '1rem',
              color: 'white',
            }}>
            Play
          </Button>
          <Button
            style={{
              backgroundColor: 'rgba(51,51,51,0.5)',
              marginRight: '1rem',
              color: 'white',
            }}>
            My List
          </Button>
        </DivButton>

        <Description>{truncate(movie?.overview, 150)}</Description>
      </BannerContents>
      <FadeBottom className='banner--fadeBottom'></FadeBottom>
    </Header>
  );
}

export default Banner;

const Header = styled.header`
  background-size: cover;
  object-fit: contain;
  background-position: center center;
  height: 448px;
`;

const BannerContents = styled.div`
  margin-left: 30px;
  padding-top: 140px;
  height: 190px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
`;

const DivButton = styled.div``;

const Description = styled.h1`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 0.8rem;
  max-width: 360px;
  height: 80px;
`;

const FadeBottom = styled.div`
  height: 7.4rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;

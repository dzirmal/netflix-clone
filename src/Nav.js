import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <NavContainer className={`nav ${show && 'nav__black'}`}>
      <img
        className='logo'
        src='http://pngimg.com/uploads/netflix/netflix_PNG32.png'
        alt='Netflix Logo'
      />
      <img
        className='avatar'
        src='http://pngimg.com/uploads/avatar/avatar_PNG39.png'
        alt='Your Avatar'
      />
    </NavContainer>
  );
}

export default Nav;

const NavContainer = styled.div`
  z-index: 1;

  transition-timing-function: ease-in;
  transition: all 0.5s;
  &.nav {
    display: flex;
    position: fixed;
    width: 100%;
    height: 30px;
    padding: 20px;
    top: 0;
    justify-content: space-between;
  }
  &.nav__black {
    background-color: #111;
  }

  & > img {
    &.logo {
      position: fixed;
      left: 20px;
      width: 80px;
      object-fit: contain;
    }
    &.avatar {
      position: fixed;
      right: 20px;
      width: 30px;
      object-fit: contain;
    }
  }
`;

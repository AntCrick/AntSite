import React from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from 'react-scroll';
import twitterLogo from '../icons/twitter.png';

const scrollToTop = () => {
  scroll.scrollToTop();
};

const NavBarContainer = styled.div`
  height: 3rem;
  position: fixed;
  top: 0px;
  width: 100%;
  background-color: grey;
  border: 1px solid #e5e7e9;
  border-radius: 3px;
`;

const NavItems = styled.ul`
  padding-left: 10rem;
  padding-right: 2rem;
  float: right;
  li {
    display: inline;
    margin-left: 10px;
    margin-right: 10px;
    :active {
      border-bottom: 1px solid white;
    }
  }
`;

const HomeLogo = styled.img`
  width: 35px;
  height: 35px;
  padding: 0.3rem;
`;

const NavBar = () => {
  return (
    <NavBarContainer id="navbar">
      <HomeLogo alt="Homelogo" src={twitterLogo} onClick={scrollToTop} />

      <NavItems>
        <li key="home" className="nav-item">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li key="aboutme" className="nav-item">
          <Link
            activeClass="active"
            to="aboutme"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About Me
          </Link>
        </li>
        <li key="skills" className="nav-item">
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li key="history" className="nav-item">
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Experience
          </Link>
        </li>
        <li key="contactme" className="nav-item">
          <Link
            activeClass="active"
            to="contactme"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact Me
          </Link>
        </li>
      </NavItems>
    </NavBarContainer>
  );
};

export default NavBar;

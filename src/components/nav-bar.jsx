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
  display: block;
  grid-template-columns: 15% 85%;
`;

const NavBarGrid = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
`;

const NavItems = styled.ul`
  float: right;
  padding-left: 0px;
  li {
    display: inline;
    margin-left: 5px;
    margin-right: 5px;
    @media screen and (min-width: 992px) {
      margin-left: 10px;
      margin-right: 10px;
    }

    :active {
      border-bottom: 1px solid white;
    }
  }
`;
const Nav = styled.div``;
const HomeLogo = styled.img`
  width: 35px;
  height: 35px;
  padding: 0.3rem;
`;

const NavBar = () => {
  return (
    <NavBarContainer id="navbar">
      <NavBarGrid>
      <HomeLogo alt="Homelogo" src={twitterLogo} onClick={scrollToTop} />
      <Nav>
        <NavItems>
          <li key="aboutme">
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
          <li key="skills">
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
          <li key="history">
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
          <li key="contactme">
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
      </Nav>
      </NavBarGrid>
    </NavBarContainer>
  );
};

export default NavBar;

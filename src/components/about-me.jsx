import React from 'react';
import styled from 'styled-components';

const AboutMeContainer = styled.div`
  height: 50rem;
  background-color: white;
`;

const AboutMe = ({ id }) => {
  return <AboutMeContainer id={id}>About Me</AboutMeContainer>;
};

export default AboutMe;

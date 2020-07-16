import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  height: 25rem;
  background-color: lightgray;
  text-align: center;
  margin-top: 3rem;
`;

const Name = styled.div`
  margin: 0.5rem;
  font-size: 5rem;
  color: blue;


`;
const Job = styled.div`
  font-size: 3rem;
`;

const Home = ({ id }) => {
  return (
  <HomeContainer id={id}>
    <Name>Anthony Crick</Name>
    <Job>Software Developer</Job>
  </HomeContainer>)  ;
};

export default Home;

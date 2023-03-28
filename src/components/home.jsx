import React from 'react';
import styled from 'styled-components';
import view from '../images/view.jpg';

const HomeContainer = styled.div`
  background-color: #cccccc;
  background-image: url(${view});
  background-repeat: no-repeat;
  background-attachment: fixed;
  text-align: center;
  margin-top: 3rem;
  height: 80vh;
  border-bottom: 5px solid rgba(0, 0, 0, 0.120);
  box-shadow: rgb(0 0 0 / 20%) 0px 1px 0px;

`;

const Name = styled.div`
  margin: 0.5rem;
  font-size: 5rem;
  color: white;
  padding-top: 5rem;
`;

const Job = styled.div`
  font-size: 3rem;
  color: white;
`;

const Home = ({ id }) => {
  return (
  <HomeContainer id={id}>
    <Name>Ant</Name>
    <Job>Software Developer</Job>
  </HomeContainer>)  ;
};

export default Home;

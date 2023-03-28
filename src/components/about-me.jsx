import React from 'react';
import styled from 'styled-components';

const AboutMeContainer = styled.div`
  background-color: rgb(247, 247, 247);
  justify-content: center;
  padding: 5px;
  display: grid;
  align-content: center;
  grid-template-columns: 1fr, 1fr;
  grid-gap: 20px;
  column-gap: 10px;
  text-align: center;
`;

const Statement = styled.div`
  font-size: 1rem;
  padding: 2px;
`;

const StatementContainer = styled.div`
padding-top: 10px;
`;

const PictureContainer = styled.div`
    height: 10%;
    width: 22rem;
    align-content: center;
    margin-left: auto;
    margin-right: auto;
  img{
    object-fit: scale-down;
    width: inherit;
    height: auto;
    box-shadow: rgb(0 0 0 / 18%) 0px 1px 6px;
    border-radius: 0.25rem;
    border: 8px solid lightgray;
  }
`;

const statementText1 = `` 
const statementText3 = ``;

const AboutMe = ({ id }) => {
  return (
  <AboutMeContainer id={id}>
    <h2>About Me</h2>
    <StatementContainer class="Text">
      <Statement >{statementText1}</Statement>
      <Statement>{statementText3}</Statement>        
    </StatementContainer>    
    <PictureContainer class="Picture">
      </PictureContainer>  
  </AboutMeContainer>);
};

export default AboutMe;

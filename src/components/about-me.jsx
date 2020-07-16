import React from 'react';
import styled from 'styled-components';
import MrBlobby from '../images/Mr_Blobby_2009.jpg'

const AboutMeContainer = styled.div`
  height: 25rem;
  background-color: whitesmoke;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 1rem;
`;

const Statement = styled.div`
  margin: 0.5rem;
  font-size: 0.8rem;
  color: black;
  padding: 10px;
`;
const StatementContainer = styled.div`
`;
const Picture = styled.img`
    padding: 0.5rem;
    margin: auto;
`;

const statementText1 = `Hi, I'm Anthony. I'm a software developer based in Manchester, England`
const statementText2 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
const statementText3 = `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`

const AboutMe = ({ id }) => {
  return (
  <AboutMeContainer id={id}>
    <StatementContainer>
      <Statement>{statementText1}</Statement>
      <Statement>{statementText2}</Statement>
      <Statement>{statementText3}</Statement>        
    </StatementContainer>    
    <Picture src={MrBlobby}/>  
  </AboutMeContainer>)  ;
};

export default AboutMe;

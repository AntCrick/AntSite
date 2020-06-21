import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  height: 50rem;
  background-color: grey;
`;

const Skills = ({ id }) => {
  return <SkillsContainer id={id}>Skills</SkillsContainer>;
};

export default Skills;

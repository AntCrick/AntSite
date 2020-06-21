import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.div`
  width: 100%;
  height: 50rem;
`;
const Experience = ({ id }) => {
  return (
    <ExperienceContainer id={id}>
      <div>Experience</div>
    </ExperienceContainer>
  );
};

export default Experience;

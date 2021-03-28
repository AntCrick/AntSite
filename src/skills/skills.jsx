import React from 'react';
import styled from 'styled-components';
import { mySkills } from "./skill-items.json";

const SkillsContainer = styled.div`
  background-color: white;
  align-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.120);
  box-shadow: rgb(0 0 0 / 20%) 0px 1px 6px;
  word-wrap: break-word;
`;
const SkillHeader = styled.h2`
  text-align: center;
  margin-top: 0;
`;
const SkillTitle = styled.h3`
  font-size: 1.25rem;
  flex-basis: 100%;
  text-align: right;

  @media (max-width: 767px) {
    font-size: 1rem;
    flex-basis: 30%;
  }

`;
const SkillInfo = styled.ul`
  font-size: 1.20rem;
  flex-basis: 100%;
  list-style: none;
  @media (max-width: 767px) {
    font-size: 0.9rem;
    flex-basis: 70%;
  }
  li{ 
    float: left;
    margin-right: 10px;
    &:after {
      content: ', '
    }
    &:last-of-type {
      &:after {
        content: ' '
      }
    }
  }
`;
const StyledSkill = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
    p {
      margin-bottom: 0; 
    }
`;

const Skills = ({ id }) => {
  return <SkillsContainer id={id}>
    <SkillHeader>Skills</SkillHeader>
    {mySkills.map((item) => {
      return (
        <StyledSkill key={item.id}>
          <SkillTitle>{item.title}:</SkillTitle>
          <SkillInfo>
            {item.skills.map((skill, index) => (
              <li key={index}>
                {skill}
              </li>
            ))}
          </SkillInfo>
        </StyledSkill>
      )
    })}

  </SkillsContainer>;
};

export default Skills;

import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ContactMeContainer = styled.div`
  height: 5rem;
  background-color: whitesmoke;
  padding-top: 15px;
`;

const OptionContainer = styled.div`
  text-align: center;
  a{
    padding-right: 30px;
    padding-left: 30px;
    color: black;
    :hover {
        color: lightblue;
  }
}
`;

const options = [
  {}
];

const ContactMe = ({ id }) => {
  const size = "3x";
  return (
    <ContactMeContainer id={id}>
      <OptionContainer>
        {options.map(op => {
          return (
            <a
              href={op.link}
              key={op.type}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={op.icon} size={size}/>
            </a>
          );
        })}
      </OptionContainer>
    </ContactMeContainer>
  );
};

export default ContactMe;

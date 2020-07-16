import React from 'react';
import styled from 'styled-components';
import TwitterIcon from '../icons/twitter.png';
import LinkedInIcon from '../icons/linkedin.png';
import GitHubIcon from '../icons/github.png';
import EmailIcon from '../icons/email.png';

const ContactMeContainer = styled.div`
  height: 5rem;
  background-color: lightgray;
  padding-top: 5px;
`;

const OptionContainer = styled.div`
  text-align: center;
`;
const Icon = styled.img`
  height: 50px;
  width: 50px;
  padding-left: 20px;
  padding-right: 20px;
`;

const options = [
  {
    type: 'Email',
    link: 'mailto:anthonycrick1@gmail.com',
    icon: EmailIcon
  },
  {
    type: 'LinkedIn',
    link: 'https://www.linkedin.com/in/anthony-crick-a1694076/',
    icon: LinkedInIcon
  },
  {
    type: 'Github',
    link: 'https://www.github.com/AntCrick',
    icon: GitHubIcon
  },
  {
    type: 'Twitter',
    link: 'https://www.twitter.com/AntCrick',
    icon: TwitterIcon
  }
];

const ContactMe = ({ id }) => {
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
              <Icon src={op.icon} />
            </a>
          );
        })}
      </OptionContainer>
    </ContactMeContainer>
  );
};

export default ContactMe;

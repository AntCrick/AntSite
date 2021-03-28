import React from 'react';
import ContactMe from './components/contact-me';
import AboutMe from './components/about-me';
import Home from './components/home';
import Skills from './skills/skills';
import NavBar from './components/nav-bar';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Home id="home" />
      <AboutMe id="aboutme" />
      <Skills id="skills" />
      <ContactMe id="contactme" />
    </div>
  );
};

export default App;

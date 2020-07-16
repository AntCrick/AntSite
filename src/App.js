import React from 'react';
import ContactMe from './components/contact-me';
import Experience from './components/experience';
import AboutMe from './components/about-me';
import Home from './components/home';
import Skills from './components/skills';
import NavBar from './components/nav-bar';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Home title="home" id="home" />
      <AboutMe title="aboutme" id="aboutme" />
      <Skills title="skills" id="skills" />
      <Experience title="experience" id="experience" />
      <ContactMe title="contactme" id="contactme" />
    </div>
  );
};

export default App;

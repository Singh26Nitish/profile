import React from 'react';
import { useEffect } from 'react';
import Logo from "./Logo";


function Header() {
        const homeRef = React.useRef(null);
        const projectRef = React.useRef(null);
        const aboutRef = React.useRef(null);

        useEffect(() => {
            homeRef.current = document.getElementById('home');
            projectRef.current = document.getElementById('project');
            aboutRef.current = document.getElementById('about');
        }, []);
  return (
    <>
      <header className="z-1 flex justify-between sticky top-0 h-16 bg-navcol bg-opacity-30 backdrop-blur-lg rounded-lg">
        <Logo />

        <Nav 
        homeRef={homeRef}
        projectRef={projectRef} 
        aboutRef={aboutRef}
        />

      </header>
    </>
  )
}

// Nav component
const Nav = ({homeRef, projectRef, aboutRef}) => {

  return (
    <>
      <ul className="flex justify-end items-center mr-4 text-lg">
        <button className="m-4" onClick={() => scrollToSection(homeRef)}>Home</button>
        <button className="m-4" onClick={() => scrollToSection(projectRef)}>Projects</button>
        <button className="m-4" onClick={() => scrollToSection(aboutRef)}>About</button>
      </ul>
    </>
  );

}

const scrollToSection = (sectionRef) => {
  if (sectionRef.current) {
    sectionRef.current.scrollIntoView({
      behavior: "smooth"
    });
  }
}

export default Header;
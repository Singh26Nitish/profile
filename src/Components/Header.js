import React from 'react';
import Logo from "./Logo";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="z-1 flex justify-between sticky top-0 h-16 bg-navcol bg-opacity-30 backdrop-blur-lg rounded-lg">
        <Link to="/"><Logo /></Link>
        <Nav />

      </header>
    </>
  )
}

// Nav component
const Nav = () => {

  return (
    <>
      <ul className="flex justify-end items-center mr-4 text-lg">
        <button className="m-4" ><Link to="/">Home</Link></button>
        <button className="m-4" ><Link to="/project">Project</Link></button>
        <button className="m-4" ><Link to="/about">About</Link></button>
      </ul>
    </>
  );

}


export default Header;
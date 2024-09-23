import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="relative w-full font-poppins">
      {/* <div className="bg-light flex text-font justify-around p-3 mx-rounded-3xl text-xl thin-border ">  */}
      <div className="bg-light flex text-font justify-around p-3 mx-rounded-3xl text-xl sm:text-sm border border-white rounded-lg thin-border sm:border-r-0 sm:border-t-0 sm:rounded-tl-none sm:rounded-br-none">

        
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "font-bold text-high" : "font-bold text-font" 
          }
        >
          About me
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            isActive ? "font-bold text-high" : "font-bold text-font"
          }
        >
          Resume
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive ? "font-bold text-high" : "font-bold text-font"
          }
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "font-bold text-high" : "font-bold text-font"
          }
        >
          Blog
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;

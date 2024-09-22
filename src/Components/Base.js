import React from "react";
import Aside from "./Aside";
import Home from "./Home";

function Base() {
  return (
    <div className="sm:flex sm:p-6 sm:my-auto sm:h-screen">
      <Aside />
      <Home />
    </div>
  );
}

export default Base;

// px-24 pt-16 flex 
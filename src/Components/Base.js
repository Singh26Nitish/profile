import React from "react";
import Aside from "./Aside";
import Home from "./Home";

function Base() {
  return (
    <div className="flex-col">
      <Aside />
      <Home />
    </div>
  );
}

export default Base;

// px-24 pt-16 flex 
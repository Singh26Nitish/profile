import React from "react";
import Aside from "./Aside";
import Home from "./Home";

function Base() {
  return (
    <div className="px-24 pt-16 flex">
      <Aside />
      <Home />
    </div>
  );
}

export default Base;

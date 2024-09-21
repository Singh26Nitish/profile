import React from "react";
import Project from "../Components/Project";

function Portfolio(){
  return(
    <>
      <section className="">
            <h1 className="text-5xl font-bold relative inline-block mb-5 font-poppins text-font">
              Portfolio
                        <span className="absolute left-0 -bottom-2 w-12 h-1 bg-high"></span>
                    </h1>
      </section>
      <section>
                <div className="text-white h-auto">
                <Project />
                </div>
      </section>
    </>
  )
}

export default Portfolio;
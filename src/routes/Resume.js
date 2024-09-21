import React from "react";
import EducationTimeline from "../Components/EducationTimeline";

function Resume(){
    return(
        <section className="">
            <div>
            <h1 className="text-5xl font-bold relative inline-block mb-5 font-poppins text-font">
                        About me
                        <span className="absolute left-0 -bottom-2 w-12 h-1 bg-high"></span>
                    </h1>
            </div>

            <div>
                <div className="text-white">
                <EducationTimeline />
                </div>
            </div>
        </section>
    )
}

export default Resume;
import React from "react";

function About() {
    return (
        <>
            <section className="mb-4 ">
                <h1 className="text-5xl font-bold relative inline-block mb-5 font-poppins text-font">
                    About me
                    <span className="absolute left-0 -bottom-2 w-12 h-1 bg-high"></span>
                </h1>
                <p className="text-lg mb-4 text-font-dark">
                    My passion for technology began early, guiding me to pursue a degree in Computer Science. I explored languages like C, C++, Python, and Java, but web development, particularly the frontend, captivated me the most.
                </p>
                <p className="text-lg text-font-dark">
                    Now, I'm focused on mastering frontend technologies, especially React.js, to build engaging and dynamic web experiences.
                </p>
            </section>

            <section className="mt-6">
                <h1 className="text-4xl font-bold relative inline-block mb-5 font-poppins">What Am I Doing?</h1>
                <div className="flex flex-wrap justify-around">
                    {/* First Card */}
                    <div className="rounded-lg p-6 w-2/5 shadow-lg bg-content">
                        <div className="flex items-center">
                            <div>
                                <h2 className="text-xl font-semibold">Frontend Developer</h2>
                                <p>I create modern and advanced websites and applications with React, a JavaScript framework.</p>
                            </div>
                        </div>
                    </div>

                    {/* Second Card */}
                    <div className="rounded-lg p-6 w-2/5 shadow-lg bg-content">
                        <div className="flex items-center">
                            <div>
                                <h2 className="text-xl font-semibold">Position</h2>
                                <p>Currently working as a software developer Intern at a startup, working with Angular.</p>
                            </div>
                        </div>
                    </div>

                    {/* Third Card */}
                    <div className="rounded-lg p-6 w-2/5 shadow-lg mt-4 mx-auto bg-content">
                        <div className="flex items-center">
                            <div>
                                <h2 className="text-xl font-semibold">Side stuff</h2>
                                <p>Trying to learn Linux for fun.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;

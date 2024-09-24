import React from "react";

function About() {
    return (
        <>
            <section className="mb-4">
                <h1 className="text-4xl sm:text-3xl font-bold relative inline-block mb-5 font-poppins text-font">
                    About me
                    <span className="absolute left-0 -bottom-2 w-12 h-1 bg-high"></span>
                </h1>
                <p className="text-lg sm:text-sm mb-4 text-font-dark">
                    I’m Nitish, a frontend developer with a passion for creating clean, responsive, and dynamic web experiences. With a background in Computer Science, I’ve explored different programming languages, but web development, especially React.js, is where I thrive.
                </p>
                <p className="text-lg sm:text-sm text-font-dark">
                    I build fast, user-friendly websites and apps that not only look great but also work seamlessly. If you're looking for someone who can turn your ideas into engaging digital experiences, let’s make it happen!
                </p>
            </section>

            <section className="mt-6">
                <h1 className="text-3xl sm:text-2xl font-bold relative inline-block mb-5 font-poppins">What Am I Doing?</h1>
                <div className="flex-col flex-wrap justify-around">
                    {/* First Card */}
                    <div className="rounded-lg p-4 shadow-lg bg-content my-2 sm:w-2/3">
                        <div className="flex items-center">
                            <div>
                                <h2 className="text-xl font-semibold">Frontend Developer</h2>
                                <p>I create modern and advanced websites and applications with React, a JavaScript framework.</p>
                            </div>
                        </div>
                    </div>

                    {/* Second Card */}
                    <div className="rounded-lg p-4 shadow-lg bg-content my-2 sm:w-2/3">
                        <div className="flex items-center">
                            <div>
                                <h2 className="text-xl font-semibold">Position</h2>
                                <p>Currently working as a software developer Intern at a startup, working with Angular.</p>
                            </div>
                        </div>
                    </div>

                    {/* Third Card */}
                    <div className="rounded-lg p-4  shadow-lg bg-content my-2 sm:w-2/3">
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

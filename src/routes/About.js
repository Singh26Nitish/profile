import React from "react";
import Aabout from "../Components/resource/intro.jpg";
import Socials from "../Components/Socials";
import Blogs from "../Components/Blogs";
import Header from "../Components/Header";
import Footer from "../Components/Footer";


function About() {
    return(
        <>
        <Header />
        <section className="flex h-screen">
            <div className="md:flex w-4/5 mx-auto my-auto">
                <img alt="about" src={Aabout} className="w-3/5 my-auto mx-auto rounded-lg md:w-1/5 md:mt-28"/>
                <div className="my-auto mx-auto px-4 text-xl">
                    <p>From an early age, I wanted to work with technology, I had an interest in science-building school projects 
                        at my university I took computer science and my coding journey began. I learned many languages like c, c++,
                         python, and Java but in all that web development amazed me the most so I started learning web development
                          side by side with my graduation especially since I liked the frontend part like how we can build different
                           designs and share it with others easily. Early I had a subject based on web development so from there I 
                           learned the basics of HTML and CSS then started learning javascript to build some projects currently I m 
                           looking for a job in the frontend field and learning React framework, for new developers learning web 
                           development I like to say hang in there with time it all start make sense, thanks for reading this far.
                    </p>
                </div>
            </div>
        </section>
        <section>
            <Socials />
        </section>
        <section>
            <Blogs />
        </section>
        <Footer />
        </>
    );
}

export default About;
import React from "react";
import profile from "../Components/resource/profile.png";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Home() {
    return(
        <>
            <Header />
            <section className="h-screen flex justify-center items-center">
                {/* <div className="flex items-center md:items-center md:flex-row md:w-4/5 ">
                    <img src={profile} alt="profile" className="z-0 w-2/5 my-auto  transition hover:scale-105 -translate-y-2 rounded-lg mt-6"/>
                    <div className="items-center m-auto ">
                        <h3 className="text-2xl ">I'm <span className="text-5xl">Nitish Singh</span></h3>
                        <h3 className="text-2xl ">A FrontEnd Developer</h3>
                        <span className="mt-5 text-2xl">Open to work</span>
                    </div>
                </div> */}
                <div className="flex flex-col items-center justify-center md:flex-row md:items-center">
                    <img src={profile} alt="profile" className="w-1/5 mr-10" />
                    <div className="ml-10">
                        <h3 className="text-2xl ">I'm <span className="text-5xl">Nitish Singh</span></h3>
                        <h3 className="text-2xl ">A FrontEnd Developer</h3>
                        <span className="mt-5 text-2xl">Open to work</span>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Home;
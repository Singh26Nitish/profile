import React from "react";
import Navbar from "./Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "../routes/About";
import Resume from "../routes/Resume";
import Portfolio from "../routes/Portfolio";
import Blog from "../routes/Blog";

function Home() {
    return (
        <section className="bg-light m-2 text-font rounded-3xl thin-border flex flex-col justify-between overflow-auto overscroll-none">
            <Navbar />
            <div className="flex-1 p-2 pt-2">
                <div className="flex-1 p-2 pt-2">
                    <Routes>
                        {/* Redirect the root path to /about */}
                        <Route className="mx-1" path="/" element={<Navigate to="/about" replace />} />
                        <Route className="mx-1" path="/about" element={<About />} />
                        <Route className="mx-1" path="/resume" element={<Resume />} />
                        <Route className="mx-1" path="/portfolio" element={<Portfolio />} />
                        <Route className="mx-1" path="/blog" element={<Blog />} />
                    </Routes>
                </div>
            </div>
        </section>
    );
}

export default Home;

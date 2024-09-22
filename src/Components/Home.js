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
            <div className="flex-1 p-8 pt-6">
                <div className="flex-1 p-8 pt-6">
                    <Routes>
                        {/* Redirect the root path to /about */}
                        <Route path="/" element={<Navigate to="/about" replace />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/blog" element={<Blog />} />
                    </Routes>
                </div>
            </div>
        </section>
    );
}

export default Home;

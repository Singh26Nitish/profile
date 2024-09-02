import React from "react";
import Navbar from "./Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "../routes/About";
import Resume from "../routes/Resume";
import Portfolio from "../routes/Portfolio";
import Blog from "../routes/Blog";

function Home() {
    return (
        <section className="w-4/5 bg-light text-font rounded-3xl thin-border">
            <Navbar />
            <div className="content p-8 pt-6">
                <Routes>
                    {/* Redirect the root path to /about */}
                    <Route path="/" element={<Navigate to="/about" replace />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </div>
        </section>
    );
}

export default Home;

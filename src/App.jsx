//import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

import { useTheme } from "./ThemeContext.jsx";

import BinaryRain from "./components/BinaryRain.jsx";
import Home from "./components/Home.jsx";
import Posts from "./components/Posts.jsx";
import Projects from "./components/Projects.jsx";

import './App.css';

import lightBG from "./assets/light-bg.png";
import darkBG from "./assets/dark-bg.png";

function App() {
  const { binaryOn, toggleBinary } = useTheme();

  return (
    <>
      <motion.div
        className="background-layer dark-bg"
        style={{ backgroundImage: `url(${darkBG})`, backgroundSize: "cover", backgroundPosition: "center" }}
        animate={{ opacity: binaryOn ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="background-layer light-bg"
        style={{ backgroundImage: `url(${lightBG})`, backgroundSize: "cover", backgroundPosition: "center" }}
        animate={{ opacity: binaryOn ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      {binaryOn && <BinaryRain />}
      <Router>
        <div className={binaryOn ? "home-dark" : "home-light"}>
          <nav className="nav-bar">
            <Link to="/">HOME</Link>
            <Link to="/projects">PROJECTS</Link>
            <Link to="/posts">POSTS</Link>
            <button onClick={toggleBinary} className="binary-toggle">
              <span className="binary-star">{binaryOn ? "⭑.ᐟ" : "ִ ࣪𖤐"}</span>
            </button>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
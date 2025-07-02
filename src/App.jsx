import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import { AnimatePresence, motion } from "framer-motion";

import BinaryRain from "./components/BinaryRain.jsx";
import Home from "./components/Home.jsx";
import Posts from "./components/Posts.jsx";
import Projects from "./components/Projects.jsx";

import './App.css';

//import lightBG from "./assets/light-bg.png";

function App() {
  const [binaryOn, setBinaryOn] = useState(true);

  const toggleBinary = () => {
    setBinaryOn((prev) => !prev);
  };


  return (
    <>
      {binaryOn && <BinaryRain />}
      <Router>
        <nav className="nav-bar">
          <Link to="/">HOME</Link>
          <Link to="/projects">PROJECTS</Link>
          <Link to="/posts">POSTS</Link>
          <button onClick={toggleBinary} className="binary-toggle">
            <span className="binary-star">{binaryOn ? "⭑.ᐟ" : "·"}</span>
          </button>
        </nav>
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
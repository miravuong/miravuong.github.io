import { useTheme } from "../ThemeContext";
import React from 'react';
import flower from '/src/assets/glily-bg.png';
import './Home.css'

export default function Home() {
    const { binaryOn } = useTheme();

    return (
        <div className="page-container">
            <img src={flower} alt="flower" className="background-flower" />
            <div className={binaryOn ? "home-dark" : "home-light"}>
                <div className="content-group">
                    <h1 className="hacker-title">Mirabel Vuong</h1>
                    <p className="hacker-description">
                // Hello! I'm currently a CS and Ling student at UCLA. Looking
                        to explore cybersecurity and software development.
                    </p>
                    <div className="social-links">
                        <a href="https://linkedin.com/in/mirabel-vuong-a36473364" target="_blank" rel="noopener noreferrer">
                            ᯓ★ linkedin
                        </a>
                        <a href="https://github.com/miravuong" target="_blank" rel="noopener noreferrer">
                            ᯓ★ github
                        </a>
                        <a
                            href="public/Resume_Mirabel_copy.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ᯓ★ resume
                        </a>
                    </div>
                </div>
            </div>
        </div>


    );



}


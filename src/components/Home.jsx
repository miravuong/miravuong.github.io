import React from 'react';
import flower from '/src/assets/glily-bg.png';
import './Home.css'

export default function Home() {

    return (
        <div className="page-container">
            <img src={flower} alt="flower" className="background-flower" />
            <div className="content-group">
                <h1 className="hacker-title">Mirabel Vuong</h1>
                <p className="hacker-description">
                // Hello! I'm currently a CS and Ling student at UCLA. Looking
                    to explore cybersecurity and software development.
                </p>
            </div>
        </div>


    );



}


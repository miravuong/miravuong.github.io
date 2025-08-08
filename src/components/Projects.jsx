import React from 'react';
import { useTheme } from "../ThemeContext";
import Project from './Project';
import "./Projects.css";

const projects = [
    {
        title: 'Group Bot Signature',
        description: 'Prototype implementation of HTTP Message Signatures using BBS group signatures for privacy-preserving bot authentication and accountability.',
        url: 'https://github.com/pbrucla/group-bot-signatures',
        techstack: 'Python, SageMath'
    },

    {
        title: 'Adversarial Robustness Testing of CNNs with FGSM',
        description: 'An adversarial ML attack pipeline implementation using PyTorch and FGSM to test convolutional neural network (CNN) vulnerability to small, imperceptible perturbations.',
        url: 'https://github.com/miravuong/art-cnn',
        techstack: 'Python (library: Pytorch), Google Colab (Visualizations)'
    },

    {
        title: 'CreativeLabs @ UCLA: BruinWatch',
        description: 'Upload lectures to generate AI transcript notes and live chat.',
        url: 'https://github.com/CKKC15/BruinWatch',
        techstack: 'React, Node.js, Express, MongoDB, JWT (JSON Web Token), OpenAI/Gemini API'

    },

    {
        title: 'ACM TeachLA: Cookie Jar',
        description: 'Web application to teach children about website cookies!',
        url: 'https://github.com/uclaacm/cookie-jar',
        techstack: 'React, Typescript, Node.js, MongoDB'
    },

    {
        title: 'COM SCI 35L Recipe App',
        description: 'Web application for users to upload and share recipes.',
        url: 'https://github.com/hungrychen/recipe-app',
        techstack: 'React, Node.js, Express, MongoDB'
    }

]

export default function Projects() {
    const { binaryOn } = useTheme();

    return (
        <div className={binaryOn ? "projects-dark" : "projects-light"}>
            <main className="projects-container">
                {projects.map((proj, idx) => (
                    <Project key={idx} title={proj.title} description={proj.description} url={proj.url} techstack={proj.techstack} />
                ))}
            </main>
        </div>


    );



}

import React from 'react';
import { useTheme } from "../ThemeContext";
import "./Projects.css";

export default function Projects() {
    const { binaryOn } = useTheme();

    return (
        <div className={binaryOn ? "projects-dark" : "projects-light"}>
            <p>Insert projects here</p>
        </div>


    );



}

import React from 'react';
import { useTheme } from "../ThemeContext";
import "./Posts.css";


export default function Posts() {
    const { binaryOn } = useTheme();

    return (
        <div className={binaryOn ? "posts-dark" : "posts-light"}>
            <p>Insert posts here</p>
        </div>


    );



}

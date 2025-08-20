import React from 'react';
import { useTheme } from "../ThemeContext";
import "./Posts.css";
import Post from "./Post";

const posts = [
    {
        title: '07.15.25 // Food Review',
        url: 'https://www.tiktok.com/@digital.camira/video/7528292285201567031?is_from_webapp=1&sender_device=pc&web_id=7297829114043614750'
    },

    {
        title: '04.11.23 // STEM Events',
        url: 'https://drive.google.com/drive/folders/1V4ApnOtEiR829Rs0KzRe1aTPPKtawpR9?usp=sharing'
    }
]


export default function Posts() {
    const { binaryOn } = useTheme();

    return (
        <div className={binaryOn ? "posts-dark" : "posts-light"}>
            <p className='posts-header'>I post cybersecurity videos and lifestyle content!</p>
            <main className="posts-container">
                {posts.map((proj, idx) => (
                    <Post key={idx} title={proj.title} url={proj.url} />
                ))}
            </main>
        </div>


    );



}

import React from 'react';

export default function Project({ title, description, url, techstack }) {
    return (
        <section className="project">
            <a href={url} className="project-title" target="_blank" rel="noopener noreferrer">
                {title}
            </a>
            <p className="project-techstack">{techstack}</p>
            <p className="project-description">{description}</p>
        </section>
    );
}
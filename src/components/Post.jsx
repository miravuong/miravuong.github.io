import React from 'react';

export default function Post({ title, url }) {
    return (
        <section className="post">
            <a href={url} className="post-title" target="_blank" rel="noopener noreferrer">
                {title}
            </a>
        </section>
    );
}
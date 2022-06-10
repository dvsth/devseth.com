import React from 'react'

export default function Link({ text, href }) {
    return (
        <a href={href}>{text}</a>
    );
}
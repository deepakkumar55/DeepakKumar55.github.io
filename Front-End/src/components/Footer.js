import React from 'react';
import '../CSS/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/project">Project</Link>
                </li>
                <li>
                    <Link to="/photos">Photos</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Footer;



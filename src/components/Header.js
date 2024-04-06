import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaEnvelope, FaProjectDiagram, FaCamera, FaBlog } from 'react-icons/fa';
import '../CSS/Header.css';

const Header = () => {
    const location = useLocation(); // Get the current location
    const navItems = [
        { path: '/', name: 'Home', icon: <FaHome />, isActive: location.pathname === '/' },
        { path: '/about', name: 'About', icon: <FaUser />, isActive: location.pathname === '/about' },
        { path: '/contact', name: 'Contact', icon: <FaEnvelope />, isActive: location.pathname === '/contact' },
        { path: '/project', name: 'Project', icon: <FaProjectDiagram />, isActive: location.pathname === '/project' },
        { path: '/photos', name: 'Photos', icon: <FaCamera />, isActive: location.pathname === '/photos' },
        { path: '/blog', name: 'Blog', icon: <FaBlog />, isActive: location.pathname === '/blog' }
    ];

    return (
        <header className="header">
            <nav>
                <ul className="nav-list">
                    {navItems.map((item, index) => (
                        <li key={index} className={`nav-item  ${item.isActive ? 'active' : ''}`}>
                            <Link to={item.path} className={`nav-link `}>
                                <h2 className="icon">{item.icon}</h2>
                                <h3 className="name">{item.name}</h3>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;

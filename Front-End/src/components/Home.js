import React from 'react';
import '../CSS/Home.css';
import profilePhoto from '../Image/profile-photo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <div className="home-content">
            <div className="left-content">
                <img src={profilePhoto} alt="Profile" className="profile-photo" />
            </div>
            <div className="right-content">
                <h1> I'm Deepak Kumar. <br /><span>MERN STACK Developer</span></h1>
                <p>MERN STACK Developer, Passionate about nature photography and problem-solving, always ready to learn and explore new things...</p>
                <div className="social-icons">
                    <a href="https://github.com/deepakkumar55" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </div>
                
            </div>
        </div>
    );
};

export default Home;

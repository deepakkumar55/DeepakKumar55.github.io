import React, { useState } from 'react';
import '../CSS/Contact.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });

    const handleServerResponse = (ok, msg) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        });
    };

    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
            method: 'post',
            url: 'https://getform.io/f/eapdppma',
            data: new FormData(form)
        })
            .then(r => {
                handleServerResponse(true, 'Thanks!');
                form.reset();
            })
            .catch(r => {
                handleServerResponse(false, r.response.data.error);
            });
    };

    return (
        <section id="contact">
            <h1 className="section-header">Contact</h1>
            <div className="contact-wrapper">
                <form id="contact-form" className="form-horizontal" onSubmit={handleOnSubmit}>
                    <div className="form-group">
                        <i className="fa fa-user"></i>
                        <input type="text" className="form-control" id="name" placeholder="Name" name="name" required />
                    </div>
                    <div className="form-group">
                        <i className="fa fa-envelope"></i>
                        <input type="email" className="form-control" id="email" placeholder="Email" name="email" required />
                    </div>
                    <div className="form-group">
                        <i className="fa fa-pencil"></i>
                        <textarea className="form-control" rows="5" placeholder="Message" name="message" required></textarea>
                    </div>
                    <button className="btn btn-primary send-button" id="submit" type="submit" disabled={serverState.submitting}>
                        <div className="alt-send-button">
                            <i className="fa fa-paper-plane"></i><span className="send-text">Send</span>
                        </div>
                    </button>
                    {serverState.status && (
                        <p className={!serverState.status.ok ? "error-msg" : "success-msg"}>
                            {serverState.status.msg}
                        </p>
                    )}
                </form>
                <div className="direct-contact-container">
                    <ul className="contact-list">
                        <li className="list-item"><i className="fa fa-map-marker"></i><span className="contact-text place">Bhopal, Madhaya-Pradesh</span></li>
                        <li className="list-item"><i className="fa fa-phone"></i><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">+917870260954</a></span></li>
                        <li className="list-item"><i className="fa fa-envelope"></i><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">dk119819@gmail.com</a></span></li>
                    </ul>
                    <hr />
                    <ul className="social-media-list">
                        <li><a href="https://github.com/deepakkumar55" target="_blank" rel="noopener noreferrer" className="contact-icon"><FontAwesomeIcon icon={faGithub} /></a></li>
                        <li><a href="https://www.linkedin.com/in/raajaryan" target="_blank" rel="noopener noreferrer" className="contact-icon"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                        <li><a href="https://twitter.com/dk119819" target="_blank" rel="noopener noreferrer" className="contact-icon"><FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li><a href="https://instagram.com/_nature__editing" target="_blank" rel="noopener noreferrer" className="contact-icon"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    </ul>
                    <hr />
                    <div className="copyright">&copy; Raaj Aryan</div>
                </div>
            </div>
        </section>
    );
}

export default Contact;

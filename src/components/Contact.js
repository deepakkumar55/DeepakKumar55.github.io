import React from 'react';
import '../CSS/Contact.css';

const Contact = () => {
    const sendEmail = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('http://localhost:3001/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (result.status === 'success') {
                alert('Email sent successfully');
            } else {
                alert('Failed to send email');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending the email');
        }
    };

    return (
        <div className='Main-Div'>
            <div className='Contact-Details'>
                <h1>Contact Us</h1>
                <p>Feel free to contact us for any queries</p>
                <p>Email: dk119819@gmail.com</p>
                <p>Phone: +917870260954</p>
                <p>Address: 123, XYZ Street, ABC City</p>
            </div>
            <div className='Send-Email'>
                <h1>Send Email</h1>
                <form onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Name' required />
                    <input type='email' name='email' placeholder='Email' required />
                    <input type='text' name='subject' placeholder='Subject' required />
                    <textarea name='message' placeholder='Message' required />
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

// Contact.js

import React, { useState } from 'react';
import '../CSS/Contact.css'; // Import Contact component styling

const Contact = () => {
  // State for form input fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Function to handle form input change
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Code to send message (not implemented in this example)
    console.log("Form submitted with data:", formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <div className="contact-details">
        <p><strong>Name:</strong> Your Name</p>
        <p><strong>Email:</strong> your@email.com</p>
        <p><strong>Phone:</strong> +1234567890</p>
        <p><strong>Address:</strong> Your Address</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;

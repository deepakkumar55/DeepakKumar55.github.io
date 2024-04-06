// Blog.js

import React, { useState } from 'react';
import '../CSS/Blog.css'; // Import Blog component styling

const Blog = () => {
  // Sample blog data
  const blogData = [
    {
      id: 1,
      title: "Navigating the Future: A Glimpse into the World of AI",
      content: `

      Welcome to the future, where artificial intelligence (AI) has seamlessly integrated into our daily lives, transforming the way we work, communicate, and even think. As we embark on this journey into the realm of AI, it's essential to understand the profound impact it has had on our society.
      
      In this blog post, we'll take a closer look at some of the key developments and trends shaping the future of AI.
      
      **1. Personalized Experiences**
      
      AI has revolutionized the way businesses interact with consumers by offering personalized experiences tailored to individual preferences. From targeted advertising to customized product recommendations, AI algorithms analyze vast amounts of data to understand consumer behavior and deliver more relevant content.
      
      **2. Enhanced Healthcare**
      
      Advancements in AI have paved the way for groundbreaking innovations in healthcare. From early disease detection to personalized treatment plans, AI-powered technologies are helping healthcare professionals deliver more accurate diagnoses and improve patient outcomes.
      
      **3. Automation and Efficiency**
      
      AI-driven automation has streamlined processes across various industries, leading to increased efficiency and productivity. From manufacturing to logistics, repetitive tasks are now being handled by intelligent machines, allowing human workers to focus on more complex and creative endeavors.
      
      **4. Ethical Considerations**
      
      As AI continues to evolve, ethical considerations surrounding its use have become increasingly important. From concerns about privacy and data security to issues of algorithmic bias, it's essential to address these challenges to ensure that AI technologies are developed and deployed responsibly.
      
      **5. Continued Innovation**
      
      The future of AI is bright, with ongoing research and development leading to new breakthroughs and possibilities. From advancements in natural language processing to the development of more sophisticated AI models, the potential for innovation in this field is virtually limitless.
      
      As we navigate the future of AI, it's crucial to approach these advancements with a sense of responsibility and mindfulness. By harnessing the power of AI for the greater good, we can create a future that is both technologically advanced and ethically sound.
      
      Join us as we embark on this exciting journey into the world of AI, where the possibilities are endless, and the future is filled with promise.`,
      imageUrl: "blog1.jpg",
    },
    {
      id: 2,
      title: "Blog Post 2",
      content: "Suspendisse potenti. Maecenas tempus orci sed justo egestas, vitae consequat mauris lobortis. Phasellus ut risus urna. Integer vestibulum nisi ut odio viverra, nec tristique neque varius.",
      imageUrl: "blog2.jpg",
    },
    // Add more blog objects as needed
  ];

  const [selectedBlog, setSelectedBlog] = useState(null);

  // Function to handle click on blog post
  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="blog">
      <h2>Blog</h2>
      <div className="blog-list">
        {blogData.map(blog => (
          <div className="blog-post" key={blog.id} onClick={() => handleBlogClick(blog)}>
            <h3>{blog.title}</h3>
            <p>{blog.content.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
      {selectedBlog && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>{selectedBlog.title}</h2>
            <p>{selectedBlog.content}</p>
            <img src={selectedBlog.imageUrl} alt={selectedBlog.title} />
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;

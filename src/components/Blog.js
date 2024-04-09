import React from 'react';

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "First Blog Post",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit purus vitae sapien tempor, vel fringilla elit efficitur. Nulla facilisi. Integer efficitur ex et ultricies.",
    author: "John Doe",
    date: "April 1, 2024",
    likes: 10
  },
  {
    id: 2,
    title: "Second Blog Post",
    content: "Pellentesque vel felis ut magna lobortis consectetur. Vivamus vel risus ut est convallis posuere. Aliquam volutpat ante nec mi consectetur, id bibendum turpis fringilla.",
    author: "Jane Smith",
    date: "April 3, 2024",
    likes: 15
  },
  // Add more blog post objects here
];

const BlogPost = ({ post }) => {
  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div className="author-info">
        <span>Author: {post.author}</span>
        <span>Date: {post.date}</span>
      </div>
      <div className="like-section">
        <button>Like</button>
        <span>{post.likes} Likes</span>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <div className="container">
      <h1>My Blog</h1>
      {blogPosts.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Blog;

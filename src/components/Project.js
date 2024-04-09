import React from 'react';
import Projects from './Projects.js';

const App = () => {
  // Sample projects data
  const projects = [
    {
      title: "Project 1",
      description: "Description of Project 1.",
      techStack: ["Tech 1", "Tech 2", "Tech 3"],
      imageUrl: "url_to_project_1_image",
      demoUrl: "url_to_project_1_demo",
      githubUrl: "url_to_project_1_github",
      keyFeatures: ["Feature 1", "Feature 2"],
      achievements: ["Achievement 1", "Achievement 2"]
    },
    // Add more projects as needed
  ];

  return (
    <div className="App">
      <h1>My Projects</h1>
      <Projects projects={projects} />
    </div>
  );
};

export default App;

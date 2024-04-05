// Project.js

import React, { useState } from 'react';

import '../CSS/Project.css'; // Import Project component styling

const Project = () => {
  // Sample project data
  const projectsData = [
    {
      id: 1,
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      details: "Details of Project 1."
    },
    {
      id: 2,
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      details: "Details of Project 2."
    },
    // Add more project objects as needed
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  // Function to handle click on project card
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectsData.map(project => (
          <div className="project-card" key={project.id} onClick={() => handleProjectClick(project)}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.details}</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;

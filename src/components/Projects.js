import React, { useState } from 'react';
import '../CSS/Project.css'

// Sample project data
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
  // Add more project objects here
];

const ProjectCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={project.imageUrl} alt={project.title} />
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">Tech Stack: {project.techStack.join(", ")}</p>
        <button className="btn btn-primary" onClick={handleShowModal}>View Details</button>
      </div>
      {showModal && (
        <ProjectModal project={project} handleCloseModal={handleCloseModal} />
      )}
    </div>
  );
};

const ProjectModal = ({ project, handleCloseModal }) => {
  return (
    <div className="modal" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{project.title}</h5>
            <button type="button" className="close" onClick={handleCloseModal}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <img src={project.imageUrl} alt={project.title} />
            <p>Description: {project.description}</p>
            <p>Tech Stack: {project.techStack.join(", ")}</p>
            <p>Github URL: <a href={project.githubUrl}>{project.githubUrl}</a></p>
            <p>Demo URL: <a href={project.demoUrl}>{project.demoUrl}</a></p>
            <p>Key Features: {project.keyFeatures.join(", ")}</p>
            <p>Achievements: {project.achievements.join(", ")}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {projects.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

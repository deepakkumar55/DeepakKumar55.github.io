import React, { useState } from 'react';
import '../CSS/Project.css';
const ProjectCard = ({ project }) => {
    const { title, imageUrl, techStack, githubUrl, demoUrl } = project;
    const [showDetails, setShowDetails] = useState(false);

    const handleClick = () => {
        setShowDetails(true);
    };

    return (
        <div className="card" style={{ width: '18rem' }} onClick={handleClick}>
            <img className="card-img-top" src={imageUrl} alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Tech Stack: {techStack.join(', ')}</p>
            </div>
            {showDetails && (
                <div className="card-body">
                    <p className="card-text">Description: {project.description}</p>
                    <h6 className="card-text">Key Features:</h6>
                    <ul className="list-group list-group-flush">
                        {project.keyFeatures.map((feature, index) => (
                            <li className="list-group-item" key={index}>{feature}</li>
                        ))}
                    </ul>
                    <h6 className="card-text">Achievements:</h6>
                    <ul className="list-group list-group-flush">
                        {project.achievements.map((achievement, index) => (
                            <li className="list-group-item" key={index}>{achievement}</li>
                        ))}
                    </ul>
                    <div className="card-body">
                        <a href={demoUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Demo</a>
                        <a href={githubUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;

// Photos.js

import React, { useState } from 'react';
import '../CSS/Photos.css'; // Import Photos component styling

const Photos = () => {
  // Sample photo data
  const photosData = [
    {
      id: 1,
      src: "photo1.jpg",
      title: "Photo 1",
      details: "Details of Photo 1."
    },
    {
      id: 2,
      src: "photo2.jpg",
      title: "Photo 2",
      details: "Details of Photo 2."
    },
    // Add more photo objects as needed
  ];

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Function to handle click on photo
  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="photos">
      <h2>My Click Photos</h2>
      <div className="photo-grid">
        {photosData.map(photo => (
          <img
            key={photo.id}
            src={photo.src}
            alt={photo.title}
            onClick={() => handlePhotoClick(photo)}
          />
        ))}
      </div>
      {selectedPhoto && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>{selectedPhoto.title}</h2>
            <p>{selectedPhoto.details}</p>
            <img src={selectedPhoto.src} alt={selectedPhoto.title} />
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Photos;

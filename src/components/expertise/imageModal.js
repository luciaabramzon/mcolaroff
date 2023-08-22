import React from 'react';

const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal">
        <img src={imageUrl} alt="Large" />
        <button className="close-modal" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ImageModal;

import React, { useState, useEffect } from 'react';
import '../styles/animation.css'
import circle from '../images/circleLoader.svg'
import triangle from '../images/triangleLoader.svg'
import circle2 from '../images/circle2Loader.svg'
import cuadrado from '../images/cuadradoLoader.svg'
import polygon from '../images/polygonLoader.svg'
import rombo from '../images/romboLoader.svg'


const Loader = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [circle,cuadrado, triangle, circle2,polygon,rombo];
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 300);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="loader">
        <img
          className="imageLoader"
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />
      </div>
    );
  };
  
  export default Loader;
import React from 'react';
import '../../styles/uxui.css'

const ProjectLeft = ({ projectLeftName, projectLeftText, buttonLeftUrl,projectLeftImage , numberLeft}) => {
  return (
    <div className="projectL">
    <div className="projectImage">
        <img alt={projectLeftName} className='imageProject' src={projectLeftImage} />
      </div>
      <div className="projectLeftText">
        <div className='marginUx'>
        <p className='projectLeftNumber'>{numberLeft}</p>
        <h3 className='projectLeftName'>{projectLeftName}</h3>
        <p className='projectLeftText'>{projectLeftText}</p>
        <a href={buttonLeftUrl}><button className='buttonProject'>Show Project</button></a>
        </div>
      </div>
  
    </div>
  );
};

export default ProjectLeft;

import React from 'react';
import '../../styles/uxui.css'

const ProjectRight = ({ projectName, projectText, buttonUrl,projectImage , number}) => {
  return (
    <div className="projectR">
      <div className="projectText">
        <div className='marginUx'>
        <p className='projectNumber'>{number}</p>
        <h3 className='projectName'>{projectName}</h3>
        <p className='projectText'>{projectText}</p>
        <a href={buttonUrl}><button className='buttonProject'>Show Project</button></a>
        </div>
      </div>
      <div className="projectImage">
        <img alt={projectName} className='imageProject' src={projectImage} />
      </div>
    </div>
  );
};

export default ProjectRight;

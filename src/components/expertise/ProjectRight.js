import React from 'react';
import '../../styles/uxui.css'

const ProjectRight = ({ projectName, projectText, buttonUrl,projectImage , number,brandingClassRight}) => {
  return (
    <div className={`projectR ${brandingClassRight}`}>
      <div className="projectText paragraph">
        <p className='projectNumber'>{number}</p>
        <h3 className='projectName'>{projectName}</h3>
        <p className='projectText'>{projectText}</p>
        <a className='buttonProjects' href={buttonUrl} target="_blank" rel="noopener noreferrer"><button className='buttonProject'>Show Project</button></a>
        
      </div>
      <div className="projectImage">
        <img alt={projectName} className='imageProject' src={projectImage} />
      </div>
    </div>
  );
};

export default ProjectRight;

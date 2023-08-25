import React from 'react';
import '../../styles/uxui.css'

const ProjectLeft = ({ projectLeftName, projectLeftText, buttonLeftUrl,projectLeftImage , numberLeft,brandingClassLeft}) => {
  return (
    <div className={`projectL ${brandingClassLeft} `}>
    <div className="projectLeftImage">
        <img alt={projectLeftName} className='imageProject' src={projectLeftImage} />
      </div>
      <div className="projectLeftText paragraph">
        <p className='projectLeftNumber'>{numberLeft}</p>
        <h3 className='projectLeftName'>{projectLeftName}</h3>
        <p className='projectLeftText'>{projectLeftText}</p>
        <a href={buttonLeftUrl} target="_blank" rel="noopener noreferrer"><button className='buttonProject'>Show Project</button></a>
      </div>
  
    </div>
  );
};

export default ProjectLeft;

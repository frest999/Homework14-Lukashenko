import React from 'react';

const ProjectCard =()=> {

  return(
        <li className='project-card'>
          <div className='project-img-block'>
            <img src='images/layer16.png' alt=''/>
          </div>
          <div className='project-info'>
            <h4 className='title title-cards light-text'>Project heading</h4>
            <p className='text light-text'>
              Popularised in the 1960s with the release Letraset sheets containing Lorem
            </p>
          </div>
          <button className='button button-project'>Banking</button>
        </li>
  );
};

export default ProjectCard;
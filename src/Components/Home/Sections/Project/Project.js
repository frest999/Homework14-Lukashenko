import React from 'react';
import  ProjectCard from './ProjectCard';
import  ProjectSlider from './ProjectSlider';

const Project =()=> {
  return(
        <section className='section-interval'>
          <div className='content'>
            <h3 className='title title-section title-dark margin-bottom-30'>Project</h3>
            <ul className='project-block flex-between flex-wrap margin-bottom-60'>
              <ProjectCard/>
              <ProjectSlider/>
            </ul>
            <div className='flex-center'>
              <button className='button button-brand'>Full project</button>
            </div>
          </div>
        </section>
  );
};

export default Project;
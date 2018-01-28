import React from 'react';
import AboutText from './AboutText';
import AboutSlider from './AboutSlider';

const AboutUs =()=>{
  return(
        <section className='section-interval about-us-section'>
          <div className='content'>
            <h3 className='title title-section title-dark margin-bottom-40'>About us</h3>
            <AboutText/>
            <div className='about-us-block'>
              <AboutSlider/>
            </div>
          </div>
        </section>
  );
};

export default AboutUs ;
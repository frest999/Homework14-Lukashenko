import React from 'react';
import $ from 'jquery';
import {Slick} from 'slick-carousel';

class ProjectSlider extends React.Component{

  componentDidMount(){
    return(
        $('.slider-project').slick({
          dots: true
        })
    )
  }

  render(){
    return(
        <li className='slider-project-li'>
          <ul className='slider-project'>
            <li>
              <div className='project-img-block'>
                <img src='images/proj-slide-1.png' alt=''/>
              </div>
              <div className='project-info'>
                <h4 className='title title-cards title-dark'>Project heading</h4>
                <p className='text dark-text'>
                  Popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                  passages. fact that a reader will be distracted by the readable of a page when.
                </p>
                <button className='button button-project'>Real estate</button>
              </div>
            </li>
            <li>
              <div className='project-img-block'>
                <img src='images/cosmo.png' alt=''/>
              </div>
              <div className='project-info'>
                <h4 className='title title-cards title-dark'>Project heading</h4>
                <p className='text dark-text'>
                  Popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                  passages. fact that a reader will be distracted by the readable of a page when.
                </p>
                <button className='button button-project'>Cosmo</button>
              </div>
            </li>
            <li>
              <div className='project-img-block'>
                <img src='images/ocean.jpg' alt=''/>
              </div>
              <div className='project-info'>
                <h4 className='title title-cards title-dark'>Project heading</h4>
                <p className='text dark-text'>
                  Popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                  passages. fact that a reader will be distracted by the readable of a page when.
                </p>
                <button className='button button-project'>Real ocean</button>
              </div>
            </li>
          </ul>
        </li>
    )
  }
}

export default ProjectSlider;
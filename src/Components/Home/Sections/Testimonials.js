import React from 'react';
import $ from 'jquery';
import {Slick} from 'slick-carousel';


class Testimonials extends React.Component{

  componentDidMount(){
    return(
        $('.testimonials-slider').slick({
          dots: true,
          infinite: true,
          speed: 500,
          fade: true,
          initialSlide: 1,
          cssEase: 'linear'
        })
  )
  }
  render(){
  return(
        <section className='testimonials-bg testimonials-interval'>
          <div className='content testimonials-section'>
            <h3 className='title title-section light-text margin-bottom-130'>Testimonials</h3>
            <ul className='testimonials-slider'>
              <li>
                <blockquote>
                  <p className='text light-text text-center testmin-icon'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    book. It has survived not only five centuries, but also the leap into electronic typesetting.
                  </p>
                  <p className='text testmin-signup light-text'>
                    <span className='testmin-signup-name light-text'>Client name</span>
                    Designation
                  </p>
                </blockquote>
              </li>
              <li>
                <blockquote>
                  <p className='text light-text text-center testmin-icon'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type speci
                    book. It has survived not only five centuries, but also the leap into electronic typesetting.
                  </p>
                  <p className='text testmin-signup light-text'>
                    <span className='testmin-signup-name light-text'>Client name</span>
                    Professor
                  </p>
                </blockquote>
              </li>
              <li>
                <blockquote>
                  <p className='text light-text text-center testmin-icon'>
                    1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type speci
                    book. It has survived not only five centuries, but also the leap into electronic typesetting.
                  </p>
                  <p className='text testmin-signup light-text'>
                    <span className='testmin-signup-name light-text'>Client name</span>
                    Student
                  </p>
                </blockquote>
              </li>
            </ul>
          </div>
        </section>
    );
  }
}

export default Testimonials;
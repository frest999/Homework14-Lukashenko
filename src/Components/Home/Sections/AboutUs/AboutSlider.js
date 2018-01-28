import React from 'react';
import $ from 'jquery';
import Stick from 'slick-carousel';


class AboutSlider extends React.Component{
  componentDidMount(){
    return(
        $('.about-us-slider').slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          centerMode: true,
          initialSlide: 2,
          variableWidth: true
        })
    )
  }
  render(){
    const aboutSliderImg = [
      {
        _id: 'logo1',
        imgLink: 'images/about-logos/logo1.png'
      },
      {
        _id: 'logo2',
        imgLink: 'images/about-logos/logo2.png'
      },
      {
        _id: 'logo3',
        imgLink: 'images/about-logos/logo3.png'
      },
      {
        _id: 'logo4',
        imgLink: 'images/about-logos/logo4.png'
      },
      {
        _id: 'logo5',
        imgLink: 'images/about-logos/logo5.png'
      }
    ];
    return(
        <ul className='about-us-slider'>
          {
            aboutSliderImg.map((item, id) => {
              return(
                  <li key={id}><a href=''><img src={item.imgLink} alt=''/></a></li>
              );
            })
          }
        </ul>
    );
  }
}

export default AboutSlider;
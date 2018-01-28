import React from 'react';

import IndustryHeader from './Components/Industry/IndustryHeader';
import IndustryCards from './Components/Industry/IndustryCards';
import Testimonials from './Components/Home/Sections/Testimonials';
import Footer from './Components/Footer/Footer';

const listIndustryCards = [
  {
    _id: 'industryCard1',
    img: 'images/industry/1.png',
    title: 'Business',
    text: 'Many desktop publishing packages and web page editors now use Lorem' +
    'Ipsum as their default model text, and a search',
  },
  {
    _id: 'industryCard2',
    img: 'images/industry/2.png',
    title: 'Education',
    text: 'Many desktop publishing packages and web page editors now use Lorem' +
    'Ipsum as their default model text, and a search',
  },
  {
    _id: 'industryCard3',
    img: 'images/industry/3.png',
    title: 'Technology',
    text: 'Many desktop publishing packages and web page editors now use Lorem' +
    'Ipsum as their default model text, and a search',
  },
  {
    _id: 'industryCard4',
    img: 'images/industry/4.png',
    title: 'Real Estate',
    text: 'Many desktop publishing packages and web page editors now use Lorem' +
    'Ipsum as their default model text, and a search',
  },
  {
    _id: 'industryCard5',
    img: 'images/industry/5.png',
    title: 'Telecommunication',
    text: 'Many desktop publishing packages and web page editors now use Lorem' +
    'Ipsum as their default model text, and a search',
  },
  {
    _id: 'industryCard6',
    img: 'images/industry/6.png',
    title: 'BANKING & FINANCIAL',
    text: 'Many desktop publishing packages and web page editors now use Lorem' +
    'Ipsum as their default model text, and a search',
  },
  {
    _id: 'industryCard7',
    img: 'images/industry/7.png',
    title: 'Low',
    text: 'Many desktop publishing packages and web page editors now use Lorem' +
    'Ipsum as their default model text, and a search',
  },
  {
    _id: 'industryCard8',
    img: 'images/industry/8.png',
    title: 'Construction',
    text: 'Many desktop publishing packages and web page editors now use Lorem' +
    'Ipsum as their default model text, and a search',
  },
];



class Industry extends React.Component{
  render(){
    return(
        <div>
          <IndustryHeader/>
          <IndustryCards dataIndustry={listIndustryCards}/>
          <Testimonials/>
          <Footer/>
        </div>
    )
  }
}

export default Industry;
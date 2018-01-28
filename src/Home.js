import React from 'react';
import Header from './Components/Home/Header/Header';
import AboutUs from './Components/Home/Sections/AboutUs/AboutUs';
import Features from './Components/Home/Sections/Features/Features';
import Project from './Components/Home/Sections/Project/Project';
import Services from './Components/Home/Sections/Services';
import Testimonials from './Components/Home/Sections/Testimonials';
import OurBlog from './Components/Home/Sections/OurBlog';
import QuickContact from './Components/Home/Sections/QuickContact';
import Footer from './Components/Footer/Footer';

class Home extends React.Component{
  render(){
    return(
        <div>
          <Header/>
          <AboutUs/>
          <Features/>
          <Project/>
          <Services/>
          <Testimonials/>
          <OurBlog/>
          <QuickContact/>
          <Footer/>
        </div>
    )
  }
}

export default Home;
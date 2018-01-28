import React from 'react';
import AboutHeader from './Components/AboutPage/AboutHeader';
import Footer from './Components/Footer/Footer';
import AboutInfo from "./Components/AboutPage/Sections/AboutInfo";
import AboutVideo from "./Components/AboutPage/Sections/AboutVideo";
import AboutConsultation from "./Components/AboutPage/Sections/AboutConsultation";
import AboutCards from "./Components/AboutPage/Sections/AboutCards";
import Testimonials from "./Components/Home/Sections/Testimonials";

const aboutListCard = [
  {
    _id: 'card1',
    img: 'images/layer70.png',
    title: 'Our team',
    text: ' Dummy text of the printing and typesetting industry Lorem Ipsum has been the industry s ' +
    'standard dummy text ever since the 1500s',
    btn: 'Our team'
  },
  {
    _id: 'card2',
    img: 'images/layer71.png',
    title: 'Career',
    text: ' Dummy text of the printing and typesetting industry Lorem Ipsum has been the industry s ' +
    'standard dummy text ever since the 1500s',
    btn: 'Career'
  },
  {
    _id: 'card3',
    img: 'images/layer72.png',
    title: 'Services',
    text: ' Dummy text of the printing and typesetting industry Lorem Ipsum has been the industry s ' +
    'standard dummy text ever since the 1500s',
    btn: 'Services'
  },

];


class AboutPage extends React.Component{
  render(){
    return(
        <div>
          <AboutHeader/>
          <section className="section-interval">
            <div className="content row">
              <div className="col-sm-12 col-lg-7 col-xl-7">
                <AboutInfo/>
              </div>
              <div className="col-sm-12 col-lg-5 col-xl-5">
                  <AboutVideo/>
                  <AboutConsultation/>
              </div>
            </div>
          </section>
          <AboutCards dataAboutCards={aboutListCard}/>
          <Testimonials/>
          <Footer/>
        </div>
    )
  }
}

export default AboutPage;
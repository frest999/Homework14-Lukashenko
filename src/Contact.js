import React from 'react';
import ContactHeader from './Components/Contact/ContactHeader';
import ConnectUs from './Components/Contact/Sections/ConnectUs/ConnectUs';
import WriteUs from './Components/Contact/Sections/WriteUs';
import Footer from './Components/Footer/Footer';


class Contact extends React.Component{
  render(){
    return(
        <div>
          <ContactHeader/>
          <ConnectUs/>
          <WriteUs/>
          <Footer/>
        </div>
    )
  }
}

export default Contact;
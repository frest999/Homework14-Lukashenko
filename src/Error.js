import React from 'react';
import  ErrorHeader from './Components/Error/ErrorHeader';
import Footer from './Components/Footer/Footer';
import ErrorInfo from "./Components/Error/ErrorInfo";


class Error extends React.Component{
  render(){
    return(
        <div>
          <ErrorHeader/>
          <ErrorInfo/>
          <Footer/>
        </div>
    )
  }
}

export default Error;
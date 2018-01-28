import React from 'react';
import {Route} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import AboutPage from './AboutPage';
import Industry from './Industry';
import Error from './Error';
import Pricing from "./Pricing";



class Main extends React.Component{
  render(){
    return(
      <div>
        <Route exact path='/' component={Home}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/about' component={AboutPage}/>
        <Route exact path='/industry' component={Industry}/>
        <Route exact path='/error' component={Error}/>
        <Route exact path='/pricing' component={Pricing}/>
      </div>
    );
  }
}

export default Main;
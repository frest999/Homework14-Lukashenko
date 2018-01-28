import React from 'react';
import {Link} from 'react-router-dom';

const IndustryHeader =()=> {
  return (
      <header className="header-bg mini-header">
        <div className="content">
          <div className="top-header content top-header-interval flex-between">
            <div>
              <a className="navbar-brand" href=""><img src="images/logo.png" alt=""/></a>
              <h1 className="text-indent">Consult Plus</h1>
            </div>
            <nav>
              <ul className="main-nav flex-between">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About us</Link></li>
                <li><Link to='/' className="active-page disabled">Industry</Link></li>
                <li><Link to='/error'>Services</Link></li>
                <li><Link to='/pricing'>Page</Link></li>
                <li><Link to='/contact' >Contact us</Link></li>
              </ul>
              <button className="button-mob"></button>
              <ul className="mobile-menu">
                <li><a href="" className="active-page disabled">Home</a></li>
                <li><a href="">About us</a></li>
                <li><a href="">Industry</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Pages</a></li>
                <li><a href="">Contact us</a></li>
              </ul>
            </nav>
            <div className="flex-between header-contact">
              <a href="tel:+9156856664555" className="phone-link">+91 5685 6664 555</a>
              <button className="button button-message"></button>
            </div>
          </div>
          <div className="bottom-header">
            <div className="jumbotron jumbotron-fluid jumbotron-welcome content margin-bottom-30">
              <div className="container margin-bottom-30">
                <p className="lead title title-welcome-bg light-text">Industry</p>
              </div>
            </div>
          </div>
        </div>
      </header>
  )
};

export default IndustryHeader;


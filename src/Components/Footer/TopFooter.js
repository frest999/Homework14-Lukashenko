import React from 'react';

const TopFooter =()=> {

  return(
        <div className='top-footer flex-between section-interval'>
          <div className='flex-column-center footer-logo'>
            <img src='images/logo.png' alt=''/>
          </div>
          <ul className='top-footer-block flex-between flex-wrap'>
            <li>
              <h4 className='title title-cards light-text'>Navigation</h4>
              <nav>
                <ul className='flex-column'>
                  <li><a href=''>Home</a></li>
                  <li><a href=''>About us</a></li>
                  <li><a href=''>Industry</a></li>
                  <li><a href=''>Services</a></li>
                  <li><a href=''>Pages</a></li>
                  <li><a href=''>Contact us</a></li>
                </ul>
              </nav>
            </li>
            <li>
              <h4 className='title title-cards light-text'>Industry</h4>
              <ul className='flex-column'>
                <li><a href=''>Education</a></li>
                <li><a href=''>Business</a></li>
                <li><a href=''>Realestate</a></li>
                <li><a href=''>Technology</a></li>
                <li><a href=''>Banking</a></li>
                <li><a href=''>Communication</a></li>
                <li><a href=''>Much more</a></li>
              </ul>
            </li>
          </ul>
          <div className='news-letter-block'>
            <h4 className='title title-cards light-text'>News letter</h4>
            <p className='text margin-bottom-40'>
              Enter your email address to subscribe our notification of our new post & features by email.
            </p>
            <form method='post' className='news-letter'>
              <input type='email' placeholder='Email Address' className='input-brand'/>
              <button className='button button-brand'>Subscribe</button>
            </form>
          </div>
        </div>
  );
};

export default TopFooter;
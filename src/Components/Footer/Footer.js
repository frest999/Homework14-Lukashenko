import React from 'react';
import TopFooter from './TopFooter';
import BottomFooter from './BottomFooter';

const Footer =()=> {

  return(
      <div>
        <footer className='footer-bg'>
          <div className='content'>
            <TopFooter/>
            <BottomFooter/>
          </div>
        </footer>
      </div>
  );
};

export default Footer;
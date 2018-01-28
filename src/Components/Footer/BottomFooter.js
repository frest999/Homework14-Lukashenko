import React from 'react';

const BottomFooter =()=> {

  return(
        <div className='bottom-footer bottom-footer-interval'>
          <div className='flex-between bottom-footer-block'>
            <p className='text text-footer'>
              Copyright © 2018 Consultplus theme.
            </p>
            <ul className='soc-media-list flex-between'>
              <li><a href=''>Facebook</a></li>
              <li><a href=''>Twitter</a></li>
              <li><a href=''>Instagram</a></li>
              <li><a href=''>Linkedin</a></li>
              <li><a href=''>Google+</a></li>
            </ul>
          </div>
        </div>
  );
};

export default BottomFooter;
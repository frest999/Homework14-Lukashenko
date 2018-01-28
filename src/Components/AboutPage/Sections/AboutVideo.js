import React from 'react';

class AboutVideo extends React.Component{
  render(){
    return(
        <div className="video-block margin-bottom-30">
          <div className="video-block-img">
            <img src="images/video-about.png" alt=""/>
          </div>
          <button className="button button-video"></button>
        </div>
    )
  }
}

export default AboutVideo;
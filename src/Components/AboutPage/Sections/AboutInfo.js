import React from 'react';

class AboutInfo extends React.Component{
  render(){
    return(
        <ul className="flex-column-center about-text-li">
          <li>
            <h3 className="title title-section title-dark text-left margin-bottom-30">About us</h3>
            <p className="text dark-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book
              has survived not only five centuries, but also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.
            </p>
          </li>
          <li>
            <h3 className="title title-section title-dark text-left margin-bottom-30">Vision</h3>
            <p className="text dark-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took
              a galley of type and scrambled
            </p>
          </li>
          <li>
            <h3 className="title title-section title-dark text-left margin-bottom-30">Mission</h3>
            <p className="text dark-text">
              Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
            </p>
          </li>
        </ul>
    )
  }
}

export default AboutInfo;
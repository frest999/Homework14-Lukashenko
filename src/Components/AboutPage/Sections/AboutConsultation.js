import React from 'react';

class AboutConsultation extends React.Component{
  render(){
    return(
        <div className="consultation-block">
          <h3 className="title title-cards light-text margin-bottom-30">Free Consultation</h3>
          <form method="post">
            <div className="input-consultation margin-bottom-30">
              <input type="text" placeholder="Name"/>
              <input type="email" placeholder="Email"/>
            </div>
            <textarea placeholder="Comment" className="margin-bottom-30"></textarea>
            <button type="submit" className="button button-brand">Submit now</button>
          </form>
        </div>
    )
  }
}

export default AboutConsultation;
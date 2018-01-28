import React from 'react';

class AboutCards extends React.Component{

  render(){

    let AboutCardInfo = this.props.dataAboutCards.map((item, id)=> {
      return(
          <li key={id}>
            <div className="about-img-block">
              <img src={item.img} alt=""/>
            </div>
            <div className="about-card-info">
              <h4 className="title title-section">{item.title}</h4>
              <p className="text dark-text">{item.text}</p>
              <button className="button button-brand">{item.btn}</button>
            </div>
          </li>
      )
    });
    return(
        <section className="section-interval about-us-bg2">
          <div className="content">
            <ul className="flex-between about-cards flex-wrap">
              { AboutCardInfo }
            </ul>
          </div>
        </section>

    )
  }
}

export default AboutCards;
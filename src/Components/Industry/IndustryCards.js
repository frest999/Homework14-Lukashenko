import React from 'react';

class IndustryCards extends React.Component {
  render(){
    let IndustryCardsContent = this.props.dataIndustry.map((item, id) => {
      return(
          <li key={id}>
            <div className="industry-block-img">
              <img src={item.img} alt=""/>
            </div>
            <div className="industry-card-info">
              <h4 className="title title-cards title-dark margin-bottom-20">{item.title}</h4>
              <p className="text dark-text margin-bottom-30">{item.text}</p>
              <button className="button button-brand">Choose your services</button>
            </div>
          </li>
      )
    });

    return(
        <section className="section-interval">
          <div className="content">
            <h3 className="title title-section title-dark margin-bottom-30 text-left">choose your industry</h3>
            <ul className="flex-between industry-card-list flex-wrap">
              {IndustryCardsContent}
            </ul>
          </div>
        </section>
    )
  }
}

export default IndustryCards;
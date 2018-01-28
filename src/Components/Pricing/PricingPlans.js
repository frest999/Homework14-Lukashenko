import React from 'react';

class PricingPlans extends React.Component{
  render(){
    return(
        <section className="section-interval">
          <div className="content">
            <h3 className="title title-section title-dark text-left margin-bottom-30">Pricing Plans</h3>
            <ul className="plans-list flex-between flex-wrap">
              <li>
                <div className="price-block price-basic-bg">
                  <h4 className="title title-price light-text text-left">100$<span className="price-period-text">/month</span></h4>
                  <p className="text text-price light-text">Basic plan</p>
                </div>
                <div className="price-info">
                  <ul className="flex-column plans-optional">
                    <li><p className="text dark-text text-accept">Duis commodo mollis</p></li>
                    <li><p className="text dark-text text-accept">Nam aliquet sagittis</p></li>
                    <li><p className="text dark-text text-accept">Fusce eleifend lectus</p></li>
                  </ul>
                  <button className="button button-brand">Choose plan</button>
                </div>
              </li>
              <li>
                <div className="price-block price-silver-bg">
                  <h4 className="title title-price light-text text-left">150$<span className="price-period-text">/month</span></h4>
                  <p className="text text-price light-text">Silver plan</p>
                </div>
                <div className="price-info">
                  <ul className="flex-column plans-optional">
                    <li><p className="text dark-text text-accept">Duis commodo mollis</p></li>
                    <li><p className="text dark-text text-accept">Nam aliquet sagittis</p></li>
                    <li><p className="text dark-text text-accept">Fusce eleifend lectus</p></li>
                    <li><p className="text dark-text text-accept">Etiam pulvinar elementum.</p></li>

                  </ul>
                  <button className="button button-brand">Choose plan</button>
                </div>
              </li>
              <li>
                <div className="price-block price-gold-bg">
                  <h4 className="title title-price light-text text-left">200$<span className="price-period-text">/month</span></h4>
                  <p className="text text-price light-text">Gold plan</p>
                </div>
                <div className="price-info">
                  <ul className="flex-column plans-optional">
                    <li><p className="text dark-text text-accept">Duis commodo mollis</p></li>
                    <li><p className="text dark-text text-accept">Nam aliquet sagittis</p></li>
                    <li><p className="text dark-text text-accept">Fusce eleifend lectus</p></li>
                    <li><p className="text dark-text text-accept">Etiam pulvinar elementum.</p></li>
                  </ul>
                  <button className="button button-brand">Choose plan</button>
                </div>
              </li>
            </ul>
          </div>
        </section>
    )
  }
}

export default PricingPlans;
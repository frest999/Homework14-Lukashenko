import React from 'react';

class FeaturesCards extends React.Component {

  render(){
  let FeaturesList =  this.props.dataFeatures.map((item, id) => {
    return (
        <li key={id}>
          <h4 className='title title-cards title-dark'>{item.title}</h4>
          <p className='text dark-text'>{item.text}</p>
        </li>
    );
  });
    return (
        <div>
          <ul className='features-cards flex-between flex-wrap'>
            {FeaturesList}
          </ul>
          <div className='features-circle'>
            <img src='images/logo_icon.png' alt=''/>
          </div>
        </div>
    )
  }
}

export default FeaturesCards;
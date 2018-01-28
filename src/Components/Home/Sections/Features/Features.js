import React from 'react';
import FeaturesCards from './FeaturesCards';
import FeaturesBoost from './FeaturesBoost';

const featuresList = [
  {
    _id: 'featuresCard1',
    title: '24 hours support',
    text: 'containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus'
  },
  {
    _id: 'featuresCard2',
    title: 'Business boosting',
    text: 'established fact that a reader will be distracted by the readable content of a page when looking'
  },
  {
    _id: 'featuresCard3',
    title: 'FUll security',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    _id: 'featuresCard4',
    title: 'Creative process',
    text: 'There are many variations of passages of Ipsum avail able, but the majority have suffered alteration.'
  }
];

class Features extends React.Component{
  render(){
    return(
      <section className='features-interval features-section'>
        <div className='content'>
          <h3 className='title title-section title-dark margin-bottom-60'>Our Features</h3>
          <FeaturesCards dataFeatures={featuresList}/>
          <FeaturesBoost/>
        </div>
      </section>
  );
  }
}

export default Features;
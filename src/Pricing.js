import React from 'react';

import PricingHeader from './Components/Pricing/PricingHeader';
import PricingPlans from './Components/Pricing/PricingPlans';
import Footer from './Components/Footer/Footer';
import QuestionsSection from "./Components/Pricing/QuestionsSection";

const listQuestions  = [
  {
    _id: 'question1',
    title: 'Lorem ipsum is simply dummy text of the printing ?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  },
  {
    _id: 'question2',
    title: 'Readable content of a page when looking at its layout?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  },
  {
    _id: 'question3',
    title: 'Suspendisse mattis leo non neque bibendum semper ?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  },
  {
    _id: 'question4',
    title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  },
  {
    _id: 'question5',
    title: 'Mauris dictum purus ac dui efficitur, sed interdum ligula blandit ?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  },
  {
    _id: 'question6',
    title: 'Phasellus eget erat aliquet, egestas odio eget, laoreet augue ?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  },
  {
    _id: 'question7',
    title: 'Cras pharetra velit eu pretium viverra ?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  },
];

class Pricing extends React.Component{
  render(){
    return(
        <div>
          <PricingHeader/>
          <PricingPlans/>
            <section className="section-interval asked-bg">
              <div className="content">
                <h3 className="title title-section title-dark text-left margin-bottom-60">frequently asked questions</h3>
                <ul className="slide-text-block">
                  {
                    listQuestions.map((item, id)=>{
                      return(
                       <QuestionsSection dataFAQ={item} key={id}/>
                      )
                    })
                  }
                </ul>
              </div>
            </section>
          <Footer/>
        </div>
    )
  }
}
export default Pricing;
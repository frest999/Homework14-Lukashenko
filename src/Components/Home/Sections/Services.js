import React from 'react';

const Services =()=> {

  const servicesList = [
    {
      _id: 'servicesCard1',
     title: 'Business consultation'
    },
    {
      _id: 'servicesCard2',
      title: 'Boost local business'
    },
    {
      _id: 'servicesCard3',
      title: 'Accounting'
    }
  ];

  return(
        <section className='section-interval services-bg'>
          <div className='content'>
            <h3 className='title title-section margin-bottom-60'>Services</h3>
            <ul className='services-block flex-between flex-wrap margin-bottom-50'>
              {
                servicesList.map((item, id) =>{
                  return(
                      <li key={id}>
                        <h4 className='title title-cards title-dark'>{item.title}</h4>
                        <p className='text dark-text'>
                          Many variations of passages of Lorem available, but the majority have suffered alteration in some form,
                          by injected humour, or randomised.words which don't look
                        </p>
                      </li>
                  );
                })
              }
            </ul>
            <div className='flex-center'>
              <button className='button button-brand'>Full services</button>
            </div>
          </div>
        </section>
  );
};

export default Services;
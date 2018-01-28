import React from 'react';

const QuickContact =()=> {

  const contactList = [
    {
      _id: 'email-id',
      title: 'Email',
      link: 'info@consultplus.com'
    },
    {
      _id: 'call-id',
      title: 'Call us',
      link: '+91 8879 8767 990'
    },
    {
      _id: 'career-id',
      title: 'Career',
      link: 'consult@career.com'
    }
  ];

  return(
        <section className='section-interval'>
          <div className='content'>
            <h3 className='title title-section title-dark margin-bottom-30'>Quick contact</h3>
            <ul className='contact-list flex-between'>
              {
                contactList.map((item, id) =>{
                  return(
                      <li key={id}>
                        <h4 className='title title-quick-contact'>{item.title}</h4>
                        <a href='mailto: info@consultplus.com'>{item.link}</a>
                      </li>
                  );
                })
              }
            </ul>
          </div>
        </section>
  );
};

export default QuickContact;
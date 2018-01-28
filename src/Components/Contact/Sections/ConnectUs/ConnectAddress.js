import React from 'react';

class ConnectAddress extends React.Component{
  render(){
    return(
        <ul className="flex-column-center contact-us-list">
          <li className="contact-phone">
            <p className="title title-small title-dark text-left">Call us</p>
            <a href= "tel:+88565865554">+885 6586 5554</a>
          </li>
          <li className="contact-email">
            <p className="title title-small title-dark text-left">Email</p>
            <a href="mail:info@consultplus.com">info@consultplus.com</a>
          </li>
          <li className="contact-address">
            <p className="title title-small title-dark text-left">Address</p>
            <p className="text dark-text">
              Department 98 44-46 Morningside Road Edinburgh, Scotland
            </p>
          </li>
        </ul>
    )
  }
}

export default ConnectAddress;
import React from 'react';
import ConnectAddress from './ConnectAddress';
import ConnectMap from "./ConnectMap";

class ConnectUs extends React.Component{
  render(){
    return(
        <section className="section-interval">
          <div className="content">
            <div className="flex-between contact-map-block">
              <div className="flex-column-center">
                <h3 className="title title-section title-dark margin-bottom-30 text-left">Connect us</h3>
                <ConnectAddress/>
              </div>
              <ConnectMap/>
            </div>
          </div>
        </section>

  )
  }
}

export default ConnectUs;
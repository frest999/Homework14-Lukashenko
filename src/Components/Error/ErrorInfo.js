import React from 'react';

class ErrorInfo extends React.Component{
  render(){
    return(
        <section className="section-interval">
          <div className="content flex-between error-block">
            <div className="title-block-error">
              <h2 className="title title-error">404</h2>
            </div>
            <div className="flex-column-center error-card">
              <h3 className="title title-section title-dark">Oops !!</h3>
              <p className="text dark-text">
                The page you are looking for cannot be found
              </p>
              <button className="button button-brand">Back to home page</button>
            </div>
          </div>
        </section>
    )
  }
}

export default ErrorInfo;
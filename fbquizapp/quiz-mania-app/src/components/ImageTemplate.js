import React, { Component } from 'react';

class ImageTemplate extends Component {
  handleClick = () => {
    console.log('this is:', this);
  }
  render() {
    return (
        <div className="container">
        <div className="row">
              <p>The heading of Quiz will appear here</p>
           </div>
           <div className="row">
             <div className="col-md-4">
                <p>Image of the User</p>
              </div>
              <div className="col-md-4">
                  <p>Comparing stats</p>
               </div>
               <div className="col-md-4">
                    <p>Comparing Image</p>
               </div>
            </div>
          <div className="row">
              <button className="btn btn-primary" onClick={this.handleClick}>Create your own Quiz</button>
           </div>
            </div>
    );
  }
}

export default ImageTemplate;

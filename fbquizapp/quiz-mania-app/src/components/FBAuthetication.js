import React, { Component } from 'react';

class FbAuth extends Component {

  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
        <div className="container">
          <p>test the authentication</p>
          <div className="row">
            <img src="" alt="User Image"/>
          </div>
          <div className="row">
            <p> User Details</p>
          </div>
           <div className="row">
            <button onClick={this.handleClick} className="btn btn-primary">
                Allow app to use FB Details
            </button>
          </div>
        </div>
    );
  }
}

export default FbAuth;
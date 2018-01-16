import React, { Component } from 'react';

class CreateQuiz extends Component {
  render() {
    return (
        <div className="container">
          <div className="row">
            <form>
            <div className="form-group">
              <label>
                Name: <input type="text" name="name" className="form-control"/>
              </label>
              </div>
              <div className="form-group">
                <button className="btn btn-info"> Submit</button>
              </div>
              <div className="form-group">
                <button className="glyphicon glyphicon-plus"></button>
              </div>
            </form>
          </div>          
         </div>
    );
  }
}

export default CreateQuiz;

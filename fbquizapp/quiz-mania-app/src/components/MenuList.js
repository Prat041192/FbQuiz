import React, { Component } from 'react';
import { 
    Link
} from "react-browser-router";

class ImageTemplate extends Component {
  render() {
    return (
      <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to={"/"}><span className="glyphicon glyphicon-home"></span> Home</Link></li>
                  <li><Link to={"/createquiz"}>Create Quiz</Link></li>
                  <li><Link to={"/result"}>Result</Link></li>
                </ul>
        </div>
    );
  }
}

export default ImageTemplate;

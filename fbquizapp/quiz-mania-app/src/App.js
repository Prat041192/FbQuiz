import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/FBAuthetication.js'
import ImageTemplate from './components/ImageTemplate.js'
import NewQuiz from './components/CreateQuizTemplate.js'
import Menu from './components/MenuList.js'
import { 
    BrowserRouter, 
    Route
} from "react-browser-router";

class App extends Component {
  render() {
    return (
      <div className="App">
         <BrowserRouter>
        <div>
           <header className="jumbotron">
            <Menu></Menu>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
           <div>
                     <Route exact path="/" component={Home} />
                     <Route path="/createquiz" component={NewQuiz} />
                     <Route path="/result" component={ImageTemplate} />
           </div>
       </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;

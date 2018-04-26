import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Quiz from './Quiz';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
    	<Router>
      	<Quiz />
      </Router>
    );
  }
}

export default App;

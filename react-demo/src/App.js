import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let mystyle={
      fontSize: 10,
      color: '#FF0000'
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo}  className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" style={mystyle}>
          我是罗达到{1+1}sssqs
        </p>
      </div>
    );
  }
}

export default App;

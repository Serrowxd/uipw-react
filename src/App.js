import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Imports
import NavBar from './components/NavBar';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
      </div>
    );
  }
}

export default App;

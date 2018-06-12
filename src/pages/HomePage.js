import React, { Component } from 'react';

// Imports
import NavBar from '../components/NavBar';
import Header from '../components/Header';

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="home-page">
          <NavBar />
          <Header />
        </div>

        <section id="one" className="main style1">
          <div>
            <h1> Henlo (OvO") </h1>
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;

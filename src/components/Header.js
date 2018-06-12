import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';

import img from '../DesignFiles/img/home/home-jumbotron.png';

const Header = props => {
  return (
    <div>
      <Jumbotron fluid>
        <img src={img} className="jumboImg" alt="homeJumbo" />
      </Jumbotron>
      <Container fluid>
        <p> Henlo (OvO") </p>
      </Container>
    </div>
  );
};

export default Header;

import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

// import img from '../assets/DesignFiles/img/home/home-jumbotron.png';
import img from '../assets/DesignFiles/img/home/home-jumbo-large.jpg';

const Header = props => {
  return (
    <div>
      <Jumbotron fluid>
        <img src={img} className="jumboImg" alt="homeJumbo" />
        <div className="floated-text">
          <h1 className="hFont">
            <strong>
              Integrity, <br />
              Excellence, <br />
              Progress.
            </strong>
          </h1>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Header;

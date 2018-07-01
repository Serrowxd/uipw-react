import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

// Images

import img1 from '../assets/DesignFiles/img/home/home-img-1.png';
import img2 from '../assets/DesignFiles/img/home/home-img-2.png';
import img3 from '../assets/DesignFiles/img/home/home-villas-img.png';
import img4 from '../assets/DesignFiles/img/home/home-outskirts-img.png';
import img5 from '../assets/DesignFiles/img/home/home-the-blocks-img.png';

// Imports
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Footer from '../components/Footer';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Container fluid className="container-1">
          <div className="home-page">
            <NavBar />
            <Header />
          </div>
        </Container>

        <Container fluid>
          <section id="one" className="main style1 slideAnim">
            <div>
              <Row>
                <Col sm={{ size: 5, offset: 1 }} className="text1">
                  <h1>
                    <strong> Smith & Jones Architects </strong>
                  </h1>
                  <h4 className="m-top">
                    Et sed autem causae appareat, tempor abhorreant te mei facer
                    facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo
                    etiam laboramus dissentient in, nec no errem.
                  </h4>
                  <button className="m-top-button"> Learn More </button>
                </Col>
                <Col sm={{ size: 5, offset: 0 }} className="colAnim">
                  <img src={img1} class="img1" alt="art" />
                </Col>
              </Row>
            </div>
          </section>
        </Container>

        <Container fluid>
          <section id="two" className="main style2 slideAnim">
            <div>
              <Row>
                <Col sm={{ size: 5, offset: 1 }} className="colAnim">
                  <img src={img2} class="img1" alt="art" />
                </Col>
                <Col sm={{ size: 5, offset: 0 }} className="text1">
                  <h1>
                    <strong> Futuristic Designs </strong>
                  </h1>
                  <h4 className="m-top">
                    Et sed autem causae appareat, tempor abhorreant te mei facer
                    facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo
                    etiam laboramus dissentient in, nec no errem.
                  </h4>
                  <button className="m-top"> View Designs </button>
                </Col>
              </Row>
            </div>
          </section>
        </Container>

        <Container fluid>
          <section id="three" className="main style3 ">
            <div className="height-div">
              <Row>
                <Col sm={{ size: 8, offset: 1 }}>
                  <h2>
                    <strong>Recent Projects </strong>
                  </h2>
                </Col>
              </Row>
              <Row className="row-height-1">
                <Col sm={{ size: 10, offset: 1 }}>
                  <img src={img3} class="img3" alt="art" />
                  <h1 className="float-me-right">T H E V I L L A S</h1>
                </Col>
              </Row>
              <Row>
                <Col sm={{ size: 4, offset: 4 }}>
                  <h4 className="low-text-main">
                    The Villas bring to the table win-win survival strategies to
                    ensure proactive domination. At the end of the day, going
                    forward, a new normal that has evolved from generation X is
                    on the runway heading towards a streamlined cloud solution.
                  </h4>
                  <h4>
                    The Villas bring to the table win-win survival strategies to
                    ensure proactive domination. At the end of the day, going
                    forward, a new normal that has evolved from generation X is
                    on the runway heading towards a streamlined cloud solution.
                  </h4>
                </Col>
              </Row>
            </div>
          </section>
        </Container>

        <Container fluid>
          <section id="three" className="main style3">
            <div className="height-div">
              <Row className="row-height-1">
                <Col sm={{ size: 10, offset: 1 }}>
                  <img src={img4} class="img3" alt="art" />
                  <h1 className="float-me-left">O U T S K I R T S</h1>
                </Col>
              </Row>
              <Row>
                <Col sm={{ size: 4, offset: 4 }}>
                  <h4 className="low-text-main">
                    The Outskirts bring to the table win-win survival strategies
                    to ensure proactive domination. At the end of the day, going
                    forward, a new normal that has evolved from generation X is
                    on the runway heading towards a streamlined cloud solution.
                  </h4>
                  <h4>
                    The Outskirts bring to the table win-win survival strategies
                    to ensure proactive domination. At the end of the day, going
                    forward, a new normal that has evolved from generation X is
                    on the runway heading towards a streamlined cloud solution.
                  </h4>
                </Col>
              </Row>
            </div>
          </section>
        </Container>

        <Container fluid>
          <section id="three" className="main style3">
            <div className="height-div">
              <Row className="row-height-1">
                <Col sm={{ size: 10, offset: 1 }}>
                  <img src={img5} class="img3" alt="art" />
                  <h1 className="float-me-right">T H E B L O C K S</h1>
                </Col>
              </Row>
              <Row>
                <Col sm={{ size: 4, offset: 4 }}>
                  <h4 className="low-text-main">
                    The Blocks bring to the table win-win survival strategies to
                    ensure proactive domination. At the end of the day, going
                    forward, a new normal that has evolved from generation X is
                    on the runway heading towards a streamlined cloud solution.
                  </h4>
                  <h4>
                    The Blocks bring to the table win-win survival strategies to
                    ensure proactive domination. At the end of the day, going
                    forward, a new normal that has evolved from generation X is
                    on the runway heading towards a streamlined cloud solution.
                  </h4>
                </Col>
              </Row>
            </div>
          </section>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default HomePage;

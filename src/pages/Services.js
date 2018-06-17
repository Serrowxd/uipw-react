import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import img from '../assets/DesignFiles/img/services/services-jumbotron.png';
import img2 from '../assets/DesignFiles/img/services/services-tab-construction-img.png';

class Contact extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Jumbotron fluid className="contact-jumbo-contain">
          <img src={img} className="contact-jumbo" alt="contactJumbo" />
          <div className="contact-float">
            <h1 className="c-Font">
              <strong>Services</strong>
            </h1>
          </div>
        </Jumbotron>

        <Container fluid className="service-container">
          <Row>
            <Col sm={{ size: 10, offset: 1 }}>
              <h4>
                Services include: completely synergize resource taxing
                relationships via premier niche markets. Professionally
                cultivate one-to-one customer services with robust ideas.
                Dynamiically innovate resource-leveling customer service for
                state of the art customer service.
              </h4>
            </Col>
            <Col className="align-col">
              <Col sm={{ size: 2, offset: 1 }} className="service-text-touch">
                <h3> Pre-Construction </h3>
              </Col>
              <Col sm={{ size: 2, offset: 0 }} className="service-text-touch">
                <h3> Construction </h3>
              </Col>
              <Col sm={{ size: 2, offset: 0 }} className="service-text-touch">
                <h3> Design Build </h3>
              </Col>
              <Col sm={{ size: 2, offset: 0 }} className="service-text-touch">
                <h3> Sustainability </h3>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col sm={{ size: 5, offset: 1 }} className="service-top-text">
              <h1> Construction </h1>
              <p>
                Completely synergize resource taxing relationships via premier
                niche markets. Professionally cultivate one-to-one customer
                service with robust ideas. Dynamically innovate
                resource-leveling customer service for state of the art customer
                service.
              </p>
              <p>
                Prosfluorescently engage worldwide methodologies with
                web-enabled technology. Interactively coordinat proactive
                e-commece via process-centric "outside the box" thinking.
                Completely pursue scalable customer service through sustainable
                potenialities.
              </p>
              <p>
                Completely synergize resource taxing relationships via premier
                niche markets. Professionally cultivate one-to-one customer
                service with robust ideas. Dynamically innovate
                resource-leveling customer service for state of the art customer
                service.
              </p>
              <p>
                Prosfluorescently engage worldwide methodologies with
                web-enabled technology. Interactively coordinat proactive
                e-commece via process-centric "outside the box" thinking.
                Completely pursue scalable customer service through sustainable
                potenialities.
              </p>
            </Col>
            <Col>
              <img src={img2} className="services-image-two" alt="services" />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Contact;

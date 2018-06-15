import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import img from '../assets/DesignFiles/img/contact/contact-jumbotron.png';

class Contact extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Jumbotron fluid className="contact-jumbo-contain">
          <img src={img} className="contact-jumbo" alt="contactJumbo" />
          <div className="contact-float">
            <h1 className="c-Font">
              <strong>Contact Us</strong>
            </h1>
          </div>
        </Jumbotron>

        <Container fluid className="contact-container">
          <Row>
            <Col className="">
              <Col sm={{ size: 10, offset: 1 }} className="contact-text-touch">
                <h2>
                  <strong>Get In Touch</strong>
                </h2>
              </Col>

              <Col
                sm={{ size: 10, offset: 1 }}
                className="contact-text-touch 1"
              >
                <h3>Email Address</h3>
                <h1> ENTER EMAIL HERE </h1>
                <p> We'll never share your email with anyone else </p>
              </Col>

              <Col
                sm={{ size: 10, offset: 1 }}
                className="contact-text-touch 2"
              >
                <h2>How many buildings do you need planned?</h2>
                <h1> ENTER AMOUNT HERE [DROPDOWN] </h1>
              </Col>

              <Col
                sm={{ size: 10, offset: 1 }}
                className="contact-text-touch 3"
              >
                <h2>Provide a brief overview of your project needs:</h2>
                <h1> TEXT INPUT BOX HERE [LARGE] </h1>
              </Col>

              <Col
                sm={{ size: 10, offset: 1 }}
                className="contact-text-touch 3"
              >
                <h4> I am a small business </h4>
                <h4> I am a residential owner </h4>
                <h4> I am a corporation </h4>
                <p> LINKS ON THE SIDE </p>
              </Col>

              <Col
                sm={{ size: 10, offset: 1 }}
                className="contact-text-touch 3"
              >
                <button> SUBMIT </button>
              </Col>
            </Col>
            <Col sm={{ size: 4, offset: 1 }}>
              <h2>
                <strong> Where We Work </strong>
              </h2>

              <h3 className="we-work-here">
                <strong> New York </strong>
              </h3>
              <h4> 123 Lane </h4>
              <h4> Suite 100 </h4>
              <h4> Albany, Ny 12345 </h4>
              <h4> 202 555 0144 </h4>

              <h3 className="we-work-here">
                <strong> Florida </strong>
              </h3>
              <h4> Ocean Drive </h4>
              <h4> Suite 201 </h4>
              <h4> Orlando, FL 22345 </h4>
              <h4> 502 555 0144 </h4>

              <h3 className="we-work-here">
                <strong> California </strong>
              </h3>
              <h4> Mountain Street </h4>
              <h4> Suite 105 </h4>
              <h4> San Diego, CA 22345 </h4>
              <h4> 702 555 0144 </h4>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Contact;

import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <div>
        <Container fluid className="container-foot">
          <Row>
            <Col sm={{ size: 3, offset: 1 }} className="footer-col">
              <h3 className="foot-talk">
                Interested in starting a project? <br />
                Let's talk:
              </h3>
              <h2> Input Field Here </h2>
              <p> We'll never share your email with anyone else </p>
            </Col>
            <Col sm={{ size: 2, offset: 0 }} className="footer-col">
              <h3 className="foot-talk">New York</h3>
              <p> 123 Lane </p>
              <p> Suite 100 </p>
              <p> Albany, NY 12345 </p>
              <p> 202 555 0144 </p>
            </Col>
            <Col sm={{ size: 2, offset: 0 }} className="footer-col">
              <h3 className="foot-talk">Florida</h3>
              <p> Ocean Drive </p>
              <p> Suite 201 </p>
              <p> Orlando, FL 22345 </p>
              <p> 502 555 0144 </p>
            </Col>
            <Col sm={{ size: 2, offset: 0 }} className="footer-col">
              <h3 className="foot-talk">California</h3>
              <p> Mountain Street </p>
              <p> Suite 105 </p>
              <p> San Diego, CA 22345 </p>
              <p> 702 555 0144 </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="copyright"> Copyright * 2018 Smith and Jones </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;

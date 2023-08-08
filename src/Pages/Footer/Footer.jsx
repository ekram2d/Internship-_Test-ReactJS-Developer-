import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <footer className="bg-dark text-light mt-5">
      <Container fluid>
        <Row className="py-4">
          <Col md={6} className="text-center text-md-left">
            <h5>Company Name</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              volutpat, ligula ut scelerisque consectetur, nibh tellus
              hendrerit tortor.
            </p>
          </Col>
          <Col md={3} className="text-center">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </Col>
          <Col md={3} className="text-center">
            <h5>Contact Us</h5>
            <address>
              <p>Email: contact@example.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

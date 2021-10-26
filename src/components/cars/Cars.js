import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../sidebar/Sidebar';

function Cars() {
  return (
    <Container fluid className="m-0 p-0">
      <Row>
        <Col lg={2} md={3} xs={12} className="p-0">
          <Sidebar />
        </Col>
        <Col lg={10} md={8} xs={12} className="p-0">
          This the main page!
        </Col>
      </Row>
    </Container>
  );
}

export default Cars;

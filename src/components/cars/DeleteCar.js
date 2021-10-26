import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../sidebar/Sidebar';
import CarList from './CarList';

function DeleteCar() {
  return (
    <Container fluid className="m-0 p-0">
      <Row>
        <Col lg={2} md={3} xs={12} className="p-0">
          <Sidebar />
        </Col>
        <Col lg={10} md={8} xs={12} className="p-0">
          <CarList />
        </Col>
      </Row>
    </Container>
  );
}

export default DeleteCar;

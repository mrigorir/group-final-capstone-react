import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReserveForm from './ReserveForm';
import Sidebar from '../sidebar/Sidebar';

function Reserve() {
  return (
    <Container fluid className="m-0 p-0">
      <Row>
        <Col lg={2} md={3} xs={12} className="p-0">
          <Sidebar />
        </Col>
        <Col lg={10} md={8} xs={12} className="p-0">
          <div className="d-flex align-items-center justify-content-center vh-100 position-relative background-reserve">
            <div className="mx-auto content-width tablet-pos position-absolute">
              <h1 className="text-dark text-center border-bottom border-secondary p-4 mobile-top fw-bold">
                Book a car test-ride
              </h1>
              <p className="text-dark fs-4 lh-lg my-5 text-center">
                We are grateful you are looking at reserving on of our cars for a great test-ride!
                as such, we do recomment yo stick to our policies.
              </p>
              <ReserveForm className="mt-5" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Reserve;

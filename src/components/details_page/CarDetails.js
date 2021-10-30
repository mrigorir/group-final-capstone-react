import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Container, Row, Col, Card, Badge,
} from 'react-bootstrap';
import '../../dist/styles/card.css';
import hooks from '../hooks/hooks';
import Sidebar from '../sidebar/Sidebar';

const CarDetails = () => {
  const car = useSelector((state) => state.carDetailsReducer);
  hooks();

  return (
    <>
      <Container fluid className="m-0 p-0">
        <Row>
          <Col lg={2} md={3} xs={12} className="p-0">
            <Sidebar />
          </Col>
          <Col lg={10} md={8} xs={12} className="p-0 position-relative">
            {car.map((car) => (
              <div className="w-100 h-100 bg-glob mb-5 view-blog" key={car.id}>
                <div className="mb-5">
                  <h1 className="text-center text-white bg-secondary p-3 mx-auto w-75 title">{`Specs for car model ${car.name}`}</h1>
                  <div className="d-flex align-items-center justify-content-center mt-5">
                    <Card id={car.id} className="border-0 mx-auto w-card">
                      <Card.Body className="m-2">
                        <Card.Img variant="top" src={car.image} style={{ borderRadius: '100%' }} />
                      </Card.Body>
                      <Card.Footer className="bg-glob border-0">
                        <Card.Title className="text-center fs-4 p-2">
                          <Badge bg="dark" className="fw-bold fs-1 mt-5">
                            {car.name}
                          </Badge>
                        </Card.Title>
                        <p className="text-center text-secondary fs-1 my-5">{`Description for car #${car.id}`}</p>
                        <div className="d-flex justify-content-between align-items-center p-3 fs-1 fw-bold w-100 pb-3">
                          <FontAwesomeIcon icon={['fab', 'twitter']} className="text-dark cursor-pointer" />
                          <FontAwesomeIcon icon={['fab', 'instagram']} className="text-dark cursor-pointer" />
                          <FontAwesomeIcon icon={['fab', 'google']} className="text-dark cursor-pointer" />
                          <FontAwesomeIcon icon={['fab', 'facebook']} className="text-dark cursor-pointer" />
                        </div>
                      </Card.Footer>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CarDetails;

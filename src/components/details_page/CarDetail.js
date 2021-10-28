import React from 'react';
import { Link } from 'react-router-dom';
import {
  Badge, Container, Row, Col, Image, Card, ListGroup, Button,
} from 'react-bootstrap';

const CarDetail = (props) => {
  const {
    name, image, id, /* eslint-disable-line react/prop-types */
  } = props;
  return (
    <>
      <Container>
        <Row>
          <Col sm={8}>
            <Image src={image} ml-5 />
          </Col>
          <Col sm={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Header>Car Details</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>{id}</ListGroup.Item>
                <ListGroup.Item>{name}</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Link to="/reserve-form">
            <Button className="btn">Reserve</Button>
            {' '}
          </Link>
        </Row>
      </Container>
    </>
  );
};

export default CarDetail;

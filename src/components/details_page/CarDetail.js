import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Badge, Container, Row, Col, Image, Card, ListGroup,
} from 'react-bootstrap';

const CarDetail = (props) => {
  const {
    name, image, id, /* eslint-disable-line react/prop-types */
  } = props;
  return (
    <>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src={image} fluid />
          </Col>
          <Card style={{ width: '18rem' }}>
            <Card.Header>Car Details</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>{id}</ListGroup.Item>
              <ListGroup.Item>{name}</ListGroup.Item>
            </ListGroup>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default CarDetail;

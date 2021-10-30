import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  Container, Row, Col, Form, Button,
} from 'react-bootstrap';
import { addCarAction } from '../../redux/cars/add&deleteCars';
import Sidebar from '../sidebar/Sidebar';

function AddCar() {
  const dispatch = useDispatch();
  const carNameRef = useRef();
  const carImageRef = useRef();
  const [carName, setCarName] = useState('');
  const [carImage, setCarImage] = useState('');
  const [show, setShow] = useState('opacity-0');

  const handleValues = () => {
    setCarImage(carImageRef.current.value);
  };

  const handleCarName = () => {
    setCarName(carNameRef.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCarAction(carName, carImage));
    setCarName('');
    setCarImage('');
    setShow('opacity-1');
    setTimeout(() => {
      setShow('opacity-0');
    }, 2500);
  };

  return (
    <>
      <Container fluid className="m-0 p-0">
        <Row>
          <Col lg={2} md={3} xs={12} className="p-0">
            <Sidebar />
          </Col>
          <Col lg={10} md={8} xs={12} className="p-0 position-relative">
            <div className="form-pos">
              <h1 className="text-center text-uppercase text-white fw-bold bg-secondary p-3 mx-auto mt-5 carFormTitle">Add a new car</h1>
              <p className={`text-center fs-4 fw-bold bg-success border border-sucesss border-3 rounded shadow-sm mx-auto w-50 p-3 text-white ${show}`}>
                A new car has been addded!
              </p>
              <Form
                className="mx-auto shadow-lg border border-secondary border-2 rounded p-5 mb-5 carForm"
                onSubmit={handleSubmit}
              >
                <Form.Group className="mb-4" controlId="carName">
                  <Form.Label className="fs-4 fw-bold text-secondary">Name</Form.Label>
                  <Form.Control type="text" placeholder="Car name" size="lg" className="carFormInputs" ref={carNameRef} value={carName} onChange={handleCarName} />
                </Form.Group>
                <Form.Group controlId="carImage" className="mb-4">
                  <Form.Label className="fs-4 fw-bold text-secondary">Image</Form.Label>
                  <Form.Control type="file" size="lg" className="carFormInputs" ref={carImageRef} name="file" value={carImage} onChange={handleValues} />
                </Form.Group>
                <div className="d-flex align-items-center justify-content-center mt-5">
                  <Button variant="dark" type="submit" className="fs-4 px-5">
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddCar;

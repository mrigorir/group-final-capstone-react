import React from 'react';
import { Button, Form } from 'react-bootstrap';
import ReserveCarList from './ReserveCarList';
import ReserveCityOption from './ReserveCityOption';

function ReserveForm() {
  return (
    <Form className="d-flex align-items-center justify-content-between flex-wrap pb-5">
      <Form.Group className="mb-3 w-20 responsive-width" controlId="username">
        <Form.Control type="text" placeholder="Username" size="lg" className="reserve_input fs-4" disabled />
      </Form.Group>
      <Form.Group className="mb-3 w-20 responsive-width" controlId="date">
        <Form.Control type="date" placeholder="Date" size="lg" className="reserve_input fs-4 text-dark" />
      </Form.Group>
      <Form.Group className="mb-3 w-05 responsive-width" controlId="city">
        <Form.Select size="lg" className="reserve_input fs-4 text-dark">
          <ReserveCityOption />
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3 w-20 responsive-width" controlId="city">
        <Form.Select size="lg" className="reserve_input fs-4 text-dark" defaultValue="">
          <ReserveCarList />
        </Form.Select>
      </Form.Group>
      <Button variant="dark" type="submit" className="fs-4 w-20 responsive-width">
        Submit
      </Button>
    </Form>
  );
}

export default ReserveForm;

import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SignupForm() {
  return (
    <Form className="w-100 p-5 shadow-lg border-green border-3 rounded">
      <Form.Group className="mb-3" controlId="username">
        <Form.Control type="text" placeholder="Username" size="lg" className="fs" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Control type="email" placeholder="Email" size="lg" className="fs" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Control type="password" placeholder="Password" size="lg" className="fs" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="passwordConfirm">
        <Form.Control type="password" placeholder="Confirm password" size="lg" className="fs" required />
      </Form.Group>
      <div className="d-flex align-items-center justify-content-center linkContainer">
        <Button variant="primary" type="submit" className="me-3 fs">
          Register
        </Button>
        <Link to="/sign-in" className="btn btn-dark mx-3 fs">
          Log in!
        </Link>
      </div>
    </Form>
  );
}

export default SignupForm;

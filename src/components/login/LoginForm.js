import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LoginForm() {
  return (
    <Form className="w-100 p-5 shadow-lg border-green border-2 rounded">
      <Form.Group className="mb-3" controlId="email">
        <Form.Control type="email" placeholder="Email" size="lg" className="fs" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Control type="password" placeholder="Password" size="lg" className="fs" required />
      </Form.Group>
      <div className="d-flex align-items-center justify-content-center linkContainer">
        <Button variant="primary" type="submit" className="me-3 fs">
          Login
        </Button>
        <Link to="/sign-up" className="btn btn-dark mx-3 fs">
          Signup!
        </Link>
      </div>
    </Form>
  );
}

export default LoginForm;

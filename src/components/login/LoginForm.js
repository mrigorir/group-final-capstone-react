import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LoginForm(props) {
  const {
    userEmail,
    userPassWord,
    handleSubmit,
    errors,
  } = props;
  return (
    <Form onSubmit={handleSubmit} className="w-100 p-5 shadow-lg border-green border-2 rounded">
      <p className="text-danger text-center">{errors}</p>
      <Form.Group className="mb-3" controlId="email">
        <Form.Control type="email" ref={userEmail} placeholder="Email" size="lg" className="fs" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Control type="password" ref={userPassWord} placeholder="Password" size="lg" className="fs" required />
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

LoginForm.propTypes = {
  userEmail: PropTypes.instanceOf(Object).isRequired,
  userPassWord: PropTypes.instanceOf(Object).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.string.isRequired,
};

export default LoginForm;

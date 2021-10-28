import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignupForm = (props) => {
  const {
    userName,
    userEmail,
    userPassWord,
    userPassWordConfirmation,
    handleSubmit,
    errors,
  } = props;

  useEffect(() => {
    userName.current.focus();
  }, []);

  return (
    <Form onSubmit={handleSubmit} className="w-100 p-5 shadow-lg border-green border-3 rounded">
      <div>
        <p className="text-danger text-center">{errors}</p>
      </div>
      <Form.Group className="mb-3" controlId="userName">
        <Form.Control
          ref={userName}
          type="text"
          id="userName"
          name="userName"
          placeholder="Name"
          size="lg"
          className="fs"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="userEmail">
        <Form.Control
          ref={userEmail}
          id="userEmail"
          name="email"
          type="email"
          placeholder="Email"
          size="lg"
          className="fs"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Control
          ref={userPassWord}
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          size="lg"
          className="fs"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="passwordConfirmation">
        <Form.Control
          ref={userPassWordConfirmation}
          id="passwordConfirmation"
          type="password"
          name="passwordConfirmation"
          placeholder="Password Confirmation"
          size="lg"
          className="fs"
          required
        />
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
};

SignupForm.propTypes = {
  userName: PropTypes.instanceOf(Object).isRequired,
  userEmail: PropTypes.instanceOf(Object).isRequired,
  userPassWord: PropTypes.instanceOf(Object).isRequired,
  userPassWordConfirmation: PropTypes.instanceOf(Object).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.string.isRequired,
};

export default SignupForm;

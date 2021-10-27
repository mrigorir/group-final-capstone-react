import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signInUser } from '../../redux/users/register';
import LoginForm from './LoginForm';

function Login() {
  const dispatch = useDispatch();
  const userAuthenticationData = useSelector((state) => state.userCredentials);
  const { userDataLoading, authenticationErrors, authToken } = userAuthenticationData;

  const userEmail = useRef(null);
  const userPassWord = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      user: {
        email: userEmail.current.value,
        password: userPassWord.current.value,
      },
    };
    dispatch(signInUser(data));
  };
  if (userDataLoading) {
    return (
      <div>
        <p>loading Data</p>
      </div>
    );
  }
  if (!authToken) {
    return (
      <div className="vh-100 h-100 w-100 position-relative">
        <div className="mx-auto loginContainer background-signing">
          <div className="content-login-width mx-auto p-3">
            <h1 className="text-white text-center w-bold bg-green p-2 mb-5 loginTitle">
              Login
            </h1>
            <LoginForm
              userEmail={userEmail}
              userPassWord={userPassWord}
              handleSubmit={handleSubmit}
              errors={authenticationErrors}
            />
          </div>
        </div>
      </div>
    );
  }
  return <Redirect to="/cars" />;
}

export default Login;

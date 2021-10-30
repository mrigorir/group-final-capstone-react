import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUpUser } from '../../redux/users/register';
import SignupForm from './SignupForm';

const Signup = () => {
  const dispatch = useDispatch();
  const userAuthenticationData = useSelector((state) => state.userCredentials);
  const { userDataLoading, authenticationErrors, authToken } = userAuthenticationData;

  const userName = useRef(null);
  const userEmail = useRef(null);
  const userPassWord = useRef(null);
  const userPassWordConfirmation = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      user: {
        username: userName.current.value,
        email: userEmail.current.value,
        password: userPassWord.current.value,
        password_confirmation: userPassWordConfirmation.current.value,
      },
    };
    dispatch(signUpUser(data));
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
        <div className="mx-auto loginContainer background-signup">
          <div className="content-login-width mx-auto p-3">
            <h1 className="text-white text-center w-bold bg-green p-2 mb-5 loginTitle">
              Signup
            </h1>
            <SignupForm
              userName={userName}
              userEmail={userEmail}
              userPassWord={userPassWord}
              userPassWordConfirmation={userPassWordConfirmation}
              handleSubmit={handleSubmit}
              errors={authenticationErrors}
            />
          </div>
        </div>
      </div>
    );
  }
  return <Redirect to="/cars" />;
};

export default Signup;

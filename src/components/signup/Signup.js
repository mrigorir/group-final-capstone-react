import React from 'react';
import SignupForm from './SignupForm';

function Signup() {
  return (
    <div className="vh-100 h-100 w-100 position-relative">
      <div className="mx-auto loginContainer background-signup">
        <div className="content-login-width mx-auto p-3">
          <h1 className="text-white text-center w-bold bg-green p-2 mb-5 loginTitle">
            Signup
          </h1>
          <SignupForm />
        </div>
      </div>
    </div>
  );
}

export default Signup;

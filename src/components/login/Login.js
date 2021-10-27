import React from 'react';
import LoginForm from './LoginForm';

function Login() {
  return (
    <div className="vh-100 h-100 w-100 position-relative">
      <div className="mx-auto loginContainer background-signing">
        <div className="content-login-width mx-auto p-3">
          <h1 className="text-white text-center w-bold bg-green p-2 mb-5 loginTitle">
            Login
          </h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;

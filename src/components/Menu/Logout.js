import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOutUser } from '../../redux/users/register';
import LogOutForm from './LogoutForm';

const LogOut = () => {
  const user = useSelector((state) => state.userCredentials);
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(logOutUser());
  };

  const { authToken, username } = user;
  return (
    <div>
      <LogOutForm
        token={authToken}
        username={username}
        handleOnClick={handleOnClick}
      />
    </div>
  );
};

export default LogOut;

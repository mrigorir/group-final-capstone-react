import axios from 'axios';
import {
  LOGIN_USER,
  LOGIN_SUCCESSFUL,
  LOGIN_UNSUCCESSFUL,
  SIGNUP_USER,
  SIGNUP_SUCCESSFUL,
  SIGNUP_UNSUCCESSFUL,
  LOGOUT_USER,
} from './actionTypes';

const APISignUP = 'https://morning-chamber-68237.herokuapp.com/api/v1/register';
const APISignIn = 'https://morning-chamber-68237.herokuapp.com/api/v1/sign_in';

export const signUpUser = (userSignUpData) => (dispatch) => {
  dispatch({ type: SIGNUP_USER, payload: {} });
  axios
    .post(
      APISignUP,
      userSignUpData,
    )
    .then((response) => {
      dispatch({
        type: SIGNUP_SUCCESSFUL,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: SIGNUP_UNSUCCESSFUL,
        payload: error.response.data.join(),
      });
    });
};

export const signInUser = (userSignInData) => (dispatch) => {
  dispatch({ type: LOGIN_USER, payload: {} });
  axios
    .post(
      APISignIn,
      userSignInData,
    )
    .then((response) => {
      dispatch({
        type: LOGIN_SUCCESSFUL,
        payload: response.data,
      });
    })
    .catch((error) => {
      if (error.response) {
        dispatch({
          type: LOGIN_UNSUCCESSFUL,
          payload: error.response.data,
        });
      }
    });
};

export const logOutUser = () => (dispatch) => {
  dispatch({ type: LOGOUT_USER, payload: {} });
};

const initialState = {
  user: {},
  username: localStorage.getItem('loggedInUserName'),
  loggedIn: JSON.parse(localStorage.getItem('loggedInStatus')),
  registrationError: '',
  authToken: localStorage.getItem('loggedInUserAuthToken'),
  waitingForRegData: false,
};

const userRegistrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_USER:
      return { ...state, waitingForRegData: true };
    case SIGNUP_SUCCESSFUL:
      return {
        ...state,
        user: action.payload.user,
        username: localStorage.setItem(
          'loggedInUserName',
          action.payload.user.username,
        ),
        loggedIn: localStorage.setItem('loggedInStatus', JSON.stringify(true)),
        registrationError: '',
        authToken: localStorage.setItem(
          'loggedInUserAuthToken',
          action.payload.user.token,
        ),
        waitingForRegData: false,
      };
    case SIGNUP_UNSUCCESSFUL:
      return {
        ...state,
        loggedIn: localStorage.setItem('loggedInStatus', JSON.stringify(false)),
        registrationError: action.payload,
        username: localStorage.setItem('loggedInUserName', ''),
        authToken: localStorage.setItem('loggedInUserAuthToken', ''),
      };
    default:
      return state;
  }
};

export default userRegistrationReducer;

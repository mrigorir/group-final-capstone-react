import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import carsReducer from './cars/cars';
import { addDeleteCarsReducer } from './cars/add&deleteCars';
import { carDetailsReducer } from './cars/detailedCar';
import userAuthenticationReducer from './users/authentication';
import { LOGOUT_USER } from './users/actionTypes';

const appReducer = combineReducers({
  carsReducer,
  addDeleteCarsReducer,
  carDetailsReducer,
  userCredentials: userAuthenticationReducer,
});

const rootReducer = (state, action) => {
  let appState = state;
  if (action.type === LOGOUT_USER) {
    localStorage.setItem('loggedInUserName', '');
    localStorage.setItem('loggedInStatus', JSON.stringify(false));
    localStorage.setItem('loggedInUserAuthToken', '');
    localStorage.setItem('loggedInUser', JSON.stringify({}));
    appState = undefined;
  }
  return appReducer(appState, action);
};

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger),
);

export default store;

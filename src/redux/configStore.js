import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import carsReducer from './cars/cars';
import { addDeleteCarsReducer } from './cars/add&deleteCars';

const reducer = combineReducers({
  carsReducer,
  addDeleteCarsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;

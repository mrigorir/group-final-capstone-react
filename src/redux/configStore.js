import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import carsReducer from './cars/cars';
import { carReducer } from './carDetails';

const reducer = combineReducers({
  cars: carsReducer,
  car: carReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;

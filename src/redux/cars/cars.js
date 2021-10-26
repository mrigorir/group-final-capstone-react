import axios from 'axios';

const FETCH_STARTED = 'group-final-capstone-react/src/redux/cars/car/FETCH_STARTED';
const FETCH_SUCCEDED = 'group-final-capstone-react/src/redux/cars/car/FETCH_SUCCEDED';
const FETCH_FAILED = 'group-final-capstone-react/src/redux/cars/car/FETCH_FAILED';
const CARS_PATH = 'https://morning-chamber-68237.herokuapp.com/api/v1/cars';

const initialstate = {
  cars: [],
  loading: false,
};

export const getCarsStarted = () => ({
  type: FETCH_STARTED,
});

export const getCarsSuccess = (payload) => ({
  type: FETCH_SUCCEDED,
  payload,
});

export const getCarsFailed = (payload) => ({
  type: FETCH_FAILED,
  payload,
});

export const fetchCars = () => axios.get(CARS_PATH);

export const getCars = () => async (dispatch) => {
  dispatch(getCarsStarted());
  const data = await fetchCars();
  dispatch(getCarsSuccess(data.data));
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_STARTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCEDED:
      return {
        ...state, cars: action.payload, loading: false,
      };
    default:
      return state;
  }
};

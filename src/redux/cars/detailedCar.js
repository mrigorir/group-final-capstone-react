import { getCar } from '../../services/carAPIFeatures';

const GET_CAR_DETAILS = 'booka-a-car/cars/car/GET_CAR_DETAILS';

const getCarDetailsAction = (id) => async (dispatch) => {
  const getCarDetails = await getCar(id);

  dispatch({
    type: GET_CAR_DETAILS,
    payload: getCarDetails,
  });
};

const carDetailsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CAR_DETAILS:
      return [...action.payload];
    default:
      return state;
  }
};

export {
  getCarDetailsAction, carDetailsReducer,
};

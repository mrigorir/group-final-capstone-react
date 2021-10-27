import getCars from '../services/carAPIFeatures';

const GET_CAR = 'CarStore/cars/GET_CAR';

export const getCarAction = () => async (dispatch) => {
  const car = await getCars();
  dispatch({
    type: GET_CAR,
    payload: car,
  });
};

export default (state = [], action) => {
  switch (action.type) {
    case GET_CAR:
      return [...action.payload];
    default:
      return state;
  }
};

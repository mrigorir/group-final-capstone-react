import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarDetailsAction } from '../../redux/cars/detailedCar';
import { getCars } from '../../redux/cars/cars';

const hooks = () => {
  const dispatch = useDispatch();
  const car = useSelector((state) => state.carDetailsReducer);
  const cars = useSelector((state) => state.carsReducer.cars);

  useEffect(() => {
    if (car.length !== 0) dispatch(getCarDetailsAction());
    if (!cars.length) dispatch(getCars());
  }, []);
};
export default hooks;

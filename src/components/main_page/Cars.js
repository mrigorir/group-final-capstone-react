import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../../redux/cars/cars';
import Car from './Car';
import style from './Cars.module.css';

const Cars = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.carsReducer.cars);

  useEffect(() => {
    dispatch(getCars());
  }, []);

  if (cars.length === 0) {
    return (
      <h1>loading</h1>
    );
  }
  return (
    <>
      {cars.map((car) => (
        <Car
          id={car.id}
          key={car.id}
          name={car.name}
          imageUrl={car.image_data}
        />
      ))}
    </>
  );
};

export default Cars;

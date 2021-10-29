import React from 'react';
import { useSelector } from 'react-redux';
import hooks from '../hooks/hooks';
import CarDetail from './CarDetail';

const CarDetails = () => {
  const car = useSelector((state) => state.addDeleteCarReducer);

  hooks();
  return (
    <table className="table table-bordered table-striped table-responsive border-secondary my-5">
      <tbody>
        {car.map((car) => (
          <CarDetail
            key={car.id}
            id={car.id}
            name={car.name}
            image={car.image}
          />
        ))}
      </tbody>
    </table>
  );
};

export default CarDetails;

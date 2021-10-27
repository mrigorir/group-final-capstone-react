import React from 'react';
// import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import getCars from '../../services/carAPIFeatures';
import hooks from '../hooks/hooks';
import CarDetail from './CarDetail';

const CarDetails = () => {
  // getCars();

  // return (
  //   <>
  //   </>
  // );
  const car = useSelector((state) => state.car);
  hooks();
  console.log(car);
  return (
    <table className="table table-bordered table-striped table-responsive border-secondary my-5">
      <thead>
        <tr>
          <th>Image</th>
          <th>#</th>
          <th>Name</th>
          <th style={{ opacity: 0 }}>SomeLoremLpsumHere.</th>
        </tr>
      </thead>
      <tbody>
        {car.map((car) => (
          <CarDetail
            key={car.id}
            id={car.id}
            name={car.name}
            image={car.image_data}
          />
        ))}
      </tbody>
    </table>
  );
};

export default CarDetails;

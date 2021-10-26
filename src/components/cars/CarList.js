import React from 'react';
import Car from './Car';

const CarList = () => (
  <div className="position-relative">
    <div className="carList-pos">
      <h1 className="text-white text-center p-3 bg-green mx-auto mb-5 carListTitle"> Your list of cars </h1>
      <ul className="list-unstyled fs-4 fw-bold text-green shadow-lg border-green border-2 mx-auto rounded mb-5 carList p-3">
        <Car />
      </ul>
    </div>
  </div>
);

export default CarList;

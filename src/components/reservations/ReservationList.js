import React from 'react';
import Reservation from './Reservation';

const ReservationList = () => (
  <>
    <div className="position-realtive">
      <div className="list-pos">
        <h1 className="text-white text-center my-3 p-3 bg-green w-75 mx-auto mt-5">Your Reservation List</h1>
        <ul className="list-unstyled fs-4 fw-bold text-green mt-5 p-5 w-100 mx-auto">
          <Reservation />
        </ul>
      </div>
    </div>
  </>
);

export default ReservationList;

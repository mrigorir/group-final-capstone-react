import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Reservation() {
  return (
    <>
      <li className="border border-gray shadow rounded fs-4 fw-bold">
        <FontAwesomeIcon icon={['fas', 'star']} className="text-green w-100 mx-auto my-4" />
        <div className="d-flex align-items-center justify-content-between text-green px-3">
          <p className="text-green reserve-text">
            Car name:
            <span className="text-secondary"> Chevrolett  </span>
          </p>
          <p className="text-green reserve-text">
            Username:
            <span className="text-secondary"> Marco Parra </span>
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-between text-green my-3 px-3">
          <p className="text-green reserve-text">
            Date:
            <span className="text-secondary"> 09-08-1989  </span>
          </p>
          <p className="text-green reserve-text">
            Reserved City:
            <span className="text-secondary"> Miami </span>
          </p>
        </div>
      </li>
    </>
  );
}

export default Reservation;

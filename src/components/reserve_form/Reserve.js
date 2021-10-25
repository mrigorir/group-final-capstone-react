import React from 'react';
import ReserveForm from './ReserveForm';

function Reserve() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 position-relative background-reserve">
      <div className="mx-auto content-width tablet-pos position-absolute">
        <h1 className="text-dark text-center border-bottom border-secondary p-4 mobile-top fw-bold">
          Book a car test-ride
        </h1>
        <p className="text-dark fs-4 lh-lg my-5 text-center">
          We are grateful you are looking at reserving on of our cars for a great test-ride!
          as such, we do recomment yo stick to our policies.
        </p>
        <ReserveForm className="mt-5" />
      </div>
    </div>
  );
}

export default Reserve;

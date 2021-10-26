import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge } from 'react-bootstrap';

const Car = (props) => {
  const {
    name, imageUrl, /* eslint-disable-line react/prop-types */
  } = props;
  return (
    <>
      <li className="d-flex my-3 align-items-center justify-content-between border border-gray shadow p-3 rounded">
        <div>
          <img className="car-img mx-3" src={imageUrl} alt="" />
          {name}
        </div>
        <Badge bg="success" className="py-2">
          <FontAwesomeIcon icon={['fas', 'trash-alt']} className="text-white fs-4" />
        </Badge>
      </li>
    </>
  );
};

export default Car;

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, Image } from 'react-bootstrap';
import { removeCarAction } from '../../redux/cars/add&deleteCars';

const Car = ({ id, name, image }) => {
  const dispatch = useDispatch();
  return (
    <>
      <li className="d-flex align-items-center justify-content-between border border-gray shadow p-2 my-3 rounded">
        <div>
          <Image src={image} alt="car" className="mx-3" width="120" />
          <Badge className="fs-4 ms-3 carname bg-success">
            {name}
          </Badge>
        </div>
        <Badge bg="danger" className="py-2 me-3 remove" id={id} onClick={() => dispatch(removeCarAction(id))}>
          <FontAwesomeIcon icon={['fas', 'trash-alt']} className="text-white fs-4" />
        </Badge>
      </li>
    </>
  );
};

Car.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Car;

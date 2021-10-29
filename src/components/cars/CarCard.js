import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { getCarDetailsAction } from '../../redux/cars/detailedCar';
import '../../dist/styles/cars.css';

const CarCard = ({
  id, name, imageUrl,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <Card id={id} className="rounded m-5 shadow-lg cars">
        <Card.Body className="m-2">
          <Link to="car-details" onClick={() => dispatch(getCarDetailsAction(id))}>
            <Card.Img variant="top" src={imageUrl} width="100" height="170" style={{ borderRadius: '100%' }} />
          </Link>
        </Card.Body>
        <Card.Footer className="bg-white">
          <Card.Title className="text-center fs-4 p-2">
            <Link to="car-details" onClick={() => dispatch(getCarDetailsAction(id))} className="fw-bold text-dark text-decoration-none">
              {name}
            </Link>
          </Card.Title>
          <p className="text-center text-secondary fs-5">{`Description for car #${id}`}</p>
          <div className="d-flex justify-content-between align-items-center p-3 fs-2 fw-bold w-100 pb-3">
            <FontAwesomeIcon icon={['fab', 'twitter']} className="text-dark cursor-pointer" />
            <FontAwesomeIcon icon={['fab', 'instagram']} className="text-dark cursor-pointer" />
            <FontAwesomeIcon icon={['fab', 'google']} className="text-dark cursor-pointer" />
            <FontAwesomeIcon icon={['fab', 'facebook']} className="text-dark cursor-pointer" />
          </div>
        </Card.Footer>
      </Card>
    </>

  );
};
CarCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
export default CarCard;

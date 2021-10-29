import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import showDetailCars from '../../services/carAPIFeatures';
// import logo from '../../dist/images/bg-reserve2.png';

const dispatch = useDispatch();
const CarCard = ({
  index, id, key, name, imageUrl,
}) => (
  <>
    <Card id={id} key={key} className=" border-0 rounded m-5" style={{ width: '20rem' }} onClick={() => dispatch(showDetailCars(id))}>
      <Card.Body className={`background-${index} m-2`} style={{ borderRadius: '100%' }}>
        <Card.Img variant="top" src={imageUrl} />
      </Card.Body>
      <Card.Footer className="bg-white border-0">
        <Card.Title className="fw-bold text-dark text-center fs-4 p-2 mt-5">
          {' '}
          {name}
          {' '}
        </Card.Title>
        <p className="text-center text-secondary fs-5 p-2">jsjsjscjsncjscnjscn</p>
        <div className="d-flex justify-content-between align-items-center p-1 fs-2 fw-bold w-100 pb-3">
          <FontAwesomeIcon icon={['fab', 'twitter']} className="text-dark cursor-pointer" />
          <FontAwesomeIcon icon={['fab', 'instagram']} className="text-dark cursor-pointer" />
          <FontAwesomeIcon icon={['fab', 'google']} className="text-dark cursor-pointer" />
          <FontAwesomeIcon icon={['fab', 'facebook']} className="text-dark cursor-pointer" />
        </div>
      </Card.Footer>
    </Card>
  </>

);
CarCard.propTypes = {
  index: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
export default CarCard;

import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import ReservationList from './ReservationList';

function MyReservations() {
  const [show, setShow] = useState(false);
  const [color, setColor] = useState('text-dark');

  const handleClose = () => {
    setShow(false);
    setColor('text-dark');
  };

  const handleShow = () => {
    setShow(true);
    setColor('text-white');
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} id="myReservationsModal" className={color}>
        My reservations
      </Button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header className="bg-green text-center" closeButton>
          <Modal.Title className="text-uppercase text-white">Your Reservations List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReservationList />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MyReservations;

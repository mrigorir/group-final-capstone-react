import { Modal, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import ItemList from './ItemList';

function AddItem() {
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
      <Button variant="primary" onClick={handleShow} id="addItemModal" className={color}>
        Add Item
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header className="bg-green text-center" closeButton>
          <Modal.Title className="text-uppercase text-white">Add a Car</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="model">
              <Form.Label className="fs-4 fw-bold text-green">Model</Form.Label>
              <Form.Control type="text" placeholder="Enter model" size="lg" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="year">
              <Form.Label className="fs-4 fw-bold text-green">Year</Form.Label>
              <Form.Control type="text" placeholder="Enter the year" size="lg" />
            </Form.Group>
            <div className="d-flex justify-content-between mt-4">
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <div>
                <Button variant="secondary me-3" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose} type="submit">
                  Save Changes
                </Button>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

function DeleteItem() {
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
      <Button variant="primary" onClick={handleShow} id="deleteItemModal" className={color}>
        Delete Item
      </Button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header className="bg-green text-center" closeButton>
          <Modal.Title className="text-uppercase text-white">Car List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ItemList />
        </Modal.Body>
      </Modal>
    </>
  );
}

export { AddItem, DeleteItem };

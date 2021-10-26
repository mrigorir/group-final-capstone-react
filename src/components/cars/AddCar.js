import {
  Container, Row, Col, Form, Button,
} from 'react-bootstrap';
import Sidebar from '../sidebar/Sidebar';

function AddCar() {
  return (
    <>
      <Container fluid className="m-0 p-0">
        <Row>
          <Col lg={2} md={3} xs={12} className="p-0">
            <Sidebar />
          </Col>
          <Col lg={10} md={8} xs={12} className="p-0 position-relative">
            <div className="form-pos">
              <h1 className="text-center text-uppercase text-white fw-bold bg-secondary p-3 mx-auto mt-5 carFormTitle">Add a new car</h1>
              <Form className="mx-auto shadow-lg border border-secondary border-2 rounded p-5 my-5 carForm">
                <Form.Group className="mb-4" controlId="carName">
                  <Form.Label className="fs-4 fw-bold text-secondary">Name</Form.Label>
                  <Form.Control type="text" placeholder="Car Name" size="lg" className="carFormInputs" />
                </Form.Group>
                <Form.Group controlId="carImage" className="mb-4">
                  <Form.Label className="fs-4 fw-bold text-secondary">Image</Form.Label>
                  <Form.Control type="file" size="lg" className="carFormInputs" />
                </Form.Group>
                <div className="d-flex align-items-center justify-content-center mt-5">
                  <Button variant="dark" type="submit" className="fs-4 px-5">
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddCar;

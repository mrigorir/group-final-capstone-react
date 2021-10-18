import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Container fluid className="m-0 p-0">
      <Row>
        <Col xs={1} className="m-0 p-0">
          <Sidebar />
        </Col>
        <Col xs={11} className="bg-secondary m-0 p-0">
          this is a test
        </Col>
      </Row>
    </Container>
  );
}

export default App;

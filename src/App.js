import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Sidebar from './components/Sidebar';

library.add(fas, fab);

function App() {
  return (
    <Router>
      <Container fluid className="m-0 p-0">
        <Row>
          <Col md={2} xs={4} className="ps-4 pt-0 pb-0 pe-0">
            <Sidebar />
          </Col>
          <Col md={10} xs={8} className="p-0">
            Marco Marco Marco Marco Marco
          </Col>
        </Row>

      </Container>
    </Router>
  );
}

export default App;

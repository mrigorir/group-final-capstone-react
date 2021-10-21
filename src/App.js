import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './dist/styles/global.css';
import './dist/styles/sidebar.css';
import Sidebar from './components/sidebar/Sidebar';
import Reserve from './components/Reserve';
import Cars from './components/Cars';

library.add(fas, fab);

function App() {
  return (
    <Router>
      <Switch>
        <>
          <Container fluid className="m-0 p-0">
            <Row>
              <Col lg={2} md={3} xs={12}>
                <Sidebar />
              </Col>
              <Col lg={10} md={9} xs={12}>
                <Route path="/reserve-form">
                  <Reserve />
                </Route>
                <Route exact path="/">
                  <Cars />
                </Route>
              </Col>
            </Row>
          </Container>
        </>
      </Switch>
    </Router>
  );
}

export default App;

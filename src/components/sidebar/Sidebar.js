import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Image, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../dist/images/logo2.png';

const Sidebar = () => (
  <div
    className="h-100 sidebar mw-25 d-flex flex-column overflow-hidden justify-content-md-between justify-content-xs-cetner border-right"
  >
    <div className="mt-3 p-0">
      <Link to="/" className="logo">
        <Image src={logo} className="mx-auto w-100 border-3 border-bottom border-gray pb-2 logo-size" />
      </Link>
      <div className="d-xs-block d-md-none forehead" />
      <div className="d-flex align-items-md-center justify-content-center p-0 m-0 position-relative background">
        <Nav
          className="mt-12 d-flex flex-column text-uppercase fs-5 fw-bold text-justify navsilla"
          defaultActiveKey="/"
        >
          <Nav.Item>
            <Nav.Link eventKey="1" as={Link} to="/cars" className="py-3">
              <FontAwesomeIcon icon={['fas', 'car']} className="me-3" />
              Cars
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2" as={Link} to="/reserve-form" className="py-3">
              <FontAwesomeIcon icon={['fas', 'calendar-check']} className="me-3" />
              Reserve form
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="">
            <Nav.Link eventKey="3" as={Link} to="/my-reservations" className="py-3">
              <FontAwesomeIcon icon={['fas', 'address-card']} className="me-3" />
              My reservations
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="4" as={Link} to="/add-car" className="py-3">
              <FontAwesomeIcon icon={['fas', 'plus-square']} className="me-3" />
              Add Car
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="5" as={Link} to="/delete-car" className="py-3">
              <FontAwesomeIcon icon={['fas', 'minus-square']} className="me-3" />
              Delete Car
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="1" as={Link} to="/signout" className="py-3">
              <FontAwesomeIcon icon={['fas', 'car']} className="me-3" />
              Logout
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className="d-xs-block d-md-none forehead m-bottom" />
    </div>
    <div className="footer border-3 border-top border-gray">
      <div className="d-flex justify-content-between align-items-center p-5 fs-2 fw-bold w-100">
        <FontAwesomeIcon icon={['fab', 'twitter']} className="text-lightblue" />
        <FontAwesomeIcon icon={['fab', 'instagram']} className="text-pink" />
        <FontAwesomeIcon icon={['fab', 'google']} className="text-success" />
        <FontAwesomeIcon icon={['fab', 'facebook']} className="text-blue" />
      </div>
      <p className="text-secondary fw-bold fs-6 me-md-3 text-center">@copyright microverse capstone group</p>
    </div>
  </div>
);

export default Sidebar;

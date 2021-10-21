import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Image, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../dist/images/logo.svg';
import { AddItem, DeleteItem } from './itemFeatures';
import MyReservations from './reserveFeatures';

const Sidebar = () => (
  <div
    className="sidebar mw-25 vh-100 overflow-hidden d-flex flex-column justify-content-between border-right"
  >
    <div className="mt-3 p-0">
      <Link to="/" className="">
        <Image src={logo} width="150" height="150" className="mx-auto w-100 border-3 border-bottom border-gray pb-2" />
      </Link>
      <div className="d-flex align-items-center justify-content-center p-0 m-0">
        <Nav
          className="mt-12 d-flex flex-column text-uppercase fs-5 fw-bold text-justify"
          defaultActiveKey="/"
        >
          <Nav.Item>
            <Nav.Link eventKey="1" as={Link} to="/" className="py-3">
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
            <Nav.Link eventKey="3" as={Link} to="/reservation" className="py-3">
              <FontAwesomeIcon icon={['fas', 'address-card']} className="me-3" />
              <MyReservations />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="4" as={Link} to="/add-car" className="py-3">
              <FontAwesomeIcon icon={['fas', 'plus-square']} className="me-3" />
              <AddItem />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="5" as={Link} to="/delete-car" className="py-3">
              <FontAwesomeIcon icon={['fas', 'minus-square']} className="me-3" />
              <DeleteItem />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
    <div className="footer border-3 border-top border-gray">
      <div className="me-sm-3 ms-sm-0 ms-md-4 d-flex justify-content-around align-items-center p-5 fs-2 fw-bold">
        <FontAwesomeIcon icon={['fab', 'twitter']} className="ms-sm-3 me-md-5 text-lightblue" />
        <FontAwesomeIcon icon={['fab', 'instagram']} className="ms-sm-3 me-md-5 text-pink" />
        <FontAwesomeIcon icon={['fab', 'google']} className="ms-sm-3 me-md-5 text-success" />
        <FontAwesomeIcon icon={['fab', 'facebook']} className="ms-sm-3 me-md-5 text-blue" />
      </div>
      <p className="text-secondary fw-bold fs-6 me-md-3">@copyright microverse capstone group</p>
    </div>
  </div>
);

export default Sidebar;

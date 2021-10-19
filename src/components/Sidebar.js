import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Image, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../dist/images/logo.svg';
import '../dist/styles/sidebar.css';

const Sidebar = () => (
  <div
    className="sidebar mw-25 vh-100 overflow-hidden d-flex flex-column justify-content-between border-right"
  >
    <div className="mt-3">
      <Link to="/" className="">
        <Image src={logo} width="150" height="150" className="mx-auto w-100 border-3 border-bottom border-gray pb-2" />
      </Link>
      <Nav
        className="mt-12 d-flex flex-column text-uppercase fs-5 fw-bold text-center"
        defaultActiveKey="/"
      >
        <Nav.Item>
          <Nav.Link eventKey="1" to="/" className="py-3">
            <FontAwesomeIcon icon={['fas', 'car']} className="me-3" />
            Cars
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2" to="/lifestyles" className="py-3">
            <FontAwesomeIcon icon={['fas', 'calendar-check']} className="me-3" />
            Reserve form
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="">
          <Nav.Link eventKey="3" to="/shop" className="py-3">
            <FontAwesomeIcon icon={['fas', 'address-card']} className="me-3" />
            My Reservatons
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="4" to="/test-drive" className="py-3">
            <FontAwesomeIcon icon={['fas', 'plus-square']} className="me-3" />
            Add Car
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="5" to="/test-drive" className="py-3">
            <FontAwesomeIcon icon={['fas', 'minus-square']} className="me-3" />
            Delete Car
          </Nav.Link>
        </Nav.Item>
      </Nav>
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

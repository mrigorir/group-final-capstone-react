import React from 'react';
import { Nav } from 'react-bootstrap';

function Sidebar() {
  return (
    <div className="d-none d-md-block min-vh-100" style={{ width: '250px' }}>
      <Nav activeKey="/home" className="d-flex flex-column">
        <div className="sidebar-sticky" />
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Sidebar;

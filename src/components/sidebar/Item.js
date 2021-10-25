import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge } from 'react-bootstrap';

function Item() {
  return (
    <>
      <li className="d-flex my-3 align-items-center justify-content-between border border-gray shadow p-3 rounded">
        Card title
        <Badge bg="danger" className="py-2">
          <FontAwesomeIcon icon={['fas', 'trash-alt']} className="text-white fs-4" />
        </Badge>
      </li>
      <li className="d-flex my-3 align-items-center justify-content-between border border-gray shadow p-3 rounded">
        Card title
        <Badge bg="danger" className="py-2">
          <FontAwesomeIcon icon={['fas', 'trash-alt']} className="text-white fs-4" />
        </Badge>
      </li>
      <li className="d-flex my-3 align-items-center justify-content-between border border-gray shadow p-3 rounded">
        Card title
        <Badge bg="danger" className="py-2">
          <FontAwesomeIcon icon={['fas', 'trash-alt']} className="text-white fs-4" />
        </Badge>
      </li>
    </>
  );
}

export default Item;

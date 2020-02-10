import React from 'react';
import * as RB from 'react-bootstrap';

export const Navbar = ({userName, userEmail}) => (
  <RB.Nav className="justify-content-end">
    <RB.Nav.Item>
      <RB.Nav.Link eventKey="disabled" disabled>
        {`Hello, ${userName} - (${userEmail})`}
      </RB.Nav.Link>
    </RB.Nav.Item>
    <RB.Nav.Item>
      <RB.Nav.Link eventKey="link-2">Logout</RB.Nav.Link>
    </RB.Nav.Item>
  </RB.Nav>
);

export default Navbar;
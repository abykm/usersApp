import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default function Menubar() {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">USER APP</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Add users</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">List users</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

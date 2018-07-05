import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class  CustomNav extends React.Component {
  render() {
    return(
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            Joann Site
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem>
              Blog
            </NavItem>
            <NavItem>
              Recipes
            </NavItem>
            <NavItem>
              HempWorx
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default CustomNav;

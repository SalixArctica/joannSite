import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './CustomNav.css'

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
              <Link to="/blog">Blog</Link>
            </NavItem>
            <NavItem>
              <Link to="/recipes">Recipes</Link>
            </NavItem>
            <NavItem>
              <a src="www.hempworx.com/JoAnnL">HempWorx</a>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default CustomNav;

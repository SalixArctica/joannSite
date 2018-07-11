import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './css/CustomNav.css'

class  CustomNav extends React.Component {
  render() {
    return(
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            Joann Site
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem>
              <Link id="navLink" to="/blog">Blog</Link>
            </NavItem>
            <NavItem>
              <Link id="navLink" to="/recipes">Recipes</Link>
            </NavItem>
            <NavItem>
              <a id="navLink" src="www.hempworx.com/JoAnnL">HempWorx</a>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default CustomNav;

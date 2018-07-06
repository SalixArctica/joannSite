import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
              <Link to="/">Blog</Link>
            </NavItem>
            <NavItem>
              <Link to="/recipes">Recipes</Link>
            </NavItem>
            <NavItem>
              <Link to="www.hempworx.com/JoAnnL">HempWorx</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default CustomNav;

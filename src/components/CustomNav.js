import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import FbLogin from './FbLogin.js'
import './css/CustomNav.css'

class  CustomNav extends Component {
  constructor() {
    super();
    this.state = {};
  }

  passUser = (user) => {
    this.props.passUser(user);
  }

  render() {
    return(
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Link to="/">
            <Navbar.Brand>
              Joann Site
            </Navbar.Brand>
          </Link>
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
            <NavItem>
              <FbLogin passUser={this.passUser}/>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default CustomNav;

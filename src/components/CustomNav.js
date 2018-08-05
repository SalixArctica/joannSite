import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
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
              Club HempWorx
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
            <NavDropdown title="Products and Opportunities">
              <MenuItem onClick={() => window.open('http://www.HempWorx.com/JoAnnL', '_blank')}>
                HempWorx
              </MenuItem>
              <MenuItem onClick={() => window.open('http://www.MyDailyChoice.com/JoAnnL', '_blank')}>
                My Daily Choice
              </MenuItem>
              <MenuItem onClick={() => window.open('http://www.HempWorxBizOp.com/JoAnnL', '_blank')}>
                become HempWorx affiliate
              </MenuItem>
              <MenuItem onClick={() => window.open('http://www.WinWithMDC.com/JoAnnL', '_blank')}>
                become My Daily Choice affiliate
              </MenuItem>
            </NavDropdown>
            <NavItem>
              <FbLogin getUser={this.props.user} passUser={this.passUser}/>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default CustomNav;

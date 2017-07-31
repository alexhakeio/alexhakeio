import React, { Component } from 'react';
import { Navbar , NavItem , Nav } from 'react-bootstrap';
import './NavComponent.css'
import { LinkContainer } from 'react-router-bootstrap';

class NavComponent extends Component {
  render() {
    return (
      <Navbar fixedTop={true}>

        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav>
            <LinkContainer exact to='/'><NavItem eventKey={1}>Home</NavItem></LinkContainer>
            <LinkContainer exact to='/news'><NavItem eventKey={2}>News</NavItem></LinkContainer>
            <LinkContainer exact to='/code'><NavItem eventKey={3}>Code</NavItem></LinkContainer>
            <LinkContainer exact to='/about'><NavItem eventKey={4}>About</NavItem></LinkContainer>
            <LinkContainer exact to='/contact'><NavItem eventKey={5}>Contact</NavItem></LinkContainer>
          </Nav>

        </Navbar.Collapse>

      </Navbar>
    );
  }
}
export default NavComponent;

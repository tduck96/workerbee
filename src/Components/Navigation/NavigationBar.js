import React from 'react'

// Bootstap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'



const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to ='/'>
        <Navbar.Brand href="/">WorkerBee</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

              <LinkContainer to ='/'>
              <Nav.Link href='/'>Home</Nav.Link>
              </LinkContainer>
          
      
            <LinkContainer to ='/users'>
              <Nav.Link href="/users">Find and Be Found</Nav.Link>
             </LinkContainer>

            <NavDropdown title="Thomas " id="basic-nav-dropdown">

              <LinkContainer to ='/user/profile/:id'>
              <NavDropdown.Item href="#action/3.1">View Profile</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to ='/user/updateprofile'>
              <NavDropdown.Item href="#action/3.2">
                Update Profile
              </NavDropdown.Item>
              </LinkContainer>
              
              <NavDropdown.Item href="#action/3.3">Yes</NavDropdown.Item>
              <NavDropdown.Divider />
              <LinkContainer to ='/user/logout'>
              <NavDropdown.Item href="#action/3.4">
                Logout
              </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavigationBar

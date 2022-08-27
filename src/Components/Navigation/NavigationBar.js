import React from 'react'

// Bootstap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'
import styles from './NavigationBar.module.css'


const NavigationBar = () => {
  return (
    
      <Navbar bg="light" expand="lg" className = {styles.navContainer}>
      <Container>
        <LinkContainer to ='/'>
        <Navbar.Brand href="/">WorkerBeez</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className = {styles.rightContainer}>

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
    
  )
}

export default NavigationBar

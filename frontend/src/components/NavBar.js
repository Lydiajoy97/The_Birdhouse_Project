import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar}><Container>
  <Navbar.Brand href="#home">The Birdhouse</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Nav.Link href= "bird-spot"> Bird Spotting</Nav.Link>
    <Nav.Link href= "profiles"> Profiles</Nav.Link>
    <Navbar.Text>
      Signed in as: <a href="#login">Mark Otto</a>
    </Navbar.Text>
  </Navbar.Collapse>
</Container></Navbar>
  )
}

export default NavBar
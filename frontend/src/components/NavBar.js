import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar}><Container>
    <Navbar.Brand href="/"> The Birdhouse </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link href= "/bird-spot"> Bird Spotting <i class="fa-solid fa-feather-pointed"></i></Nav.Link>
    <Nav.Link href= "/signin"> Account <i class="fa-solid fa-dove"></i></Nav.Link>
    <Nav.Link href= "/signup"> Create Account <i class="fa-regular fa-id-card"></i></Nav.Link>
  </Navbar.Collapse>
</Container></Navbar>
  )
}

export default NavBar
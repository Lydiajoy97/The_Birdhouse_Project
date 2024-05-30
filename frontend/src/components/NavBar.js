import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from '../styles/NavBar.module.css';
import { NavLink } from 'react-router-dom';

/*NavBar built using code insitute walkthrough and bootstrap */

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar}>
      <Container>
        <NavLink to="/">
        <Navbar.Brand> 
          The Birdhouse 
        </Navbar.Brand></NavLink>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end"><Nav>
          <NavLink 
            exact 
            className={styles.NavLink}
            activeClassName={styles.Active}
            to= "/">
            <i className="fas fa-home"></i>
          </NavLink>
          <NavLink 
            className={styles.NavLink}
            activeClassName={styles.Active}
            to= "/bird-spot"> Bird Spotting 
            <i className="fa-solid fa-feather-pointed"></i>
          </NavLink>
          <NavLink 
            className={styles.NavLink}
            activeClassName={styles.Active} 
            to= "/signin"> Account 
            <i className="fa-solid fa-dove"></i>
          </NavLink>
          <NavLink 
            className={styles.NavLink}
            activeClassName={styles.Active}
            to= "/signup"> Create Account 
            <i className="fa-regular fa-id-card"></i>
          </NavLink></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
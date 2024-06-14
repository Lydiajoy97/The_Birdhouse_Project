import React, { useContext } from 'react'
import { Navbar, Container } from "react-bootstrap";
import styles from '../styles/NavBar.module.css';
import { NavLink } from 'react-router-dom';
import { CurrentUserContext } from "../App";

/*NavBar built using code insitute walkthrough and bootstrap */

const NavBar = () => {
  const currentUser = useContext(CurrentUserContext)
  const LoggedIn = <>{currentUser?.username}</>;
  const LoggedOut = ( 
   <>
          <NavLink 
            className={styles.NavLink}
            activeClassName={styles.Active} 
            to= "/signin"> Sign into Account 
            <i className="fa-solid fa-dove"></i>
          </NavLink>
          <NavLink 
            className={styles.NavLink}
            activeClassName={styles.Active}
            to= "/signup"> Create Account 
            <i className="fa-regular fa-id-card"></i>
          </NavLink>
    </>
  );

  return (
    <Navbar className={styles.NavBar}>
      <Container>
        <Navbar.Brand> 
          The Birdhouse 
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <NavLink 
            exact 
            className={styles.NavLink}
            activeClassName={styles.Active}
            to= "/"> Fly Home 
            <i className="fas fa-home"></i>
          </NavLink>
          <NavLink 
            className={styles.NavLink}
            activeClassName={styles.Active}
            to= "/bird-spot"> Bird Spotting 
            <i className="fa-solid fa-feather-pointed"></i>
          </NavLink>
          {currentUser ? LoggedIn : LoggedOut }
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar
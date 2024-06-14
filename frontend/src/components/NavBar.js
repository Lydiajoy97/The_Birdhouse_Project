import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from '../styles/NavBar.module.css';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import { useCurrentUser } from '../contexts/CurrentUserContext';


/*NavBar built using code insitute walkthrough and bootstrap */

const NavBar = () => {
  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      currentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const currentUser = useCurrentUser();

  const loggedIn = <>{currentUser?.username}</>;
  const LoggedOut = ( <>
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
          <Nav>
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
            <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <i className="fas fa-sign-out-alt"></i>Sign out
      </NavLink>
      <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
      </NavLink>
        {currentUser ? loggedIn : LoggedOut }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar
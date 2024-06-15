import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from '../styles/NavBar.module.css';
import thebirdhouselogo from '../assets/thebirdhouselogo.png';
import { NavLink } from 'react-router-dom';
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import axios from "axios";

/*NavBar built using code insitute walkthrough and bootstrap */
const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const addPostIcon = (
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/bird-posts/create"
    >
      <i className="far fa-plus-square"></i> Add Bird
    </NavLink>
  );

  const loggedInIcons = ( 
   <>
      <NavLink 
        className={styles.NavLink}
        activeClassName={styles.Active} 
        to= "/bird-spots"
      > Fly into Account 
        <i className="fa-solid fa-dove"></i>
      </NavLink>
      <NavLink
        onClick={handleSignOut}
        className={styles.NavLink}
        to= "/" 
      > 
        <i className="fas fa-sign-out-alt"></i>Fly Out
      </NavLink>
      <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      > 
        {currentUser?.username}
      </NavLink>
    </>
  );

  const loggedOutIcons = ( <>
          <NavLink 
            className={styles.NavLink}
            activeClassName={styles.Active} 
            to= "/signin"> Fly into Account 
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
          <img src={thebirdhouselogo} alt="logo" height="60"></img>
        </Navbar.Brand>
        <Navbar.Toggle />
        {currentUser && addPostIcon}
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
              to= "/bird-spot"> Bird house
              <i className="fa-solid fa-feather-pointed"></i>
            </NavLink>
              {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
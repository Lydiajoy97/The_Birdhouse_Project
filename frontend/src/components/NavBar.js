import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";

import styles from '../styles/NavBar.module.css';
import logo from "../assets/logo.png";

import { NavLink } from 'react-router-dom';
import { 
    useCurrentUser, 
    useSetCurrentUser 
  } from '../contexts/CurrentUserContext';
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
      to="/bird-posts/create"
      className={styles.NavLink}
      activeClassName={styles.Active}
    >
      <i className="far fa-plus-square"></i> Add Bird
    </NavLink>
  );

  const loggedInIcons = ( 
    <>
      <NavLink 
        to= "/bird-spots"
        className={styles.NavLink}
        activeClassName={styles.Active} 
      > Fly into Account 
        <i className="fa-solid fa-dove"></i>
      </NavLink>
      <NavLink
        to= "/"
        onClick={handleSignOut}
        className={styles.NavLink}
      >
        <i className="fas fa-sign-out-alt"></i>Fly Out
      </NavLink>
      <NavLink
        to="/profiles"
        className={styles.NavLink}
      >
        {currentUser?.username}
      </NavLink>
    </>
  );

  const loggedOutIcons = ( 
    <>
      <NavLink 
        to= "/signin"
        className={styles.NavLink}
        activeClassName={styles.Active} 
      > Fly into Account 
        <i className="fa-solid fa-dove"></i>
      </NavLink>
      <NavLink 
        to= "/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      > Create Account 
        <i className="fa-regular fa-id-card"></i>
      </NavLink>
      <NavLink 
        to= "/bird-spot"
        className={styles.NavLink}
        activeClassName={styles.Active}
      > Bird house
        <i className="fa-solid fa-feather-pointed"></i>
      </NavLink>
    </>
  );

  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand> 
            <img src={logo} alt="logo" height="60" />
          </Navbar.Brand>
        </NavLink>
        {currentUser && addPostIcon}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavLink 
              exact
              to= "/"
              className={styles.NavLink}
              activeClassName={styles.Active}
            > Fly Home 
              <i className="fas fa-home"></i>
            </NavLink>

              {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
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
import useClickOutsideToggle from '../hooks/useClickOutsideFile';

/*NavBar built using code insitute walkthrough and bootstrap */
const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const {expanded, setExpanded, ref} = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("/dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const addPostIcon = (
    <NavLink
      to="/birdpost/create"
      className={styles.NavLink}
      activeClassName={styles.Active}
    ><i className="far fa-plus-square"></i> Add Bird
    </NavLink>
  );

  const loggedInIcons = ( 
    <>
      <NavLink 
        to= "/birdpost"
        className={styles.NavLink}
        activeClassName={styles.Active} 
      >
        <i className="fa-solid fa-dove"></i>  Bird House  
      </NavLink>
      <NavLink
        to="/profiles"
        className={styles.NavLink}
      ><i class="fa-solid fa-binoculars"></i>  Bird Watchers 
      </NavLink>
      <NavLink
        to="/profiles/:id/edit"
        className={styles.NavLink}
      ><i className="far fa-plus-square"></i>  Add Profile
      </NavLink>
      
      <NavLink
        to= "/"
        onClick={handleSignOut}
        className={styles.NavLink}
      ><i className="fas fa-sign-out-alt"></i>  Fly Out
      </NavLink>
    </>
  );

  const loggedOutIcons = ( 
    <>
      <NavLink 
        to= "/signin"
        className={styles.NavLink}
        activeClassName={styles.Active} 
      ><i className="fa-solid fa-dove"></i>  Fly into Account  
      </NavLink>
      <NavLink 
        to= "/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      ><i className="fa-regular fa-id-card"></i>  Create Account  
      </NavLink>
      <NavLink 
        to= "/birdpost"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >  
        <i className="fa-solid fa-feather-pointed"></i>  Bird house
      </NavLink>
    </>
  );
  return (
    <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand> 
            <img src={logo} alt="logo" height="60" />
          </Navbar.Brand>
        </NavLink>
        {currentUser && addPostIcon}
        <Navbar.Toggle
          ref={ref}
          onClick={() => setExpanded(!expanded)} 
          aria-controls="basic-navbar-nav" 
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavLink 
              exact
              to= "/"
              className={styles.NavLink}
              activeClassName={styles.Active}
            ><i className="fas fa-home"></i>  Fly Home 
            </NavLink>
              {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from '../styles/NavBar.module.css';
import thebirdhouselogo from '../assets/thebirdhouselogo.png';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import { 
  useCurrentUser, 
  useSetCurrentUser,
} from '../contexts/CurrentUserContext';

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

  const loggedIn = ( 
   <>
    <NavLink
      exact 
      className={styles.NavLink}
      to= "/" 
      onClick={handleSignOut}> Fly Out
    </NavLink>
  </>
  );

  const LoggedOut = ( <>
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

export default NavBar;
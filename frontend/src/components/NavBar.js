import React from 'react';
import {Navbar, Container, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <NavBar><Container>
        <NavBar.Brand href="#home">The Birdhouse</NavBar.Brand>
        <NavBar.Toggle />
        <NavBar.Collapse className="justify-content-end">
        <NavBar.Text>
        Signed in as: <a href="#login"></a>
        </NavBar.Text>
        </NavBar.Collapse></Container>
    </NavBar>
  )
}

export default NavBar
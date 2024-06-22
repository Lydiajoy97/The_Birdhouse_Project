import React from 'react';
import Robin from "../../assets/Robin.jpg";
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import appStyles from "../../App.module.css";
import styles from "../../styles/HomePage.module.css"

const HomePage = () => {
    return (
      <div>
        <img src={Robin} alt="Robin in a tree" />
      </div>
    );
  };

export default HomePage;
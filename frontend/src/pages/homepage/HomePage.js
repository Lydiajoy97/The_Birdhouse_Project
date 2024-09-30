import React from 'react';
import Robin from "../../assets/Robin.jpg";
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

// From https://cloudinary.com/guides/web-performance/5-ways-to-import-images-in-react-bonus-automation-method
// Image size from https://reactnative.dev/docs/image-style-props 

const HomePage = () => {
    return (
      <Container>
        <h1>Welcome to The BirdHouse Project!</h1>
        <p>Love birdspotting? Why not sure with others! Create an account and post pictures of the birds you've spotted!</p>
        <Image className='robin-img' src={Robin} alt="Robin in a tree" fluid />
      </Container>
    );
  };

export default HomePage;
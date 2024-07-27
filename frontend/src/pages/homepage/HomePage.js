import React from 'react';
import Robin from "../../assets/Robin.jpg";
import { Container } from 'react-bootstrap';

// From https://cloudinary.com/guides/web-performance/5-ways-to-import-images-in-react-bonus-automation-method
// Image size from https://reactnative.dev/docs/image-style-props 

const HomePage = () => {
    return (
      <Container>
        <img
            style={{ 
              resizeMode: 'cover',
              height: 900,
              width: 1100,
            }} className='robin-img' src={Robin} alt="Robin in a tree" />
      </Container>
    );
  };

export default HomePage;
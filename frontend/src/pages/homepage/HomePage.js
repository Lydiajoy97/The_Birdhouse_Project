import React from 'react';
import Robin from "../../assets/Robin.jpg";

// From https://cloudinary.com/guides/web-performance/5-ways-to-import-images-in-react-bonus-automation-method

const HomePage = () => {
    return (
      <div>
        <img  src={Robin} alt="Robin in a tree" />
      </div>
    );
  };

export default HomePage;
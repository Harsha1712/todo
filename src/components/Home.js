import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import welcomeImage from '../Best-Website-Welcome-Message-Examples.png'; // Replace with your image file

const Home = () => {
  const containerStyle = {
    backgroundColor: '#f8f9fa', // Light gray background color
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    minHeight: '100vh', // Minimum height of the viewport
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  return (
    <div className="container-fluid" style={containerStyle}>
      <div className="mx-auto text-center">
        <h1 className="mb-4">Welcome to Our Website</h1>
        <img
          src={welcomeImage}
          alt="Welcome"
          className="img-fluid rounded mb-4"
          style={{ maxWidth: '400px' }}
        />
        <p>
          Thank you for visiting! Feel free to explore and enjoy your stay.
        </p>
      </div>
    </div>
  );
};

export default Home;

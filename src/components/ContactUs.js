import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {
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
        <h1 className="mb-4">Contact Us</h1>
        <p>
          We would love to hear from you! Reach out to us using the information
          below:
        </p>
        <div className="mt-4">
          <p>
            <strong>Email:</strong> contact@example.com
          </p>
          <p>
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p>
            <strong>Address:</strong> 123 Main St, Cityville, Country
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

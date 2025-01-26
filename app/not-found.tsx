import React from 'react';

const PagenotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1 style={{ fontSize: '4rem', margin: '0.5rem' }}>404</h1>
      <h2 style={{ margin: '0.5rem' }}>Page Not Found</h2>
      <p style={{ margin: '1rem', fontSize: '1.2rem', color: '#666' }}>
        Sorry, the page you're looking for doesn't exist.
      </p>
    </div>
  );
};

export default PagenotFound;

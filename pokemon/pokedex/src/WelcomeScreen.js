//WelcomeScreen.js
import React from 'react';
import { Link } from 'react-router-dom';
const WelcomeScreen = () => {
  return (
    <div className="welcome-screen">
      <h1>Welcome to Pokemon App</h1>
      <Link to="/home">
        <button>Continue</button>
      </Link>
    </div>
  );
};

export default WelcomeScreen;

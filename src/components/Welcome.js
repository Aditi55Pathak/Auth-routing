
import React from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="welcome-container">
      <h1>Welcome!</h1>
      <p>We're glad to have you here. Enjoy your stay!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Welcome;
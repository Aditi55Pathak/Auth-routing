
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page. You can visit the login page or dashboard if logged in.</p>
      <Link to="/login">Go to Login</Link>
    </div>
  );
};

export default Home;

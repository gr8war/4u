// src/Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from './../AuthContext';
import NAVBAR from '../Navbar/Navbar.jsx';
import './Login.css'; // Optional for styling

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Mock authentication (replace with real API call)
    if (username === 'user' && password === 'password') {
      login(); // Update authentication state
      navigate('/dashboard'); // Redirect to a protected route
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <>
    <NAVBAR/>
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/registration">Register here</Link>
      </p>
    </div>
    </>
  );
}

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Optional for styling RegistrationPage
import Navbar from '../Navbar/Navbar.jsx';


export default function RegistrationPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Replace this with your registration logic
    try {
      // Mock registration (replace with real API call)
      if (username && password) {
        // On successful registration, you might redirect to login or another page
        navigate('/login');
      } else {
        setError('Please enter username and password');
      }
    } catch (error) {
      setError('An error occurred');
    }
  };

  return (
    <>
    <Navbar/>
    <div className="register-container">
      <h2>Register</h2>
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
        <button type="submit">Register</button>
      </form>
    </div>
    </>);
}

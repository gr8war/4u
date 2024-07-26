// src/Navbar.js
import { Link } from 'react-router-dom';
import { useAuth } from './../AuthContext';
import './Navbar.css';

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
      SecureFishing
      </Link>
      <ul>
        <li>
          <Link to="/content">Content</Link>
        </li>
        <li>
          <Link to="/quiz">Quiz</Link>
        </li>
        <li>
          <Link to="/simulation">Simulation</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        
          {isLoggedIn ? (
            <>
              <li><Link to="/user">User</Link></li>
            {/* <li><p onClick={logout}>Logout</p></li> */ } 
            </>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        
      </ul>
    </nav>
  );
}

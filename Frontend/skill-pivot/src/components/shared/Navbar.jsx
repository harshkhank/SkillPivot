import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <h2>Skill Pivot</h2>
        </Link>
        
        <div className="navbar-menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/courses" className="nav-link">Courses</Link>
            </li>
            <li className="nav-item">
              <Link to="/instructors" className="nav-link">Instructors</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact Us</Link>
            </li>
          </ul>
          
          <div className="navbar-auth">
            <Link to="/login" className="auth-link login-btn">Login</Link>
            <Link to="/signup" className="auth-link signup-btn">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import '../css/Navbar.css';
 import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import Mobile_nav from './Mobile_nav';
import Csslogo from "../assets/CSS LOGO 1.jpg";
import { nav_events } from '../javascript/script.js';

function Navbar() {
  return (
    <>
      <div className="navbar" onClick={nav_events}>
        <div className="navbar__logo"><img src={Csslogo} alt="" srcSet="" /></div>
        <nav className="navbar__nav">
          <Link to="/">Home</Link>
          <Link to="../Activities">Activities</Link>
          <Link to="../Challenge">Challenge</Link>
          <Link to="../Executives">Executives</Link>
          <Link to="../Blog">Blog</Link>
        </nav>
        <Link to="../account" className="navbar__button">SIGN IN</Link>
      </div>
      <Mobile_nav />
    </>
  );
}

export default Navbar;


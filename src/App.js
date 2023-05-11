
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import Activities from "./pages/Activities";
import Challenge from "./pages/Challenge";
import Executives from "./pages/Executives";
import Blog from "./pages/Blog";
import Account from "./pages/Account";
import Login from "./pages/Login";

 

const App = () => {
  return (
    <Router>
      {
      /* 
      <Link to="/">Home</Link>
      <Link to="/Activities">About</Link>
      <Link to="/Challenge">About</Link>
      <Link to="/Executives">About</Link>
      <Link to="/Blog">About</Link>
      <Link to="/Account">About</Link> 
      */
      }

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Activities" element={<Activities />} />
        <Route path="/Challenge" element={<Challenge />} />
        <Route path="/Executives" element={<Executives />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;




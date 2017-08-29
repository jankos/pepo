import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <nav className="pepo-menu">
    <ul>
      <li><Link to="/">Map</Link></li>
      <li><Link to="/list">List</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </nav>
);

export default Menu;

// ToggleMenu.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as ROUTE from 'constants/routes';
// import './ToggleMenu.scss';

const ToggleMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="toggle-menu-container">
      <button className="toggle-button" onClick={toggleMenu}>
        Toggle Menu
      </button>
      {menuOpen && (
        <ul className="navigation-menu-main">
          <li><NavLink activeClassName="navigation-menu-active" exact to={ROUTE.HOME}>Home</NavLink></li>
          <li><NavLink activeClassName="navigation-menu-active" to={ROUTE.SHOP}>Shop</NavLink></li>
          <li><NavLink activeClassName="navigation-menu-active" to={ROUTE.POST}>Post</NavLink></li>
          <li><NavLink activeClassName="navigation-menu-active" to={ROUTE.FEATURED_PRODUCTS}>Featured</NavLink></li>
          <li><NavLink activeClassName="navigation-menu-active" to={ROUTE.RECOMMENDED_PRODUCTS}>Recommended</NavLink></li>
        </ul>
      )}
    </div>
  );
};

export default ToggleMenu;

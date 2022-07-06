import { ADMIN_PRODUCTS, ADMIN_MENUS, ADMIN_POSTS, ADMIN_USERS1 } from 'constants/routes';
import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Home } from 'views';

const SideNavigation = () => (
  <aside className="sidenavigation">
    <div className="sidenavigation-wrapper">
      <div className="sidenavigation-item">
        <NavLink
          activeClassName="sidenavigation-menu-active"
          className="sidenavigation-menu"
          to={ADMIN_PRODUCTS}
        >
          Products
        </NavLink>
        <NavLink
          activeClassName="sidenavigation-menu-active"
          className="sidenavigation-menu"
          to={ADMIN_MENUS}
        >
          Menus
        </NavLink>

        <NavLink
          activeClassName="sidenavigation-menu-active"
          className="sidenavigation-menu"
          to={ADMIN_POSTS}
        >
          Posts
        </NavLink>

        <NavLink
          activeClassName="sidenavigation-menu-active"
          className="sidenavigation-menu"
          to={ADMIN_USERS1}
        >
          Users
        </NavLink>

      </div>
     
    </div>
  </aside>
);

export default SideNavigation;

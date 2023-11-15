import { ADMIN_DASHBOARD } from 'constants/routes';
import logo from 'images/logo-full.png';
import React from 'react';
import { useSelector } from 'react-redux';
import UserAvatar from 'views/account/components/UserAvatar';
import { useState } from "react";
import "../../styles/side/index.css"
import SideMenu, { menuItems } from "../common/SideMenu";
import { Redirect, Route, BrowserRouter, Router, Switch, Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';

const AdminNavigation = () => {
  const { isAuthenticating, profile } = useSelector((state) => ({
    isAuthenticating: state.app.isAuthenticating,
    profile: state.profile
  }));

  return (
    <nav className="navigation navigation-admin">
      <div className="logo">
        <Link to={ADMIN_DASHBOARD} style={{ display: 'flex', alignItems: 'center' }}>
          {/* <img alt="Logo" src={logo} /> */}
          <h3>ADMIN PANEL2</h3>
        </Link>
      </div>
      <ul className="navigation-menu">
        <li className="navigation-menu-item">
          <UserAvatar
            isAuthenticating={isAuthenticating}
            profile={profile}
          />
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavigation;

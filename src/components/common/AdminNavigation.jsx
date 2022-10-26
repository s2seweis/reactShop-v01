import { ADMIN_DASHBOARD } from 'constants/routes';
import logo from 'images/logo-full.png';
import React from 'react';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import UserAvatar from 'views/account/components/UserAvatar';

import { useState } from "react";

import "../../styles/side/index.css"
import SideMenu, { menuItems } from "../common/SideMenu";

import { Redirect, Route, BrowserRouter, Router, Switch, Link } from 'react-router-dom';




const AdminNavigation = () => {
  const { isAuthenticating, profile } = useSelector((state) => ({
    isAuthenticating: state.app.isAuthenticating,
    profile: state.profile
  }));

  const [inactive, setInactive] = useState(false);



  return (



    <nav className="navigation navigation-admin">


      {/* <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />

      <div className={`container ${inactive ? "inactive" : ""}`}>

        {menuItems.map((menu, index) => (
          <>
            <Route key={menu.name} exact={menu.exact} path={menu.to}>
              <h1>{menu.name}</h1>
            </Route>
            {menu.subMenus && menu.subMenus.length > 0
              ? menu.subMenus.map((subMenu, i) => (
                <Route key={subMenu.name} path={subMenu.to}>
                  <h1>{subMenu.name}</h1>
                </Route>
              ))
              : null}
          </>
        ))}


      </div> */}

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

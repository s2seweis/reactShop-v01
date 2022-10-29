import { ADMIN_DASHBOARD } from 'constants/routes';
import logo from 'images/logo-full.png';
import React from 'react';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import UserAvatar from 'views/account/components/UserAvatar';

import { useState } from "react";

import "../../styles/side/index.css"
// import SideMenu, { menuItems } from "./SideMenu";

import { Redirect, Route, BrowserRouter, Router, Switch, Link } from 'react-router-dom';

import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';




const Side = () => {
 


  const { collapseSidebar } = useProSidebar();



  return (



    <nav className="content-admin-wrapper">



      <div style={{ display: 'flex', height: '100%' }}>
        <Sidebar>
          <Menu>
            <MenuItem
            icon="bi bi-2-square"
            > 
            Documentation
            </MenuItem>
            <MenuItem> Calendar</MenuItem>
            <MenuItem> E-commerce</MenuItem>
          </Menu>
        </Sidebar>
        <main>
          <button onClick={() => collapseSidebar()}>Collap1</button>
        </main>
      </div>


      

      
     
    </nav>




  );
};

export default Side;

/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */



import { AdminNavigation, AdminSideBar } from 'components/common';


import PropType from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, BrowserRouter, Router, Switch } from 'react-router-dom';



import { useState } from "react";


import "../styles/side/index.css"

import SideMenu, { menuItems } from "../components/common/SideMenu";

import Side from "../components/common/Side";

// import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

// import { Sidebar, Menu, MenuItem, useProSidebar, collapseSidebar } from 'react-pro-sidebar';




const AdminRoute = ({
  isAuth, role, component: Component, ...rest
}) => {
  // new version
  // const [inactive, setInactive] = useState(false);

  // sidebar pro
  // const { collapseSidebar } = useProSidebar();



  return (

    <Route
      {...rest}
      component={(props) => (
        isAuth && role === 'ADMIN' ? (
          <>
            <AdminNavigation />


            <main className="content-admin">

            <Side />


              {/* <div style={{ display: 'flex', height: '100%' }}>
                <Sidebar>
                  <Menu>
                    <MenuItem> Documentation</MenuItem>
                    <MenuItem> Calendar</MenuItem>
                    <MenuItem> E-commerce</MenuItem>
                  </Menu>
                </Sidebar>
                <main>
                  <button onClick={() => collapseSidebar()}>Collapse</button>
                </main>
              </div> */}





              {/* old sidebar version */}
              {/* <AdminSideBar /> */}


              {/* <SideMenu
                onCollapse={(inactive) => {
                  console.log(inactive);
                  setInactive(inactive);
                }}
              /> */}

              {/* <div className={`container1 ${inactive ? "inactive" : ""}`}>

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











              <div className="content-admin-wrapper">
                <Component {...props} />
              </div>


            </main>

          </>
        ) : <Redirect to="/" />
      )}
    />
  );
}


const mapStateToProps = ({ auth }) => ({
  isAuth: !!auth,
  role: auth?.role || ''
});

AdminRoute.defaultProps = {
  isAuth: false,
  role: 'USER'
};

AdminRoute.propTypes = {
  isAuth: PropType.bool,
  role: PropType.string,
  component: PropType.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  rest: PropType.any
};

export default connect(mapStateToProps)(AdminRoute);

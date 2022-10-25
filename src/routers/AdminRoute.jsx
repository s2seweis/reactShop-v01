/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import { AdminNavigation, AdminSideBar } from 'components/common';
import { AdminSideBarNew } from 'components/common';
import { SideNavigation } from 'components/common';

// import { SideMenu } from 'components/common';
import SideMenu, { menuItems } from "../components/common/SideMenu";

import PropType from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, BrowserRouter, Router, Switch } from 'react-router-dom';



import { useState } from "react";


import "../styles/side/index.css"




const AdminRoute = ({
  isAuth, role, component: Component, ...rest
}) => {
  // const [inactive, setInactive] = useState(false);



  return (

    <Route
      {...rest}
      component={(props) => (
        isAuth && role === 'ADMIN' ? (
          <>
            <AdminNavigation />
            <main className="content-admin">

              {/* <AdminSideBar /> */}
              {/* <AdminSideBarNew /> */}
              {/* <SideNavigation /> */}



              {/* <SideMenu
                onCollapse={(inactive) => {
                  console.log(inactive);
                  setInactive(inactive);
                }}
              /> */}



              {/* <div className={`container ${inactive ? "inactive" : ""}`}>

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

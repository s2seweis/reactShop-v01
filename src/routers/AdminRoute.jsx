/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { AdminNavigation, AdminSideBar } from 'components/common';
import { AdminSideBarNew } from 'components/common';
// import { SideMenu } from 'components/common';
import SideMenu, { menuItems } from "../components/common/SideMenu";

import PropType from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, BrowserRouter, Router, Switch } from 'react-router-dom';



import { useState } from "react";


// import "./App.css";
import "../styles/side/index.css";


// const Dashboard = () => <h1>Dashboard5</h1>;
// const Content = () => <h1>Content</h1>;
// const Courses = () => <h1>Content/Courses</h1>;
// const Videos = () => <h1>Content/Videos</h1>;
// const Design = () => <h1>Design</h1>;
// const Content2 = () => <h1>Content2</h1>;
// const Courses2 = () => <h1>Content/Courses 2</h1>;
// const Videos2 = () => <h1>Content/Videos 2</h1>;
// const Design2 = () => <h1>Design 2</h1>;


const AdminRoute = ({
  isAuth, role, component: Component, ...rest
}) => 
{
  const [inactive, setInactive] = useState(false);

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
            <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />

        <div className={`container ${inactive ? "inactive" : ""}`}>
          {/* improvememt, not recorded in video, its just looping through menuItems
          instead of hard coding all the routes */}
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

          {/* <Switch>
            <Route exact path={"/"}>
              <Dashboard />
            </Route>
            <Route exact path={"/content"}>
              <Content />
            </Route>
            <Route path={"/content/courses"}>
              <Courses />
            </Route>
            <Route path={"/content/videos"}>
              <Videos />
            </Route>
            <Route path={"/design"}>
              <Design />
            </Route>
            <Route exact path={"/content-2"}>
              <Content2 />
            </Route>
            <Route path={"/content-2/courses"}>
              <Courses2 />
            </Route>
            <Route path={"/content-2/videos"}>
              <Videos2 />
            </Route>
            <Route path={"/design-2"}>
              <Design2 />
            </Route>
          </Switch> */}
        </div>


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
;

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

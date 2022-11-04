import React, { useState } from 'react';
import { Icon } from '../common/Icon';
import "../../styles/side/index.css"

// Alternative

// import { MdFavorite, MdFavoriteBorder } from "react-icons/md";


import { Sidebar, Menu, MenuItem, useProSidebar, collapseSidebar } from 'react-pro-sidebar';

// React Sidebar Pro Yellow Version

import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

import { ADMIN_PRODUCTS, ADMIN_ORDERS, ADMIN_POSTS, ADMIN_USERS1, ADMIN_SETTINGS, ADMIN_DASHBOARD } from 'constants/routes';

import { NavLink, useHistory, useLocation, Link } from 'react-router-dom';







const Side = () => {





  // React Sidebar Pro


  const { collapseSidebar } = useProSidebar();




  // Alternative

  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => setFavorite((prev) => !prev);

  // Hook

  const history = useHistory();






  return (



    <nav className="content-admin-wrapper-sidebar">



      <div style={{ display: 'flex', height: '100%' }}>



        {/* !!!next navlink goes into menuitem */}

        <Sidebar

        // style={{ 
        //   maxWidth: '270px', 
        //   collapsedWidth: '60px',
        //   backgroundColor: 'black'
        // }}


        >
          <Menu>




            {/* Its working - setting status to active!!!! */}

            <MenuItem
              routerLink={<Link to="/admin/dashboard" />}
              active={window.location.pathname === "/admin/dashboard"}
              icon={<Icon name="dashboard" />}
            >

              Dashboard11

              {/* <Link to="/admin/dashboard" /> */}


            </MenuItem>






            <MenuItem

              // routerLink={<Link to={ADMIN_DASHBOARD} />}
              routerLink={<Link to="/admin/dashboard" />}
              icon={<Icon name="dashboard" />}
            >


              About1


              {/* Dashboard */}

            </MenuItem>



            <MenuItem icon={<Icon name="dashboard" />}>

              <NavLink exact to={ADMIN_DASHBOARD}>
                About2
              </NavLink>

              {/* Dashboard */}

            </MenuItem>




            {/* <NavLink
              to={ADMIN_DASHBOARD}> */}
            <MenuItem
              // active={window.location.pathname === "/admin/dashboard"}

              icon={<Icon name="dashboard" />}
            >

              Dashboard

            </MenuItem>
            {/* </NavLink> */}



            <NavLink
              to={ADMIN_SETTINGS}>
              <MenuItem

                icon={<Icon name="settings" />}
              >
                Settings

              </MenuItem>
            </NavLink>



            <NavLink
              to={ADMIN_POSTS}>

              <MenuItem

                icon={<Icon name="posts" />}
              >
                Posts

              </MenuItem>

            </NavLink>



            <NavLink
              to={ADMIN_USERS1}>

              <MenuItem

                icon={<Icon name="users" />}
              >
                Users

              </MenuItem>

            </NavLink>




            <NavLink
              to={ADMIN_PRODUCTS}>

              <MenuItem

                icon={<Icon name="products" />}
              >
                Products

              </MenuItem>

            </NavLink>



            <NavLink
              to={ADMIN_ORDERS}>

              <MenuItem

                icon={<Icon name="orders" />}
              >
                Orders

              </MenuItem>

            </NavLink>







            <NavLink
              to={ADMIN_DASHBOARD}>

              <MenuItem icon={<Icon name="book-2" />}>Docs</MenuItem>

            </NavLink>







            <MenuItem >
              {/* <span> */}

              <button
                // onClick={toggleFavorite} 
                onClick={() => { toggleFavorite(); collapseSidebar() }}
                className="top-rated-car-react-button">
                {favorite ? (
                  <FiArrowRightCircle
                    // className='bigger' 
                    style={{ color: "#F76631", width: "24px", height: "24px" }} />

                ) : (
                  <FiArrowLeftCircle
                    // className='bigger' 
                    style={{ color: "#F76631", width: "24px", height: "24px" }} />
                )}
              </button>
              {/* </span> */}
            </MenuItem>



            {/* <button
              // onClick={toggleFavorite} 
              onClick={() => { toggleFavorite(); collapseSidebar() }}
              className="top-rated-car-react-button">
              {favorite ? (
                <FiArrowRightCircle style={{ color: "#F76631" }} />
              ) : (
                <FiArrowLeftCircle style={{ color: "#F76631" }} />
              )}
            </button> */}




          </Menu>
        </Sidebar>
        {/* <main>
          <button onClick={() => collapseSidebar()}>Collap1</button>
        </main> */}
      </div>






    </nav>




  );
};

export default Side;

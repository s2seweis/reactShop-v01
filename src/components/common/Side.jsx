import React, { useState } from 'react';
import { Icon } from '../common/Icon';
import "../../styles/side/index.css"

// Alternative

import { MdFavorite, MdFavoriteBorder } from "react-icons/md";


import { Sidebar, Menu, MenuItem, useProSidebar, collapseSidebar } from 'react-pro-sidebar';

// React Sidebar Pro Yellow Version

import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle, FiSettings } from "react-icons/fi";

import { ADMIN_PRODUCTS, ADMIN_ORDERS, ADMIN_POSTS, ADMIN_USERS1, ADMIN_SETTINGS, ADMIN_DASHBOARD } from 'constants/routes';

import { NavLink } from 'react-router-dom';







const Side = () => {





  // React Sidebar Pro


  const { collapseSidebar } = useProSidebar();




  // Alternative

  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => setFavorite((prev) => !prev);






  return (



    <nav className="content-admin-wrapper">



      <div style={{ display: 'flex', height: '100%' }}>

        <Sidebar
          style={{ minWidth: '60px', collapsedWidth: '60px' }}

        >
          <Menu>



            <NavLink
             to={ADMIN_DASHBOARD}>
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


            <MenuItem

              icon={<Icon name="users" />}
            >
              Users

            </MenuItem>

            <MenuItem

              icon={<Icon name="products" />}
            >
              Products

            </MenuItem>

            <MenuItem

              icon={<Icon name="orders" />}
            >
              Orders

            </MenuItem>










            <MenuItem icon={<Icon name="book-2" />}>Documentation1</MenuItem>









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

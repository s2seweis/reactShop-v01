import { ADMIN_DASHBOARD } from 'constants/routes';
import React from 'react';

import { Icon } from '../common/Icon';

import "../../styles/side/index.css"

import { useState } from "react";


// Alternative

import { MdFavorite, MdFavoriteBorder } from "react-icons/md";




import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';

// React Sidebar Pro Yellow Version

import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";





const Side = () => {





  // React Sidebar Pro


  const { collapseSidebar } = useProSidebar();




  // Alternative

  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => setFavorite((prev) => !prev);






  return (



    <nav className="content-admin-wrapper">



      <div style={{ display: 'flex', height: '100%' }}>
        <Sidebar>
          <Menu>

            <MenuItem
            // class="bi bi-file-earmark-richtext"
            >
              Documentation1
            </MenuItem>

            <MenuItem
            // class="bi bi-calendar"
            >
              Calendar
            </MenuItem>

            <MenuItem

            >
              E-commerce
            </MenuItem>

            <MenuItem

            >Documentation
            </MenuItem>

            <MenuItem icon={<Icon name="book-2" />}>Documentation1</MenuItem>

            {/* clsoe part */}

            <MenuItem
              icon={<Icon name="close" />}
              onClick={() => collapseSidebar()}
            >
              Close
            </MenuItem>



            {/* <button onClick={() => collapseSidebar()}>Collap1</button> */}





            {/* <div onClick={menuIconClick}> */}

            {/* changing menu collapse icon on click */}

            {/* {collapseSidebar ? (
                <FiArrowRightCircle />
              ) : (
                <FiArrowLeftCircle />
              )}
            </div> */}



            <button
              // onClick={toggleFavorite} 
              onClick={() => { toggleFavorite(); collapseSidebar() }}
              className="top-rated-car-react-button">
              {favorite ? (
                <MdFavoriteBorder style={{ color: "#F76631" }} />
              ) : (
                <MdFavorite style={{ color: "#F76631" }} />
              )}
            </button>





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

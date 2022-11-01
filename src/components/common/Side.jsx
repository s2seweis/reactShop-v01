import { ADMIN_DASHBOARD } from 'constants/routes';
import React from 'react';

import { Icon } from '../common/Icon';

import "../../styles/side/index.css"




import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';




const Side = () => {



  const { collapseSidebar } = useProSidebar();



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

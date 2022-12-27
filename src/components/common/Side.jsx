import React, { useState } from 'react';
import { Icon } from '../common/Icon';
import '../../styles/side/index.css'




import { Sidebar, Menu, MenuItem, useProSidebar, collapseSidebar, SubMenu } from 'react-pro-sidebar';


import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

import { ADMIN_PRODUCTS, ADMIN_ORDERS, ADMIN_POSTS, ADMIN_USERS1, ADMIN_SETTINGS, ADMIN_DASHBOARD, ADMIN_INGREDIENTS, ADMIN_INGREDIENTS_NEW } from 'constants/routes';

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





        <Sidebar
        width={"180px"}
        collapsedWidth={"70px"}
          // overwrite devaultCollapsed property
          defaultCollapsed="true"
        // style={{ 
        //   maxWidth: '270px', 
        //   collapsedWidth: '60px',
        //   backgroundColor: 'black'
        // }}

        >
          <Menu>






            <MenuItem
              routerLink={<Link to="/admin/dashboard" />}
              active={window.location.pathname === "/admin/dashboard"}
              icon={<Icon name="dashboard" />}
            >

              Dashboard

              {/* <Link to="/admin/dashboard" /> */}


            </MenuItem>



            <MenuItem
              routerLink={<Link to={ADMIN_INGREDIENTS_NEW} />}
              active={window.location.pathname === "/admin/ingredients-new"}
              icon={<Icon name="messages" />}
            >

              Ingredients New

              {/* <Link to="/admin/dashboard" /> */}


            </MenuItem>



            <MenuItem
              routerLink={<Link to={ADMIN_INGREDIENTS} />}
              active={window.location.pathname === "/admin/ingredients"}
              icon={<Icon name="messages" />}
            >

              Ingredients



            </MenuItem>


            <MenuItem
              routerLink={<Link to={ADMIN_SETTINGS} />}
              active={window.location.pathname === "/admin/settings"}
              icon={<Icon name="settings" />}
            >

              Settings

              {/* <Link to="/admin/dashboard" /> */}


            </MenuItem>


            <MenuItem
              routerLink={<Link to={ADMIN_POSTS} />}
              active={window.location.pathname === "/admin/posts"}
              icon={<Icon name="posts" />}
            >

              Posts

              {/* <Link to="/admin/dashboard" /> */}


            </MenuItem>


            <MenuItem
              routerLink={<Link to={ADMIN_USERS1} />}
              active={window.location.pathname === "/admin/users1"}
              icon={<Icon name="users" />}
            >

              Users

              {/* <Link to="/admin/dashboard" /> */}


            </MenuItem>



            <MenuItem
              routerLink={<Link to={ADMIN_PRODUCTS} />}
              active={window.location.pathname === "/admin/products"}
              icon={<Icon name="products" />}
            >

              Products

              {/* <Link to="/admin/dashboard" /> */}


            </MenuItem>



            {/* Test: 1 --------------Start */}





            <SubMenu label="Stages" icon={<Icon name="products" />}>

              

              <MenuItem
                routerLink={<Link to={ADMIN_PRODUCTS} />}
                active={window.location.pathname === "/admin/products"}
                icon={<Icon name="products" />}
              >

                Products

                {/* <Link to="/admin/dashboard" /> */}


              </MenuItem>



              <MenuItem>Skill Matrix</MenuItem>
              {/* <MenuItem>Know Your Company</MenuItem>
              <MenuItem>Joining Day Information</MenuItem>
              <MenuItem>Feedback</MenuItem>
              <MenuItem>Background Check</MenuItem> */}

            </SubMenu>









            {/* Test: 1 --------------Start */}


            <MenuItem
              routerLink={<Link to={ADMIN_ORDERS} />}
              active={window.location.pathname === "/admin/orders"}
              icon={<Icon name="orders" />}
            >

              Orders

              {/* <Link to="/admin/dashboard" /> */}


            </MenuItem>


            <MenuItem
              // routerLink={<Link to={ADMIN_ORDERS} />}
              // active={window.location.pathname === "/admin/orders"}
              icon={<Icon name="book-2" />}
            >

              Docs

              {/* <Link to="/admin/dashboard" /> */}


            </MenuItem>





            {/* open and close the sidebar */}

            <MenuItem >
              {/* <span> */}

              <button
                // onClick={toggleFavorite} 
                onClick={() => { toggleFavorite(); collapseSidebar() }}
                className="top-rated-car-react-button">
                {favorite ? (
                  <FiArrowLeftCircle
                    // className='bigger' 
                    style={{ color: "#F76631", width: "24px", height: "24px" }} />

                ) : (
                  <FiArrowRightCircle
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

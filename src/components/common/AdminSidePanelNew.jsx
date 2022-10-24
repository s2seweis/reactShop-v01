import React from "react";



import { Link, NavLink } from 'react-router-dom';
import { FEATURED_PRODUCTS, ADMIN_ORDERS, RECOMMENDED_PRODUCTS, SHOP, ADMIN_PRODUCTS, ADMIN_DASHBOARD, ADMIN_POSTS } from 'constants/routes';





import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaCog, FaUserTie, FaColumns, FaThList, FaBuffer } from "react-icons/fa";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarHeader,
  SubMenu,
  SidebarContent
} from "react-pro-sidebar";

import "react-pro-sidebar/dist/css/styles.css";

import styled from "styled-components";



const Menuitem = styled(MenuItem)`
  :hover {
    background-color: #ffdb58;
    padding: 5px;
    border-radius: 10px;
  }
`;

const SideNavigation = (props) => {
  const { name, subMenus, iconClassName, onClick, to, exact } = props;

  const [collapsed, setCollapsed] = useState(false);
  const styles = {
    sideBarHeight: {
      height: "145vh"
    },
    menuIcon: {
      float: "right",
      margin: "10px"
    }
  };



  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);


  };
  return (
    <ProSidebar style={styles.sideBarHeight} collapsed={collapsed}>

      {/* <SidebarContent> */}

      <SidebarHeader>
        <div style={styles.menuIcon} onClick={onClickMenuIcon}>
          <AiOutlineMenu />
        </div>
      </SidebarHeader>

      <Menu
        iconShape="square"
      >





        {/* <Menuitem icon={<FaColumns />}> Dashboard</Menuitem> */}

        {/* Attempt:1 */}

        <Menuitem>
        <li
          icon={<FaColumns />}

        // className="button"
        >
          <Link to={ADMIN_DASHBOARD}
          // className="button"
          >
            Dashboard
          </Link>
        </li>
        </Menuitem>


        {/* Attempt:2 */}

        <Menuitem
          icon={<FaUserTie />}
        >
          <Link
            to={ADMIN_PRODUCTS}

          // className="button"
          >
            Products
            {/* icon={<FaUserTie />} */}

          </Link>
        </Menuitem>

        {/* Attempt:3 */}

        <Menuitem
          icon={<FaUserTie />}
        >
          <NavLink
            to={ADMIN_POSTS}

          // className="button"
          >
            Posts
            {/* icon={<FaUserTie />} */}

          </NavLink>
        </Menuitem>



        {/* Attempt:4 */}



        <MenuItem
          // icon={<FaBuffer />}
         


        >
          <NavLink
           activeClassName="sidenavigation-menu-active"
           className="sidenavigation-menu"
            to={ADMIN_POSTS}

          >
            Posts
          </NavLink>
        </MenuItem>






       






        {/* <SubMenu title="Stages" icon={<FaBuffer />}>
          <Menuitem>Offer Letter</Menuitem>
          <MenuItem>Skill Matrix</MenuItem>
          <MenuItem>Know Your Company</MenuItem>
          <MenuItem>Joining Day Information</MenuItem>
          <MenuItem>Feedback</MenuItem>
          <MenuItem>Background Check</MenuItem>
        </SubMenu> */}
        <Menuitem icon={<FaCog />}>Settings</Menuitem>



      </Menu>

      {/* </SidebarContent> */}

    </ProSidebar>
  );
};
export default SideNavigation;

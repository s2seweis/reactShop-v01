import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link, useLocation } from 'react-router-dom';

import logo from 'images/logo-full.png';






const MenuBurger = () => {






  return (





    <Menu width={'50%'} {...MenuBurger}>

      <div className="logo">
        <Link
          // onClick={onClickLink} to="/"
          >
          <img alt="Logo" src={logo} />
          </Link>
      </div>


      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/signin">
        Sign-In
      </a>

      <a className="menu-item" href="/">
        Contact
      </a>

      <a className="menu-item" href="/shop">
        Shop
      </a>

      <a className="menu-item" href="/post">
        Posts
      </a>
    </Menu>



  );

};

export default MenuBurger;

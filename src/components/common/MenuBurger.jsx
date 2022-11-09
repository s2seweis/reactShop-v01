import React from "react";
import { slide as Menu } from "react-burger-menu";






const MenuBurger = () => {






  return (


    


    <Menu {...MenuBurger}>
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

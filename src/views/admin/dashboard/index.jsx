import { useDocumentTitle, useScrollTop } from 'hooks';
import React from 'react';
import { useState } from "react";



const Dashboard = () => {
  useDocumentTitle('Welcome | Admin Dashboard');
  useScrollTop();

  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Öffnen");

  return (
    <div className="loader-new">
      <h2>Welcome to admin dashboard1</h2>


      <div className="dropdown-new">
        <div
          onClick={(e) => {
            setIsActive(!isActive);
          }}
          className="dropdown-btn-new"
        >
         <h2>{selected}</h2> 
          <span
            className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"}
          />
        </div>
        <div
          className="dropdown-content"
          style={{ display: isActive ? "block" : "none" }}
        >


          <div
            // onClick={(e) => {
            //   setIsSelected(e.target.textContent);
            //   setIsActive(!isActive);
            // }}
            className="item-new"
          >

            <h1>One</h1>
          </div>
         
         
        </div>
      </div>


    </div>
  );
};

export default Dashboard;

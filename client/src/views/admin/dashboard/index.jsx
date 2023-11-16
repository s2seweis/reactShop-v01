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
      <h2 style={{ textAlign: "center" }}
      >Welcome to admin dashboard1</h2>
      <div className="dropdown-new">
      </div>
    </div>
  );
};

export default Dashboard;

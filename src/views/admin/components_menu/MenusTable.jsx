/* eslint-disable react/forbid-prop-types */
import PropType from 'prop-types';
import React from 'react';
import { MenuItem } from '.';

const MenusTable = ({ filteredMenus }) => (
  <div>
    {filteredMenus.length > 0 && (

      // grid grid-count-4
      <div className="grid grid-product grid-count-4-top">
        {/* <div className="grid-col" /> */}

        
        {/* <div className="grid-col">
          <h5>Date</h5>
        </div>
        <div className="grid-col">
          <h5>Address</h5>
        </div>
        <div className="grid-col">
          <h5>ID</h5>
        </div>
        <div className="grid-col">
          <h5>Total</h5>
        </div> */}


        {/* <div className="grid-col">
          <h5>Qty1</h5>
        </div> */}

      </div>
    )}
    {filteredMenus.length === 0 ? new Array(10).fill({}).map((menu, index) => (
      <MenuItem
        // eslint-disable-next-line react/no-array-index-key
        key={`product-skeleton ${index}`}
        menu={menu}
      />
    )) : filteredMenus.map((menu) => (
      <MenuItem
        key={menu.id}
        menu={menu}
      />
    ))}
  </div>
);

MenusTable.propTypes = {
  filteredMenus: PropType.array.isRequired
};

export default MenusTable;

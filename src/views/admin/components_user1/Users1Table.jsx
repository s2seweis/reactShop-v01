/* eslint-disable react/forbid-prop-types */
import PropType from 'prop-types';
import React from 'react';
import { User1Item } from '.';

const Users1Table = ({ filteredUsers1 }) => (
  <div>
    {filteredUsers1.length > 0 && (
      <div className="grid">
        {/* <div className="grid-col" />
        <div className="grid-col">
          <h5>fullname1</h5>
        </div>
        <div className="grid-col">
          <h5>Role</h5>
        </div>
        <div className="grid-col">
          <h5>Email</h5>
        </div>
        <div className="grid-col">
          <h5>Address</h5>
        </div>
        <div className="grid-col">
          <h5>Mobile</h5>
        </div>
        <div className="grid-col">
          <h5>Date Joined</h5>
        </div>
        <div className="grid-col">
          <h5>Qty</h5>
        </div> */}
      </div>
    )}
    {filteredUsers1.length === 0 ? new Array(10).fill({}).map((user1, index) => (
      <User1Item
        // eslint-disable-next-line react/no-array-index-key
        key={`product-skeleton ${index}`}
        user1={user1}
      />
    )) : filteredUsers1.map((user1) => (
      <User1Item
        key={user1.id}
        user1={user1}
      />
    ))}
  </div>
);

Users1Table.propTypes = {
  filteredUsers1: PropType.array.isRequired
};

export default Users1Table;

// okay

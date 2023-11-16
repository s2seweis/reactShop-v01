/* eslint-disable react/forbid-prop-types */
import PropType from 'prop-types';
import React from 'react';
import { User1Item } from '.';

const Users1Table = ({ filteredUsers1 }) => (
  <div>
    {filteredUsers1.length > 0 && (
      <div className="grid">
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
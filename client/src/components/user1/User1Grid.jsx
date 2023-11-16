import { useBasket } from 'hooks';
import PropType from 'prop-types';
import React from 'react';
import User1Item from './User1Item';

const User1Grid = ({ users1 }) => {
  const { addToBasket, isItemOnBasket } = useBasket();

  return (
    <div className="product-grid">
      {users1.length === 0 ? new Array(12).fill({}).map((user1, index) => (
        <User1Item
          // eslint-disable-next-line react/no-array-index-key
          key={`product-skeleton ${index}`}
          user1={user1}
        />
      )) : users1.map((user1) => (
        <User1Item
          key={user1.id}
          isItemOnBasket={isItemOnBasket}
          addToBasket={addToBasket}
          user1={user1}
        />
      ))}
    </div>
  );
};

User1Grid.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  users1: PropType.array.isRequired
};

export default User1Grid;
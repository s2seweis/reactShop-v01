/* eslint-disable react/forbid-prop-types */
import { FeaturedUser1 } from 'components/user1';
import PropType from 'prop-types';
import React from 'react';

const User1Showcase = ({ users1, skeletonCount }) => (
  <div className="product-display-grid">
    {(users1.length === 0) ? new Array(skeletonCount).fill({}).map((user1, index) => (
      <FeaturedUser1
        // eslint-disable-next-line react/no-array-index-key
        key={`product-skeleton ${index}`}
        user1={user1}
      />
    )) : users1.map((user1) => (
      <FeaturedUser1
        key={user1.id}
        user1={user1}
      />
    ))}
  </div>
);

User1Showcase.defaultProps = {
  skeletonCount: 4
};

User1Showcase.propTypes = {
  users1: PropType.array.isRequired,
  skeletonCount: PropType.number
};

export default User1Showcase;
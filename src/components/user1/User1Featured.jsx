import { ImageLoader } from 'components/common';
import PropType from 'prop-types';
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useHistory } from 'react-router-dom';

const User1Featured = ({ user1 }) => {
  const history = useHistory();
  const onClickItem = () => {
    if (!user1) return;

    history.push(`/user1/${user1.id}`);
  };

  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
      <div className="product-display" onClick={onClickItem} role="presentation">
        <div className="product-display-img">
          {user1.image ? (
            <ImageLoader
              className="product-card-img"
              src={user1.image}
            />
          ) : <Skeleton width="100%" height="100%" />}
        </div>
        <div className="product-display-details">
          <h2>{user1.name || <Skeleton width={80} />}</h2>
          <p className="text-subtle text-italic">
            {user1.brand || <Skeleton width={40} />}
          </p>
        </div>
      </div>
    </SkeletonTheme>
  );
};

User1Featured.propTypes = {
  user1: PropType.shape({
    image: PropType.string,
    name: PropType.string,
    id: PropType.string,
    brand: PropType.string
  }).isRequired
};

export default User1Featured;

// okay
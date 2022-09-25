import { ImageLoader } from 'components/common';
import PropType from 'prop-types';
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useHistory } from 'react-router-dom';

const OrderFeatured = ({ order }) => {
  const history = useHistory();
  const onClickItem = () => {
    if (!order) return;

    history.push(`/order/${order.id}`);
  };

  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
      <div className="product-display" onClick={onClickItem} role="presentation">
        <div className="product-display-img">
          {order.image ? (
            <ImageLoader
              className="product-card-img"
              src={order.image}
            />
          ) : <Skeleton width="100%" height="100%" />}
        </div>
        <div className="product-display-details">
          <h2>{order.name || <Skeleton width={80} />}</h2>
          <p className="text-subtle text-italic">
            {order.brand || <Skeleton width={40} />}
          </p>
        </div>
      </div>
    </SkeletonTheme>
  );
};

OrderFeatured.propTypes = {
  order: PropType.shape({
    image: PropType.string,
    name: PropType.string,
    id: PropType.string,
    brand: PropType.string
  }).isRequired
};

export default OrderFeatured;

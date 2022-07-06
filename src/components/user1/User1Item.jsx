import { CheckOutlined } from '@ant-design/icons';
import { ImageLoader } from 'components/common';
import { displayMoney } from 'helpers/utils';
import PropType from 'prop-types';
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useHistory } from 'react-router-dom';

const User1Item = ({ user1, isItemOnBasket, addToBasket }) => {
  const history = useHistory();

  const onClickItem = () => {
    if (!user1) return;

    if (user1.id) {
      history.push(`/user1/${user1.id}`);
    }
  };

  const itemOnBasket = isItemOnBasket ? isItemOnBasket(user1.id) : false;

  const handleAddToBasket = () => {
    if (addToBasket) addToBasket({ ...user1, selectedSize: user1.sizes[0] });
  };

  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
      <div
        className={`product-card ${!user1.id ? 'product-loading' : ''}`}
        style={{
          border: user1 && itemOnBasket ? '1px solid #a6a5a5' : '',
          boxShadow: user1 && itemOnBasket ? '0 10px 15px rgba(0, 0, 0, .07)' : 'none'
        }}
      >
        {itemOnBasket && <CheckOutlined className="fa fa-check product-card-check" />}
        <div
          className="product-card-content"
          onClick={onClickItem}
          role="presentation"
        >
          <div className="product-card-img-wrapper">
            {user1.image ? (
              <ImageLoader
                alt={user1.name}
                className="product-card-img"
                src={user1.image}
              />
            ) : <Skeleton width="100%" height="90%" />}
          </div>
          <div className="product-details">
            <h5 className="product-card-name text-overflow-ellipsis margin-auto">
              {user1.name || <Skeleton width={80} />}
            </h5>
            <h5 className="product-card-name text-overflow-ellipsis margin-auto">
              {user1.name || <Skeleton width={80} />}
            </h5>
            <p className="product-card-brand">
              {user1.brand || <Skeleton width={60} />}
            </p>
            <h4 className="product-card-price">
              {user1.price ? displayMoney(product.price) : <Skeleton width={40} />}
            </h4>
          </div>
        </div>
        {user1.id && (
          <button
            className={`product-card-button button-small button button-block ${itemOnBasket ? 'button-border button-border-gray' : ''}`}
            onClick={handleAddToBasket}
            type="button"
          >
            {itemOnBasket ? 'Remove from basket' : 'Add to basket1'}
          </button>
        )}

      </div>
    </SkeletonTheme>
  );
};

User1Item.defaultProps = {
  isItemOnBasket: undefined,
  addToBasket: undefined
};

User1Item.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  user1: PropType.object.isRequired,
  isItemOnBasket: PropType.func,
  addToBasket: PropType.func
};

export default User1Item;

// okay
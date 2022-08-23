import { ImageLoader } from 'components/common';
import { EDIT_USER1 } from 'constants/routes';
import { displayActionMessage, displayDate, displayMoney } from 'helpers/utils';
import PropType from 'prop-types';
import React, { useRef } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import { removeUser1 } from 'redux/actions/user1Actions';

import { useSelector } from 'react-redux';


const User1Item = ({ user1 }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user1Ref = useRef(null);


  const onClickEdit = () => {
    history.push(`${EDIT_USER1}/${user1.id}`);
  };

  const onDeleteUser1 = () => {
    user1Ref.current.classList.toggle('item-active');
  };

  const onConfirmDelete = () => {
    dispatch(removeUser1(user1.id));
    displayActionMessage('Item successfully deleted');
    user1Ref.current.classList.remove('item-active');
  };

  const onCancelDelete = () => {
    user1Ref.current.classList.remove('item-active');
  };

  return (
    <SkeletonTheme
      color="#e1e1e1"
      highlightColor="#f2f2f2"
    >
      <div
        className={`item item-products ${!user1.id && 'item-loading'}`}
        ref={user1Ref}
      >
        <div className="grid grid-count-8">
          <div className="grid-col item-img-wrapper">
            {user1.avatar ? (
              <ImageLoader
                alt={user1.name}
                className="item-img"
                src={user1.avatar}
              />
            ) : <Skeleton width={50} height={30} />}
          </div>
          <div className="grid-col">
            <span className="text-overflow-ellipsis">{user1.fullname || <Skeleton width={50} />}</span>
          </div>
          <div className="grid-col">
            <span>{user1.role || <Skeleton width={50} />}</span>
          </div>

          <div className="grid-col">
            <span className="text-overflow-ellipsis">{user1.email || <Skeleton width={50} />}</span>
          </div>

          <div className="grid-col">
            <span className="text-overflow-ellipsis">{user1.address || <Skeleton width={50} />}</span>
          </div>
          {/* <div className="grid-col">
            <span className="text-overflow-ellipsis">{user1.mobile || <Skeleton width={50} />}</span>
          </div> */}

          <div className="grid-col">
            {user1.mobile ? (
              <h5>{user1.mobile.value}</h5>
            ) : (
              <h5 className="text-subtle text-italic">Mobile not set</h5>
            )}
          </div>


          {/* <div className="grid-col">
            <span>{user1.price ? displayMoney(user1.price) : <Skeleton width={30} />}</span>
          </div> */}
          <div className="grid-col">
            <span>
              {user1.dateJoined ? displayDate(user1.dateJoined) : <Skeleton width={30} />}
            </span>
          </div>
          {/* <div className="grid-col">
            <span>{user1.maxQuantity || <Skeleton width={20} />}</span>
          </div> */}
        </div>
        {user1.id && (
          <div className="item-action">
            <button
              className="button button-border button-small"
              onClick={onClickEdit}
              type="button"
            >
              Edit1
            </button>
            &nbsp;
            <button
              className="button button-border button-small button-danger"
              onClick={onDeleteUser1}
              type="button"
            >
              Delete
            </button>
            <div className="item-action-confirm">
              <h5>Are you sure you want to delete this?</h5>
              <button
                className="button button-small button-border"
                onClick={onCancelDelete}
                type="button"
              >
                No
              </button>
              &nbsp;
              <button
                className="button button-small button-danger"
                onClick={onConfirmDelete}
                type="button"
              >
                Yes
              </button>
            </div>
          </div>
        )}
      </div>
    </SkeletonTheme>
  );
};

User1Item.propTypes = {
  user1: PropType.shape({
    id: PropType.string,
    fullname: PropType.string,
    role: PropType.string,
    email: PropType.string,
    address: PropType.string,
    mobile: PropType.number,
    // price: PropType.number,
    // maxQuantity: PropType.number,
    description: PropType.string,
    keywords: PropType.arrayOf(PropType.string),
    imageCollection: PropType.arrayOf(PropType.object),
    sizes: PropType.arrayOf(PropType.string),
    image: PropType.string,
    imageUrl: PropType.string,
    isFeatured: PropType.bool,
    isRecommended: PropType.bool,
    dateJoined: PropType.number,
    availableColors: PropType.arrayOf(PropType.string)
  }).isRequired
};

export default withRouter(User1Item);

// okay

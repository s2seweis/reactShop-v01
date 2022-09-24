import { ImageLoader } from 'components/common';
import { EDIT_SETTING } from 'constants/routes';
import { displayActionMessage, displayDate, displayMoney } from 'helpers/utils';
import PropType from 'prop-types';
import React, { useRef } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import { removeSetting } from 'redux/actions/settingActions';

const SettingItem = ({ setting }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const settingRef = useRef(null);

  const onClickEdit = () => {
    history.push(`${EDIT_SETTING}/${setting.id}`);
  };

  const onDeleteSetting = () => {
    settingRef.current.classList.toggle('item-active');
  };

  const onConfirmDelete = () => {
    dispatch(removeSetting(setting.id));
    displayActionMessage('Item successfully deleted');
    settingRef.current.classList.remove('item-active');
  };

  const onCancelDelete = () => {
    settingRef.current.classList.remove('item-active');
  };

  return (
    <SkeletonTheme
      color="#e1e1e1"
      highlightColor="#f2f2f2"
    >
      <div
        className={`item item-products ${!setting.id && 'item-loading'}`}
        ref={settingRef}
      >
        <div className="grid grid-count-6">
          <div className="grid-col item-img-wrapper">
            {setting.image ? (
              <ImageLoader
                alt={setting.name}
                className="item-img"
                src={setting.image}
              />
            ) : <Skeleton width={50} height={30} />}
          </div>
          <div className="grid-col">
            <span className="text-overflow-ellipsis">{setting.name || <Skeleton width={50} />}</span>
          </div>
          <div className="grid-col">
            <span>{setting.brand || <Skeleton width={50} />}</span>
          </div>
          <div className="grid-col">
            <span>{setting.price ? displayMoney(setting.price) : <Skeleton width={30} />}</span>
          </div>
          <div className="grid-col">
            <span>
              {setting.dateAdded ? displayDate(setting.dateAdded) : <Skeleton width={30} />}
            </span>
          </div>
          <div className="grid-col">
            <span>{setting.maxQuantity || <Skeleton width={20} />}</span>
          </div>
        </div>
        {setting.id && (
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
              onClick={onDeleteSetting}
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

SettingItem.propTypes = {
  setting: PropType.shape({
    id: PropType.string,
    name: PropType.string,
    brand: PropType.string,
    price: PropType.number,
    maxQuantity: PropType.number,
    description: PropType.string,
    keywords: PropType.arrayOf(PropType.string),
    imageCollection: PropType.arrayOf(PropType.object),
    sizes: PropType.arrayOf(PropType.string),
    image: PropType.string,
    imageUrl: PropType.string,
    isFeatured: PropType.bool,
    isRecommended: PropType.bool,
    dateAdded: PropType.number,
    availableColors: PropType.arrayOf(PropType.string)
  }).isRequired
};

export default withRouter(SettingItem);

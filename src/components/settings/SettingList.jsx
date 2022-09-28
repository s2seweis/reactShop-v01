/* eslint-disable react/forbid-prop-types */
import { Boundary, MessageDisplay } from 'components/common';
import PropType from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from 'redux/actions/miscActions';
import { getSettings } from 'redux/actions/settingActions';

const SettingList = (props) => {
  const {
   settings, filteredSettings, isLoading, requestStatus, children
  } = props;
  const [isFetching, setFetching] = useState(false);
  const dispatch = useDispatch();

  const fetchSettings = () => {
    setFetching(true);
    dispatch(getSettings(settings.lastRefKey));
  };

  useEffect(() => {
    if (settings.items.length === 0 || !settings.lastRefKey) {
      fetchSettings();
    }

    window.scrollTo(0, 0);
    return () => dispatch(setLoading(false));
  }, []);

  useEffect(() => {
    setFetching(false);
  }, [settings.lastRefKey]);

  if (filteredSettings.length === 0 && !isLoading) {
    return (
      <MessageDisplay message={requestStatus?.message || 'No settings found for the moment.'} />
    );
  } if (filteredSettings.length === 0 && requestStatus) {
    return (
      <MessageDisplay
        message={requestStatus?.message || 'Something went wrong :('}
        action={fetchSettings}
        buttonLabel="Try Again"
      />
    );
  }
  return (
    <Boundary>
      {children}
      {/* Show 'Show More' button if settings length is less than total settings */}
      {settings.items.length < settings.total && (
        <div className="d-flex-center padding-l">
          <button
            className="button button-small"
            disabled={isFetching}
            onClick={fetchSettings}
            type="button"
          >
            {isFetching ? 'Fetching Items...' : 'Show More Items'}
          </button>
        </div>
      )}
    </Boundary>
  );
};

SettingList.defaultProps = {
  requestStatus: null
};

SettingList.propTypes = {
  settings: PropType.object.isRequired,
  filteredSettings: PropType.array.isRequired,
  isLoading: PropType.bool.isRequired,
  requestStatus: PropType.string,
  children: PropType.oneOfType([
    PropType.arrayOf(PropType.node),
    PropType.node
  ]).isRequired
};

export default SettingList;

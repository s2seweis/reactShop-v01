/* eslint-disable react/forbid-prop-types */
import { Boundary, MessageDisplay } from 'components/common';
import PropType from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from 'redux/actions/miscActions';
import { getSetting } from 'redux/actions/settingActions';

const SettingList = (props) => {
  const {
   settings, filteredSettings, isLoading, requestStatus, children
  } = props;
  const [isFetching, setFetching] = useState(false);
  const dispatch = useDispatch();

  const fetchSettings = () => {
    setFetching(true);
    dispatch(getSetting(settings));
  };

  useEffect(() => {
    if (settings === 0 || !settings.lastRefKey) {
      fetchSettings();
    }

    window.scrollTo(0, 0);
    return () => dispatch(setLoading(false));
  }, []);

  useEffect(() => {
    setFetching(false);
  }, [settings.lastRefKey]);

  return (
    <Boundary>
      {children}
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

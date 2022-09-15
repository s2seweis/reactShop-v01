/* eslint-disable react/forbid-prop-types */
import { Boundary, MessageDisplay } from 'components/common';
import PropType from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from 'redux/actions/miscActions';
import { getUsers1 } from 'redux/actions/user1Actions';

const User1List = (props) => {
  const {
    users1, filteredUsers1, isLoading, requestStatus, children
  } = props;
  const [isFetching, setFetching] = useState(false);
  const dispatch = useDispatch();

  const fetchUsers1 = () => {
    setFetching(true);
    dispatch(getUsers1(users1.lastRefKey));
  };

  useEffect(() => {
    if (users1.items.length === 0 || !users1.lastRefKey) {
      fetchUsers1();
    }

    window.scrollTo(0, 0);
    return () => dispatch(setLoading(false));
  }, []);

  useEffect(() => {
    setFetching(false);
  }, [users1.lastRefKey]);

  if (filteredUsers1.length === 0 && !isLoading) {
    return (
      <MessageDisplay message={requestStatus?.message || 'No users1 found.'} />
    );
  } if (filteredUsers1.length === 0 && requestStatus) {
    return (
      <MessageDisplay
        message={requestStatus?.message || 'Something went wrong :('}
        action={fetchUsers1}
        buttonLabel="Try Again"
      />
    );
  }
  return (
    <Boundary>
      {children}
      {/* Show 'Show More' button if users1 length is less than total users1 */}
      {users1.items.length < users1.total && (
        <div className="d-flex-center padding-l">
          <button
            className="button button-small"
            disabled={isFetching}
            onClick={fetchUsers1}
            type="button"
          >
            {isFetching ? 'Fetching Items...' : 'Show More Items'}
          </button>
        </div>
      )}
    </Boundary>
  );
};

User1List.defaultProps = {
  requestStatus: null
};

User1List.propTypes = {
  users1: PropType.object.isRequired,
  filteredUsers1: PropType.array.isRequired,
  isLoading: PropType.bool.isRequired,
  requestStatus: PropType.string,
  children: PropType.oneOfType([
    PropType.arrayOf(PropType.node),
    PropType.node
  ]).isRequired
};

export default User1List;

// okay
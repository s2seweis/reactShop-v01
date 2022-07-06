/* eslint-disable react/jsx-props-no-spreading */
import { Boundary } from 'components/common';
import { User1AppliedFilters, User1List } from 'components/user1';
import { useDocumentTitle, useScrollTop } from 'hooks';
import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectFilter } from 'selectors/selector_user1';

import { Users1Navbar } from '../components_user1';

import Users1Table from '../components_user1/Users1Table';

const Users1 = () => {
  useDocumentTitle('User1 List | Salinaka Admin');
  useScrollTop();

  const store = useSelector((state) => ({
    filteredUsers1: selectFilter(state.users1.items, state.filter),
    requestStatus: state.app.requestStatus,
    isLoading: state.app.loading,
    users1: state.users1
  }));

  return (
    <Boundary>
      <Users1Navbar
        users1Count={store.users1.items.length}
        totalUsers1Count={store.users1.total}
      />
      <div className="product-admin-items">
        <User1List {...store}>
          <User1AppliedFilters filter={store.filter} />
          <Users1Table filteredUsers1={store.filteredUsers1} />
        </User1List>
      </div>
    </Boundary>
  );
};

export default withRouter(Users1);

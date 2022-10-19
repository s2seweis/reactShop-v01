/* eslint-disable react/no-multi-comp */
import { LoadingOutlined } from '@ant-design/icons';
import { useDocumentTitle, useScrollTop } from 'hooks';
import React, { lazy, Suspense } from 'react';
import UserTab from '../../../views/account/components/UserTab';

const SettingAccountTab = lazy(() => import('../component_setting/SettingTab'));
const UserWishListTab = lazy(() => import('../component_setting/components/SettingListTab'));
const UserOrdersTab = lazy(() => import('../../../views/account/components/UserOrdersTab'));

const Loader = () => (
  <div className="loader" style={{ minHeight: '80vh' }}>
    <LoadingOutlined />
    <h6>Loading ... </h6>
  </div>
);

const UserAccount = () => {
  useScrollTop();
  useDocumentTitle('My Settings | Salinaka');

  return (
    <UserTab>
      <div index={0} label="General">
        <Suspense fallback={<Loader />}>
          <SettingAccountTab />
        </Suspense>
      </div>
      <div index={1} label="Advanced">
        <Suspense fallback={<Loader />}>
          <UserWishListTab />
        </Suspense>
      </div>
      <div index={2} label="My Orders">
        <Suspense fallback={<Loader />}>
          <UserOrdersTab />
        </Suspense>
      </div>
    </UserTab>
  );
};

export default UserAccount;

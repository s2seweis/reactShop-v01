import { LoadingOutlined } from '@ant-design/icons';
import { useDocumentTitle, useScrollTop } from 'hooks';
import React, { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addSetting } from 'redux/actions/settingActions';

const SettingForm = lazy(() => import('../component_setting/SettingForm'));

const AddSetting = () => {
  useScrollTop();
  useDocumentTitle('Add New Setting | Salinaka');
  const isLoading = useSelector((state) => state.app.loading);
  const dispatch = useDispatch();

  const onSubmit = (setting) => {
    dispatch(addSetting(setting));
  };

  return (
    <div className="product-form-container">
      <h2>Add New Setting1</h2>
      <Suspense fallback={(
        <div className="loader" style={{ minHeight: '80vh' }}>
          <h6>Loading ... </h6>
          <br />
          <LoadingOutlined />
        </div>
      )}
      >
      
        <SettingForm
          isLoading={isLoading}
          onSubmit={onSubmit}
          setting={{
            name: '',
            brand: '',
            price: 0,
            maxQuantity: 0,
            description: '',
            keywords: [],
            sizes: [],
            image: '',
            isFeatured: false,
            isRecommended: false,
            availableColors: [],
            imageCollection: []
          }}
        />
      </Suspense>
    </div>
  );
};

export default withRouter(AddSetting);

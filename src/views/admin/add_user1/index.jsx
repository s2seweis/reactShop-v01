import { LoadingOutlined } from '@ant-design/icons';
import { useDocumentTitle, useScrollTop } from 'hooks';
import React, { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addUser1 } from 'redux/actions/user1Actions';

const User1Form = lazy(() => import('../components_user1/User1Form'));

const AddUser1 = () => {
  useScrollTop();
  useDocumentTitle('Add New User2 | Dign');
  const isLoading = useSelector((state) => state.app.loading);
  const dispatch = useDispatch();

  const onSubmit = (user1) => {
    dispatch(addUser1(user1));
  };

  return (
    <div className="product-form-container">
      <h2>Add New User1</h2>
      <Suspense fallback={(
        <div className="loader" style={{ minHeight: '80vh' }}>
          <h6>Loading ... </h6>
          <br />
          <LoadingOutlined />
        </div>
      )}
      >
        <User1Form
          isLoading={isLoading}
          onSubmit={onSubmit}
          user1={{
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

export default withRouter(AddUser1);

// okay

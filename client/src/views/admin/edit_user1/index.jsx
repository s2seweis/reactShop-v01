import { LoadingOutlined } from '@ant-design/icons';
import { useDocumentTitle, useUser1, useScrollTop } from 'hooks';
import PropType from 'prop-types';
import React, { lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { editUser1 } from 'redux/actions/userActions';

const User1Form = lazy(() => import('../components_user1/UserForm'));

const EditUser1 = ({ match }) => {
  useDocumentTitle('Edit User1 | Shirts Sale!');
  useScrollTop();
  const { user1, error, isLoading } = useUser1(match.params.id);
  const dispatch = useDispatch();

  const onSubmitForm = (updates) => {
    dispatch(editUser1(user1.id, updates));
  };

  return (
    <div className="product-form-container">
      {error && <Redirect to="/dashboard/products" />}
      <h2>Edit User1</h2>
      {user1 && (
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
            onSubmit={onSubmitForm}
            user1={user1}
          />
        </Suspense>
      )}
    </div>
  );
};

EditUser1.propTypes = {
  match: PropType.shape({
    params: PropType.shape({
      id: PropType.string
    })
  }).isRequired
};

export default withRouter(EditUser1);
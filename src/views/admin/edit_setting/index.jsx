import { LoadingOutlined } from '@ant-design/icons';
import { useDocumentTitle, useSetting, useScrollTop } from 'hooks';
import PropType from 'prop-types';
import React, { lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { editSetting } from 'redux/actions/settingActions';

const SettingForm = lazy(() => import('../component_setting/SettingForm'));

const EditSetting = ({ match }) => {
  useDocumentTitle('Edit Setting | Salinaka');
  useScrollTop();
  const { setting, error, isLoading } = useSetting(match.params.id);
  const dispatch = useDispatch();

  const onSubmitForm = (updates) => {
    dispatch(editSetting(setting.id, updates));
  };

  return (
    <div className="product-form-container">
      {error && <Redirect to="/dashboard/settings" />}
      <h2>Edit Setting</h2>
      {setting && (
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
            onSubmit={onSubmitForm}
            setting={setting}
          />
        </Suspense>
      )}
    </div>
  );
};

EditSetting.propTypes = {
  match: PropType.shape({
    params: PropType.shape({
      id: PropType.string
    })
  }).isRequired
};

export default withRouter(EditSetting);

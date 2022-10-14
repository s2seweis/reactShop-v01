import { ArrowLeftOutlined, CheckOutlined, LoadingOutlined } from '@ant-design/icons';
import { CustomInput, CustomMobileInput } from 'components/formik';
import { ADMIN_SETTINGS } from 'constants/routes';
import { Field, useFormikContext } from 'formik';
import PropType from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { addSettings, updateSetting } from 'redux/actions/settingActions';
import {
  useDocumentTitle, useFileHandler, useModal, useScrollTop
} from 'hooks';



const EditForm = ({ isLoading, authProvider}) => {
  const history = useHistory();
  const { values, submitForm, handleSubmit, setFieldValue } = useFormikContext();

  const dispatch = useDispatch();

  const { settings, profile, auth } = useSelector((state) => ({
    profile: state.profile,
    settings: state.settings,
    auth: state.auth,
    // isLoading: state.app.loading
  }));


  const initFormikValues = {
    fullname: settings.fullname || '',
    email: settings.email || '',
    address: settings.address || '',
    mobile: settings.mobile || {}
  };


  const {
    imageFile,
    isFileLoading,
    onFileChange
  } = useFileHandler({ avatar: {}, banner: {} });

  const update = (form) => {
    dispatch(updateSetting({
      updates: {
        fullname: form.fullname,
        email: form.email,
        address: form.address,
        mobile: form.mobile,
        avatar: settings.avatar,
        banner: settings.banner,
      },
      files: {
        bannerFile: imageFile.banner.file,
        avatarFile: imageFile.avatar.file
      },
      // credentials
    }));
  };

  const onSubmitUpdate = (form) => {
    // check if data has changed
    const fieldsChanged = Object.keys(form).some((key) => settings[key] !== form[key]);

    
      if (fieldsChanged || (Boolean(imageFile.banner.file || imageFile.avatar.file))) {
        update(form);
        // modal.onOpenModal();
      } else {
        console.log("failed to add: ");
      }
    
  };

  return (
    <div className="user-profile-details">
      <Field
        disabled={isLoading}
        name="fullname"
        type="text"
        label="* Full Name"
        placeholder="Enter your full name"
        component={CustomInput}
        style={{ textTransform: 'capitalize' }}
      />
      <Field
        disabled={isLoading}
        name="email"
        type="email"
        label="* Email Address"
        placeholder="test@example.com"
        component={CustomInput}
      />
      <Field
        disabled={isLoading}
        name="address"
        type="text"
        label="Address (Will be used for checkout)"
        placeholder="#245 Brgy. Maligalig, Arayat Pampanga, Philippines"
        component={CustomInput}
        style={{ textTransform: 'capitalize' }}
      />
      <CustomMobileInput
        defaultValue={values.mobile}
        name="mobile"
        disabled={isLoading}
        label="Mobile Number (Will be used for checkout)"
      />
      <br />
      <div className="edit-user-action">
        <button
          className="button button-muted w-100-mobile"
          disabled={isLoading}
          onClick={() => history.push(ADMIN_SETTINGS)}
          type="button"
        >
          <ArrowLeftOutlined />
          &nbsp;
          Back to Settings
        </button>



        {/* <button
          className="button w-100-mobile"
          disabled={isLoading}
          onClick={submitForm}
          type="button"
        >
          {isLoading ? <LoadingOutlined /> : <CheckOutlined />}
          &nbsp;
          {isLoading ? 'Loading' : 'Add Settings'}
        </button> */}



        {/* <button
          className="button w-100-mobile"
          // disabled={isLoading}
          onClick={submitForm}
          type="button"
          data-flag= "action1"
        >
          {isLoading ? <LoadingOutlined /> : <CheckOutlined />}
          &nbsp;
          {isLoading ? 'Loading' : 'Add Settings'}
        </button>




        <button
          className="button w-100-mobile"
          // disabled={isLoading}
          onClick={submitForm}
          type="button"
          data-flag= "action2"
        >
          {isLoading ? <LoadingOutlined /> : <CheckOutlined />}
          &nbsp;
          {isLoading ? 'Loading' : 'Update Settings'}
        </button> */}




        <button
        id="second-button"
          className="button w-100-mobile"
          disabled={isLoading}



         onClick={(e)=>{
            setFieldValue('isSecondButton',true)
             handleSubmit(e);
          }}
          type="button"
        >
          {isLoading ? <LoadingOutlined /> : <CheckOutlined />}
          &nbsp;
          {isLoading ? 'Loading' : 'Update Settings'}
        </button>

        {/* <button
        id="first-button"
          className="button w-100-mobile"
          disabled={isLoading}



         onClick={(e)=>{
            setFieldValue('isFirstButton',true)
             handleSubmit(e);
          }}
          type="button"
        >
          {isLoading ? <LoadingOutlined /> : <CheckOutlined />}
          &nbsp;
          {isLoading ? 'Loading' : 'Update Settings'}
        </button> */}



      </div>
    </div>
  );
};

EditForm.propTypes = {
  isLoading: PropType.bool.isRequired,
  authProvider: PropType.string.isRequired
};

export default EditForm;

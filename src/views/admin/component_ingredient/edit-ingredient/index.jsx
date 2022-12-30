import { EditOutlined, LoadingOutlined } from '@ant-design/icons';
import { Boundary, ImageLoader } from 'components/common';
import { Formik, Field, Form, FieldArray, useFormikContext } from 'formik';
import {
  useDocumentTitle, useFileHandler, useModal, useScrollTop
} from 'hooks';
import React, { useEffect, useState, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from 'redux/actions/miscActions';
import { addIngredients, updateIngredient } from 'redux/actions/ingredientActions';
import * as Yup from 'yup';
import ConfirmModal from './ConfirmModal';


import { call, put, select } from 'redux-saga/effects';

import { IngredientsNavbar } from '../../component_ingredient';





import EditForm from './EditForm';




const FormSchema = Yup.object().shape({
  fullname: Yup.string(),
  // .min(4, 'Full name should be at least 4 characters.')
  // .max(60, 'Full name should be only be 4 characters long.')
  // .required('Full name is required'),
  email: Yup.string()
    .email('Email is not valid.'),
  // .required('Email is required.'),
  address: Yup.string(),
  mobile: Yup.object()
    .shape({
      country: Yup.string(),
      countryCode: Yup.string(),
      dialCode: Yup.string(),
      value: Yup.string()
    })
});

const EditIngredients = () => {

  useDocumentTitle('Edit Account | Dign1 - Ingredients ');
  useScrollTop();


  const dispatch = useDispatch();

  useEffect(() => () => {
    dispatch(setLoading(false));
  }, []);

  const { ingredients, profile, auth, isLoading } = useSelector((state) => ({
    profile: state.profile,
    ingredients: state.ingredients,
    auth: state.auth,
    isLoading: state.app.loading
  }));


  

  console.log(ingredients)

  const initFormikValues = {
    fullname: ingredients?.email || '',
    email: ingredients?.email || '',
    address: ingredients?.address || '',
    mobile: ingredients?.mobile || {},
    avatar: ingredients?.avatar || {},
    banner: ingredients?.banner || {},

    // parameters1: ingredients?.parameters1 || [],

    parameters1: ingredients?.parameters1?.map((person) => ({ name: person.name, preis1: person.preis1 })) || [],

    parameters2: ingredients?.parameters2?.map((person) => ({ name: person.name, preis1: person.preis1 })) ||  [],

    parameters3: ingredients?.parameters3?.map((person) => ({ name: person.name, preis1: person.preis1 })) ||  [],

    parameters4: ingredients?.parameters4?.map((person) => ({ name: person.name, preis1: person.preis1 })) ||  []


  };

  

  console.log(initFormikValues)

  const {
    imageFile,
    isFileLoading,
    onFileChange
  } = useFileHandler({ avatar: {}, banner: {} });



  const update = (form) => {
    dispatch(updateIngredient({
      updates: {
        fullname: form.fullname,
        email: form.email,
        address: form.address,
        mobile: form.mobile,
        // it stazys empty when updating it
        avatar: form.avatar,
        banner: form.banner,

        parameters1: form.parameters1 || [],
        parameters2: form.parameters2 ||  [],
        parameters3: form.parameters3 ||  [],
        parameters4: form.parameters4 ||  [],

        // parameters1: form?.parameters1?.map((person) => ({ name: person.name, preis1: person.preis1 })) || []

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
    const fieldsChanged = Object.keys(form).some((key) => ingredients[key] !== form[key]);


    if (fieldsChanged || (Boolean(imageFile.banner.file || imageFile.avatar.file))) {
      update(form);
      // modal.onOpenModal();
    } else {
      console.log("failed to add: ");
    }

  };







  return (
    <Boundary>




      {/* <IngredientsNavbar
      settingsCount={store.ingredients.items.length}
      totalSettingsCount={store.ingredients.total}
      /> */}

      <div className="product-admin-items">
        <div className="edit-user">
          <h3 className="text-center">Edit Ingredient Details3</h3>
          <Formik
            initialValues={initFormikValues}
            validateOnChange
            // validationSchema={FormSchema}



            onSubmit={onSubmitUpdate}

        





          >



            {(values, setValues) => (
              <>





                <div className="user-profile-banner">
                  <div className="user-profile-banner-wrapper">
                    <ImageLoader
                      alt="Banner"
                      className="user-profile-banner-img"
                      src={imageFile.banner.url || ingredients.banner}
                    />
                    {isFileLoading ? (
                      <div className="loading-wrapper">
                        <LoadingOutlined />
                      </div>
                    ) : (
                      <label
                        className="edit-button edit-banner-button"
                        htmlFor="edit-banner"
                      >
                        <input
                          accept="image/x-png,image/jpeg"
                          // disabled={isLoading}
                          hidden
                          id="edit-banner"
                          onChange={(e) => onFileChange(e, { name: 'banner', type: 'single' })}
                          type="file"
                        />
                        <EditOutlined />
                      </label>
                    )}
                  </div>
                  {/* <div className="user-profile-avatar-wrapper">
                    <ImageLoader
                      alt="Avatar"
                      className="user-profile-img"
                      src={imageFile.avatar.url || ingredients.avatar}
                    />
                    {isFileLoading ? (
                      <div className="loading-wrapper">
                        <LoadingOutlined />
                      </div>
                    ) : (
                      <label
                        className="edit-button edit-avatar-button"
                        htmlFor="edit-avatar"
                      >
                        <input
                          accept="image/x-png,image/jpeg"
                          // disabled={isLoading}
                          hidden
                          id="edit-avatar"
                          onChange={(e) => onFileChange(e, { name: 'avatar', type: 'single' })}
                          type="file"
                        />
                        <EditOutlined />
                      </label>
                    )}
                  </div> */}
                </div>




                <EditForm  />


             










                {/* <div className='fieldarray-top' >
                  <h4>Add Sizes</h4>
                  <FieldArray

                    name="parameters1"
                    // disabled={isLoading}
                    className="fieldarray"

                    render={arrayHelpers => (

                      <div>
                        {values.parameters1?.length > 0 &&
                          values.parameters1.map((paramList, index) => (

                            <div key={index}>
                              {Object.keys(paramList).map(param => (

                                <Field
                                  key={`${param}`}
                                  name={`parameters1.${index}.${param}`}
                                  placeholder={`${index}.${param}`}
                                  className="field-ingredients"

                                />
                              ))}
                              <button
                                type="button"
                                onClick={() => arrayHelpers.remove(index)}
                              >
                                {" "}
                                -{" "}
                              </button>
                            </div>

                          ))}
                        <button
                          type="button"
                          onClick={() =>
                            arrayHelpers.push({ name: "", preis1: "", preis2: "", preis3: "", preis4: "" })
                          }
                        >
                          {" "}
                          +{" "}
                        </button>
                      </div>
                    )}
                  />

                </div> */}

                {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}






              </>




             )} 






          </Formik>




        </div>
      </div>
    </Boundary>
  );
};

export default EditIngredients;

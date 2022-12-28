import { EditOutlined, LoadingOutlined } from '@ant-design/icons';
import { Boundary, ImageLoader } from 'components/common';
import { Formik, Field, Form, FieldArray } from 'formik';
import {
  useDocumentTitle, useFileHandler, useModal, useScrollTop
} from 'hooks';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from 'redux/actions/miscActions';
import { addIngredients, updateIngredient } from 'redux/actions/ingredientActions';
import * as Yup from 'yup';
import ConfirmModal from './ConfirmModal';
import EditForm from './EditForm';

import { call, put, select } from 'redux-saga/effects';

import { IngredientsNavbar } from '../../component_ingredient';


// Test:1 --------Start

import { getIngredient } from 'redux/actions/ingredientActions';


// Test:1 --------Start






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

const EditIngredients = (parameters) => {




  useDocumentTitle('Edit Account | Dign1 - Ingredients ');
  useScrollTop();

  // Test:1 --------Start

  const [isFetching, setFetching] = useState(false);
  // console.log(isFetching)
  // const dispatch = useDispatch();

  const fetchIngredients = () => {
    setFetching(true);
    dispatch(getIngredient(ingredients));
  };
  // console.log(fetchIngredients)


  useEffect(() => {
    if (ingredients === 0 || !ingredients?.lastRefKey) {
      fetchIngredients();
    }

    window.scrollTo(0, 0);
    return () => dispatch(setLoading(false));
  }, []);

  useEffect(() => {
    setFetching(false);
  }, [ingredients?.lastRefKey]);


  // Test:1 --------End


  // const modal = useModal();
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

  const initFormikValues = {
    fullname: ingredients.fullname || '',
    email: ingredients.email || '',
    address: ingredients.address || '',
    mobile: ingredients.mobile || {},
    avatar: ingredients.avatar || {},
    banner: ingredients.banner || {},

    // parameters1: ingredients?.parameters1 || [],

    parameters1: ingredients?.parameters1?.map((person) => ({ name: person.name, preis1: person.preis1 })) || []


    // parameters1: [

    //   {
    //     name: "Käse", 
    //     preis1: "0,80",
    //     preis2: "1,10",
    //     preis3: "1,80",
    //     preis4: "3,00"
    //   },

    //   {
    //     name: "Salami",
    //     preis1: "0,80",
    //     preis2: "1,10",
    //     preis3: "1,80",
    //     preis4: "3,00"
    //   },

    //   {
    //     name: "Peperoniwurst",
    //     preis1: "0,80",
    //     preis2: "1,10",
    //     preis3: "1,80",
    //     preis4: "3,00"
    //   },

    //   {
    //     name: "Schinken",
    //     preis1: "0,80",
    //     preis2: "1,10",
    //     preis3: "1,80",
    //     preis4: "3,00"
    //   }
    // ],
    // avatar: {},
    // banner: {}
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

        // parameters1: form?.parameters1?.map((person) => ({ name: person.name, preis1: person.preis1 })) || []

      },
      files: {
        bannerFile: imageFile.banner.file,
        avatarFile: imageFile.avatar.file
      },
      // credentials
    }));
  };

  // const add = (form) => {
  //   dispatch(addSettings({
  //     adds: {
  //       fullname: form.fullname,
  //       email: form.email,
  //       address: form.address,
  //       mobile: form.mobile,

  //     },
  //     files: {
  //       bannerFile: imageFile.banner.file,
  //       avatarFile: imageFile.avatar.file
  //     },

  //   }));
  // };




  // const onConfirmUpdate = (form, password) => {
  //   if (password) {
  //     update(form, { email: form.email, password });
  //   }
  // };

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

  // const onSubmitAdd = (form) => {
  //   // check if data has changed
  //   const fieldsChanged = Object.keys(form).some((key) => ingredients[key] !== form[key]);

  //   if (fieldsChanged) {
  //     if (fieldsChanged || (Boolean(imageFile.banner.file || imageFile.avatar.file))) {
  //       add(form);
  //       // modal.onOpenModal();
  //     } else {
  //       console.log("failed to add: ");
  //     }
  //   }
  // };





  return (
    <Boundary>




      <IngredientsNavbar
      // settingsCount={store.ingredients.items.length}
      // totalSettingsCount={store.ingredients.total}
      />

      <div className="product-admin-items">
        <div className="edit-user">
          <h3 className="text-center">Edit Ingredient Details1</h3>
          <Formik
            initialValues={initFormikValues}
            validateOnChange
            // validationSchema={FormSchema}



            onSubmit={onSubmitUpdate}
          // onSubmit={onSubmitAdd}

          // onSubmit={(onSubmitUpdate, {resetForm}) => {
          //   console.log(onSubmitUpdate);
          //   resetForm({ initFormikValues });
          // } }





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
                          disabled={isLoading}
                          hidden
                          id="edit-banner"
                          onChange={(e) => onFileChange(e, { name: 'banner', type: 'single' })}
                          type="file"
                        />
                        <EditOutlined />
                      </label>
                    )}
                  </div>
                  <div className="user-profile-avatar-wrapper">
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
                          disabled={isLoading}
                          hidden
                          id="edit-avatar"
                          onChange={(e) => onFileChange(e, { name: 'avatar', type: 'single' })}
                          type="file"
                        />
                        <EditOutlined />
                      </label>
                    )}
                  </div>
                </div>




                <EditForm />

                {ingredients.fullname}


                



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

                </div>

                <pre>{JSON.stringify(values, null, 2)}</pre> */}






              </>




            )}






          </Formik>




        </div>
      </div>
    </Boundary>
  );
};

export default EditIngredients;

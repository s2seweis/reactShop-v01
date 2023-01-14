import { EditOutlined, LoadingOutlined } from '@ant-design/icons';
import { Boundary, ImageLoader } from 'components/common';
import {
  useDocumentTitle, useFileHandler, useModal, useScrollTop
} from 'hooks';
import React, { useEffect, useState, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from 'redux/actions/miscActions';
import { addIngredients, updateIngredient } from 'redux/actions/ingredientActions';


import * as Yup from 'yup';
import ConfirmModal from '../../admin/component_ingredient/edit-ingredient/ConfirmModal';


import { call, put, select } from 'redux-saga/effects';


import PropType from 'prop-types';

import EditForm from '../ingredients/EditForm';




// #############################################################################################




import { render } from "react-dom";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";

import { FiArrowLeftCircle, FiArrowRightCircle, FiArrowDownCircle, FiArrowUpCircle } from 'react-icons/fi';


// #############################################################################################











const IngredientsForm = (values) => {

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


  const {
    imageFile,
    isFileLoading,
    onFileChange
  } = useFileHandler({ avatar: {}, banner: {} });



  console.log(ingredients)

  const initFormikValues = {
    fullname: ingredients?.email || '',
    email: ingredients?.email || '',
    address: ingredients?.address || '',
    mobile: ingredients?.mobile || {},
    avatar: ingredients?.avatar || {},
    banner: ingredients?.banner || {},

    // parameters1: ingredients?.parameters1 || [],

    parameters1: ingredients?.parameters1?.map((person) => ({ name: person.name, price: person.price.toFixed(2) })) || [],


    parameters2: ingredients?.parameters2?.map((person) => ({ name: person.name, price: person.price })) || [],

    parameters3: ingredients?.parameters3?.map((person) => ({ name: person.name, price: person.price })) || [],

    parameters4: ingredients?.parameters4?.map((person) => ({ name: person.name, price: person.price })) || []


  };




  console.log(initFormikValues)
  console.log(initFormikValues.parameters1)




  const update = (form) => {
    dispatch(updateIngredient({
      updates: {
        // fullname: form.fullname,
        // email: form.email,
        // address: form.address,
        // mobile: form.mobile,
        // it stazys empty when updating it


        // parameters1: form.parameters1 || [],
        parameters1: form?.parameters1?.map((person) => ({ name: person.name, price: Number(person.price) })) || [],
        parameters2: form.parameters2 || [],
        parameters3: form.parameters3 || [],
        parameters4: form.parameters4 || [],

        // parameters1: form?.parameters1?.map((person) => ({ name: person.name, price: person.price })) || []

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






  // #############################################################################################




  // small
  const [isActive, setIsActive] = useState(false);

  // Test Start
  const [favorite, setFavorite] = useState(false);
  // Test End



  // medium
  const [isActive1, setIsActive1] = useState(false);

  // large
  const [isActive2, setIsActive2] = useState(false);

  // xl
  const [isActive3, setIsActive3] = useState(false);




  // ??????????????
  const [selected, setIsSelected] = useState("");


  // #############################################################################################


  // Test: React Final Form

  // Submit the Form, values hast the form state


  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  const onSubmit = async values => {



    await sleep(300);



    dispatch(updateIngredient({
      updates: {
        // fullname: form.fullname,
        // email: form.email,
        // address: form.address,
        // mobile: form.mobile,
        // it stazys empty when updating it


        // parameters1: form.parameters1 || [],
        customers: values,

        // parameters2: values.parameters2 || [],
        // parameters3: values.parameters3 || [],
        // parameters4: values.parameters4 || [],

        // parameters1: values?.parameters1?.map((person) => ({ name: person.name, price: person.price })) || []

      },
      files: {
        bannerFile: imageFile.banner.file,
        avatarFile: imageFile.avatar.file
      },
      // credentials
    }));




    window.alert(JSON.stringify(values, 0, 2));

    console.log(values)




  };




  // get the state from the database

  const test1 = { customers: ingredients.customers?.customers?.map((person) => ({ name: person.name, price: person.price })) || [] }
  // console.log(test1)




  // Test: React Final Form


  // #############################################################################################










  return (
    <Boundary>




      {/* <IngredientsNavbar
      settingsCount={store.ingredients.items.length}
      totalSettingsCount={store.ingredients.total}
      /> */}



      {/* ############################################################################################# */}




      <div className="product-admin-items">
        <div className="edit-user">
          <h3 className="text-center"
            style={{ marginBottom: "30px" }}
          >Edit Ingredient Details - Parent/ React Final Form</h3>

          <div className="dropdown-new">

            <div
              onClick={(e) => {
                setIsActive(!isActive);
              }}
              className="button button-muted w-100-mobile">


              <h3>Ingredients Small - Inside Parent Compoent</h3>


              {/* // Test Start Ingredients Component*/}


              {isActive ? (
                <FiArrowUpCircle
                  // className='bigger' 
                  style={{ color: "#F76631", width: "24px", height: "24px", marginInlineStart: "auto" }} />

              ) : (
                <FiArrowDownCircle

                  // className='bigger' 
                  style={{ color: "#F76631", width: "24px", height: "24px", marginInlineStart: "auto" }} />
              )}




              {/* // Test End */}





              <h2>{selected}</h2>
              <span
                className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"}
              />
            </div>





            <div
              className="dropdown-content"
              style={{ display: isActive ? "block" : "none" }}
            >


              <div
                // onClick={(e) => {
                //   setIsSelected(e.target.textContent);
                //   setIsActive(!isActive);
                // }}
                className="item-new"
              >



                {/* Here comes the component */}

                <div className="example-ingredients">
                  <h5>example: 1.00/ 1.50/ 2.00</h5>
                </div>




                {/* Test: React Final form */}



                {/* ############################################################################################################## */}




                <Styles>
                  <h1


                  >🏁 React Final Form - Array Fields</h1>


                  <a href="https://github.com/erikras/react-final-form#-react-final-form">
                    Read Docs
                  </a>
                  <Form
                    // onSubmit={onSubmitUpdate}
                    onSubmit={onSubmit}
                    mutators={{
                      ...arrayMutators
                    }}
                    // initialValues={{ customers: [{ name: "test", price: "test" }, { name: "test1", price: "test1" }] }}

                    // initialValues={ingredients.parameters1}



                    // initialValues={test1}
                    initialValues={test1}



                    render={({
                      handleSubmit,
                      form: {
                        mutators: { push, pop }
                      }, // injected from final-form-arrays above
                      pristine,
                      form,
                      submitting,
                      values
                    }) => {
                      return (
                        <form onSubmit={handleSubmit}>
                          {/* <div>
                        <label>Company</label>
                        <Field name="company" component="input" />
                      </div> */}
                          <div className="buttons">
                            <button
                              type="button"
                              onClick={() => push("customers", undefined)}
                            >
                              Add Customer
                            </button>
                            <button type="button" onClick={() => pop("customers")}>
                              Remove Customer
                            </button>
                          </div>
                          <FieldArray name="customers">
                            {({ fields }) =>
                              fields.map((name, index) => (
                                <div key={name}>
                                  <label>Nr. {index + 1}</label>
                                  <Field
                                    name={`${name}.name`}
                                    component="input"
                                    placeholder="Ingredient"

                                  />





                          




                                  <Field
                                    name={`${name}.price`}
                                    component="input"
                                    placeholder="e.g. 0.50, 1.00"

                                  />






                                  <span
                                    onClick={() => fields.remove(index)}
                                    style={{ cursor: "pointer" }}
                                  >
                                    ❌
                                  </span>
                                </div>
                              ))
                            }
                          </FieldArray>

                          <div className="buttons">
                            <button type="submit"
                            // disabled={submitting || pristine}
                            >
                              Submit
                            </button>
                            <button
                              type="button"
                              onClick={form.reset}
                              disabled={submitting || pristine}
                            >
                              Reset
                            </button>
                          </div>
                          <pre>{JSON.stringify(values, 0, 2)}</pre>
                        </form>
                      );
                    }}
                  />
                </Styles>




                {/* ############################################################################################################## */}







                {/* Test: React Final form */}






              </div>


            </div>




          </div>

          <EditForm />




        </div>
      </div>
    </Boundary>
  );
};














IngredientsForm.propTypes = {
  ingredients: PropType.shape({
    preis1: PropType.number
    //   name: PropType.string,
    //   brand: PropType.string,
    //   price: PropType.number,

    //   sizes_new: PropType.object,

    //   prices_new: PropType.object,

    //   maxQuantity: PropType.number,
    //   description: PropType.string,
    //   keywords: PropType.arrayOf(PropType.string),
    //   imageCollection: PropType.arrayOf(PropType.object),
    //   sizes: PropType.arrayOf(PropType.string),
    //   image: PropType.string,
    //   imageUrl: PropType.string,
    //   isFeatured: PropType.bool,
    //   isRecommended: PropType.bool,
    //   availableColors: PropType.arrayOf(PropType.string)


  }).isRequired,
  onSubmit: PropType.func.isRequired,
  isLoading: PropType.bool.isRequired


};

export default IngredientsForm;

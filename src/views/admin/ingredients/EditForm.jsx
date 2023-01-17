import { ArrowLeftOutlined, CheckOutlined, LoadingOutlined } from '@ant-design/icons';
import { CustomInput, CustomMobileInput } from 'components/formik';
import { ADMIN_SETTINGS, ADMIN_INGREDIENDTS_NEW } from 'constants/routes';
import PropType from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { addSettings, updateSetting } from 'redux/actions/settingActions';
import {
  useDocumentTitle, useFileHandler, useModal, useScrollTop
} from 'hooks';

import { useState } from "react";

import { FiArrowLeftCircle, FiArrowRightCircle, FiArrowDownCircle, FiArrowUpCircle } from 'react-icons/fi';


import { addIngredients, updateIngredient } from 'redux/actions/ingredientActions';

import StatefulInput from "./StatefulInput";

// Test:1 Gradual Field


import { Mutator } from "final-form";








// Test: React Final Form 


import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";

// Test: React Final Form 




import { render } from "react-dom";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";
import numeral from "numeral";
import setFieldData from "final-form-set-field-data";
import { GracefulField } from "react-final-form-graceful-field";


import { useFormState } from 'react-final-form';






// CC


const EditForm = ({ isLoading, authProvider, customers }) => {
  const history = useHistory();

  const dispatch = useDispatch();

  const {
    imageFile,
    isFileLoading,
    onFileChange
  } = useFileHandler({ avatar: {}, banner: {} });





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









  const [selected, setIsSelected] = useState("");

  const ingredients = useSelector((state) => state.ingredients);




  // Test: React Final Form

  // Submit the Form


  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  const onSubmit1 = async values => {



    await sleep(300);



    dispatch(updateIngredient({
      updates: {
        // fullname: form.fullname,
        // email: form.email,
        // address: form.address,
        // mobile: form.mobile,
        // it stazys empty when updating it


        // parameters1: form.parameters1 || [],
        // customers: values,
        customers: values?.customers?.map((person) => ({ name: person.name, price: Number(person.price) })) || [],
        // customers1: values?.customers1?.map((person) => ({ name: person.name, price: Number(person.price) })) || [],
        // customers2: values?.customers2?.map((person) => ({ name: person.name, price: Number(person.price) })) || [],
        // customers3: values?.customers3?.map((person) => ({ name: person.name, price: Number(person.price) })) || [],

        // const test1 = { customers: ingredients.customers?.customers?.map((person) => ({ name: person.name, price: person.price.toFixed(2) })) || [] }


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


    // window.alert(JSON.stringify(values, 0, 2));

    console.log(customers)


  };

  const onSubmit2 = async values => {
    await sleep(300);
    dispatch(updateIngredient({
      updates: {
        // fullname: form.fullname,
        // email: form.email,
        // address: form.address,
        // mobile: form.mobile,
        // it stazys empty when updating it


        // parameters1: form.parameters1 || [],
        // customers: values,
      
        customers1: values?.customers1?.map((person) => ({ name: person.name, price: Number(person.price) })) || [],
     
        // const test1 = { customers: ingredients.customers?.customers?.map((person) => ({ name: person.name, price: person.price.toFixed(2) })) || [] }


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


    // window.alert(JSON.stringify(values, 0, 2));

    console.log(customers)


  };

  const onSubmit3 = async values => {
    await sleep(300);
    dispatch(updateIngredient({
      updates: {
        // fullname: form.fullname,
        // email: form.email,
        // address: form.address,
        // mobile: form.mobile,
        // it stazys empty when updating it


        // parameters1: form.parameters1 || [],
        // customers: values,
      
        customers2: values?.customers2?.map((person) => ({ name: person.name, price: Number(person.price) })) || [],
     
        // const test1 = { customers: ingredients.customers?.customers?.map((person) => ({ name: person.name, price: person.price.toFixed(2) })) || [] }


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


    // window.alert(JSON.stringify(values, 0, 2));

    console.log(customers)


  };

  const onSubmit4 = async values => {
    await sleep(300);
    dispatch(updateIngredient({
      updates: {
        // fullname: form.fullname,
        // email: form.email,
        // address: form.address,
        // mobile: form.mobile,
        // it stazys empty when updating it


        // parameters1: form.parameters1 || [],
        // customers: values,
      
        customers3: values?.customers3?.map((person) => ({ name: person.name, price: Number(person.price) })) || [],
     
        // const test1 = { customers: ingredients.customers?.customers?.map((person) => ({ name: person.name, price: person.price.toFixed(2) })) || [] }


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


    // window.alert(JSON.stringify(values, 0, 2));

    console.log(customers)


  };



  console.log(onSubmit1.values)





  const parse = value => (isNaN(parseFloat(value)) ? "" : parseFloat(value));

  const required = value => (value ? undefined : 'Required')

  const mustBeNumber = value => (isNaN(value) ? <h5>Must be a number</h5> : undefined)

  const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)



  // get the state from the database

  const test1 = { customers: ingredients.customers?.map((person) => ({ name: person.name, price: person.price.toFixed(2) })) || [] }
  console.log(test1)

  const test2 = { customers1: ingredients.customers1?.map((person) => ({ name: person.name, price: person.price.toFixed(2) })) || [] }
  console.log(test2)

  const test3 = { customers2: ingredients.customers2?.map((person) => ({ name: person.name, price: person.price.toFixed(2) })) || [] }
  console.log(test3)

  const test4 = { customers3: ingredients.customers3?.map((person) => ({ name: person.name, price: person.price.toFixed(2) })) || [] }
  console.log(test4)






  // Test: React Final Form

  {/* ############################################################################################################## */ }


  // Test:1 Graceful Field


  const parseInteger = (value) => {
    value = value ? value.trim() : null;
    if (!value) return null;
    const parsed = numeral(value).value();
    if (!Number.isFinite(parsed)) throw new Error(`invalid number`);
    if (parsed % 1) throw new Error(`must be an integer`);
    return parsed;
  };

  const parsePrice = (value) => {
    value = value ? value.trim() : null;
    if (!value) return null;
    const parsed = numeral(value).value();
    if (!Number.isFinite(parsed)) throw new Error(`invalid number`);
    return parsed;
  };

  const formatNumber = (value) => (!Number.isFinite(value) ? "" : String(value));

  const formatPrice = (value) =>
    !Number.isFinite(value)
      ? "" // make controlled
      : numeral(value).format("$0,0.00");

  const requirePositiveNumber = (value) =>
    !Number.isFinite(value)
      ? "is required"
      : value <= 0
        ? "must be > 0"
        : undefined;

  const TextField = ({ input, meta: { touched, error }, label }) => (
    <div className={touched && error ? "error" : ""}>
      <label>{label}</label>
      <input style={{ width: "100px" }}
        {...input} />
      {touched && error && <p className="helper-text">{error}</p>}
    </div>
  );






  return (
    <div className="user-profile-details">



      {/* ############################################################################################################## */}

      <div className="dropdown-new">

        <div
          onClick={(e) => {
            setIsActive(!isActive);
          }}
          className="button button-muted w-100-mobile">


          <h3>Ingredients Small - CC</h3>


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





          {/* <h2>{selected}</h2>
          <span
            className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"}
          /> */}



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

            {/* <div className="example-ingredients">
              <h5>example: 1.00/ 1.50/ 2.00</h5>
            </div> */}




            {/* Test: React Final form */}



            {/* ############################################################################################################## */}




            <Styles>
              <h1>🏁 React Final Form - Array Fields</h1>
              <a href="https://github.com/erikras/react-final-form#-react-final-form">
                Read Docs
              </a>
              <Form
                style={{ display: "table" }}

                onSubmit={onSubmit1}
                mutators={{
                  ...arrayMutators
                }}
              
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
                        {/* <button
                          type="button"
                          onClick={() => push("customers", undefined)}
                        >
                          Add
                        </button> */}

                        <button
                          type="button"
                          onClick={form.reset}
                          disabled={submitting || pristine}
                        >
                          Reset
                        </button>
                        {/* <button type="button" onClick={() => pop("customers")}>
                          Remove Customer
                        </button> */}
                      </div>


                      {/* <div classname="center-form"> */}
                      <FieldArray name="customers">
                        {({ fields }) =>
                          fields.map((name, index) => (
                            <div key={name}
                              style={{ width: "50%" }}>
                              <label
                                style={{ width: "25px" }}
                              > {index + 1}</label>



                              {/* <Field
                                name={`${name}.name`}
                                // component="input"
                                component={TextField}

                                placeholder="Ingredient"
                                style={{ width: "100px" }}


                              /> */}



                              <Field name={`${name}.name`} validate={composeValidators(required)}>
                                {({ input, meta }) => (
                                  <div>
                                    {/* <label>Price</label> */}
                                    <input style={{ width: "100px" }} {...input} type="text" placeholder="Ingredient" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                  </div>
                                )}
                              </Field>


                              {/* <Field
                                name={`${name}.price`}
                                // component="input"
                                component={TextField}
                                placeholder="e.g. 0.50, 1.00"
                                validate={composeValidators(required, mustBeNumber)}
                                // validate={required}

                                // style={{  width: "50px" }} 
                                className="field-ingredients1"
                                style={{ width: "100px" }}

                              /> */}


                              <Field name={`${name}.price`} validate={composeValidators(required, mustBeNumber)}>
                                {({ input, meta }) => (
                                  <div>
                                    {/* <label>Price</label> */}
                                    <input style={{ width: "70px" }} {...input} type="text" placeholder="Price" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                  </div>
                                )}
                              </Field>


                              {/* 
                               */}


                              {/* <GracefulField
                                name="price"
                                component="input"
                                // label="Price"
                                type="text"
                                format={formatPrice}
                                parse={parsePrice}
                                validate={requirePositiveNumber}
                              /> */}



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

                      {/* </div> */}


                      <div className="buttons">




                        <button type="submit"
                          disabled={submitting || pristine}
                        >
                          Save
                        </button>


                        {/* <button
                          type="button"
                          onClick={form.reset}
                          disabled={submitting || pristine}
                        >
                          Reset
                        </button> */}


                        <button
                          type="button"
                          onClick={() => push("customers", undefined)}
                        >
                          Add
                        </button>


                      </div>
                      {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
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
      <div className="dropdown-new">

        <div
          onClick={(e) => {
            setIsActive1(!isActive1);
          }}
          className="button button-muted w-100-mobile">


          <h3>Ingredients Medium - CC</h3>


          {/* // Test Start Ingredients Component*/}


          {isActive1 ? (
            <FiArrowUpCircle
              // className='bigger' 
              style={{ color: "#F76631", width: "24px", height: "24px", marginInlineStart: "auto" }} />

          ) : (
            <FiArrowDownCircle

              // className='bigger' 
              style={{ color: "#F76631", width: "24px", height: "24px", marginInlineStart: "auto" }} />
          )}




          {/* // Test End */}





          {/* <h2>{selected}</h2>
          <span
            className={isActive1 ? "fas fa-caret-up" : "fas fa-caret-down"}
          /> */}





        </div>





        <div
          className="dropdown-content"
          style={{ display: isActive1 ? "block" : "none" }}
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
              <h1>🏁 React Final Form - Array Fields</h1>
              <a href="https://github.com/erikras/react-final-form#-react-final-form">
                Read Docs
              </a>
              <Form
                style={{ display: "table" }}

                onSubmit={onSubmit2}
                mutators={{
                  ...arrayMutators
                }}
                // initialValues={{ customers1: [{ name: "test", price: "test" }, { name: "test1", price: "test1" }] }}

                // initialValues={ingredients.parameters1}



                // initialValues={test1}
                initialValues={test2}



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
                        {/* <button
                          type="button"
                          onClick={() => push("customers1", undefined)}
                        >
                          Add
                        </button> */}

                        <button
                          type="button"
                          onClick={form.reset}
                          disabled={submitting || pristine}
                        >
                          Reset
                        </button>
                        {/* <button type="button" onClick={() => pop("customers1")}>
                          Remove Customer
                        </button> */}
                      </div>


                      {/* <div classname="center-form"> */}
                      <FieldArray name="customers1">
                        {({ fields }) =>
                          fields.map((name, index) => (
                            <div key={name}
                              style={{ width: "50%" }}>
                              <label
                                style={{ width: "25px" }}
                              > {index + 1}</label>



                              {/* <Field
                                name={`${name}.name`}
                                // component="input"
                                component={TextField}

                                placeholder="Ingredient"
                                style={{ width: "100px" }}


                              /> */}



                              <Field name={`${name}.name`} validate={composeValidators(required)}>
                                {({ input, meta }) => (
                                  <div>
                                    {/* <label>Price</label> */}
                                    <input style={{ width: "100px" }} {...input} type="text" placeholder="Ingredient" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                  </div>
                                )}
                              </Field>


                              {/* <Field
                                name={`${name}.price`}
                                // component="input"
                                component={TextField}
                                placeholder="e.g. 0.50, 1.00"
                                validate={composeValidators(required, mustBeNumber)}
                                // validate={required}

                                // style={{  width: "50px" }} 
                                className="field-ingredients1"
                                style={{ width: "100px" }}

                              /> */}


                              <Field name={`${name}.price`} validate={composeValidators(required, mustBeNumber)}>
                                {({ input, meta }) => (
                                  <div>
                                    {/* <label>Price</label> */}
                                    <input style={{ width: "70px" }} {...input} type="text" placeholder="Price" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                  </div>
                                )}
                              </Field>


                              {/* 
                               */}


                              {/* <GracefulField
                                name="price"
                                component="input"
                                // label="Price"
                                type="text"
                                format={formatPrice}
                                parse={parsePrice}
                                validate={requirePositiveNumber}
                              /> */}



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

                      {/* </div> */}


                      <div className="buttons">




                        <button type="submit"
                          disabled={submitting || pristine}
                        >
                          Save
                        </button>


                        {/* <button
                          type="button"
                          onClick={form.reset}
                          disabled={submitting || pristine}
                        >
                          Reset
                        </button> */}


                        <button
                          type="button"
                          onClick={() => push("customers1", undefined)}
                        >
                          Add
                        </button>


                      </div>
                      {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
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
      <div className="dropdown-new">

        <div
          onClick={(e) => {
            setIsActive2(!isActive2);
          }}
          className="button button-muted w-100-mobile">


          <h3>Ingredients Large - CC</h3>


          {/* // Test Start Ingredients Component*/}


          {isActive2 ? (
            <FiArrowUpCircle
              // className='bigger' 
              style={{ color: "#F76631", width: "24px", height: "24px", marginInlineStart: "auto" }} />

          ) : (
            <FiArrowDownCircle

              // className='bigger' 
              style={{ color: "#F76631", width: "24px", height: "24px", marginInlineStart: "auto" }} />
          )}




          {/* // Test End */}





          {/* <h2>{selected}</h2>
          <span
            className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"}
          /> */}



        </div>





        <div
          className="dropdown-content"
          style={{ display: isActive2 ? "block" : "none" }}
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
              <h1>🏁 React Final Form - Array Fields</h1>
              <a href="https://github.com/erikras/react-final-form#-react-final-form">
                Read Docs
              </a>
              <Form
                style={{ display: "table" }}

                onSubmit={onSubmit3}
                mutators={{
                  ...arrayMutators
                }}
                // initialValues={{ customers2: [{ name: "test", price: "test" }, { name: "test1", price: "test1" }] }}

                // initialValues={ingredients.parameters1}



                // initialValues={test1}
                initialValues={test3}



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
                        {/* <button
                          type="button"
                          onClick={() => push("customers2", undefined)}
                        >
                          Add
                        </button> */}

                        <button
                          type="button"
                          onClick={form.reset}
                          disabled={submitting || pristine}
                        >
                          Reset
                        </button>
                        {/* <button type="button" onClick={() => pop("customers2")}>
                          Remove Customer
                        </button> */}
                      </div>


                      {/* <div classname="center-form"> */}
                      <FieldArray name="customers2">
                        {({ fields }) =>
                          fields.map((name, index) => (
                            <div key={name}
                              style={{ width: "50%" }}>
                              <label
                                style={{ width: "25px" }}
                              > {index + 1}</label>



                              {/* <Field
                                name={`${name}.name`}
                                // component="input"
                                component={TextField}

                                placeholder="Ingredient"
                                style={{ width: "100px" }}


                              /> */}



                              <Field name={`${name}.name`} validate={composeValidators(required)}>
                                {({ input, meta }) => (
                                  <div>
                                    {/* <label>Price</label> */}
                                    <input style={{ width: "100px" }} {...input} type="text" placeholder="Ingredient" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                  </div>
                                )}
                              </Field>


                              {/* <Field
                                name={`${name}.price`}
                                // component="input"
                                component={TextField}
                                placeholder="e.g. 0.50, 1.00"
                                validate={composeValidators(required, mustBeNumber)}
                                // validate={required}

                                // style={{  width: "50px" }} 
                                className="field-ingredients1"
                                style={{ width: "100px" }}

                              /> */}


                              <Field name={`${name}.price`} validate={composeValidators(required, mustBeNumber)}>
                                {({ input, meta }) => (
                                  <div>
                                    {/* <label>Price</label> */}
                                    <input style={{ width: "70px" }} {...input} type="text" placeholder="Price" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                  </div>
                                )}
                              </Field>


                              {/* 
                               */}


                              {/* <GracefulField
                                name="price"
                                component="input"
                                // label="Price"
                                type="text"
                                format={formatPrice}
                                parse={parsePrice}
                                validate={requirePositiveNumber}
                              /> */}



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

                      {/* </div> */}


                      <div className="buttons">




                        <button type="submit"
                          disabled={submitting || pristine}
                        >
                          Save
                        </button>


                        {/* <button
                          type="button"
                          onClick={form.reset}
                          disabled={submitting || pristine}
                        >
                          Reset
                        </button> */}


                        <button
                          type="button"
                          onClick={() => push("customers2", undefined)}
                        >
                          Add
                        </button>


                      </div>
                      {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
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
      <div className="dropdown-new">

        <div
          onClick={(e) => {
            setIsActive3(!isActive3);
          }}
          className="button button-muted w-100-mobile">


          <h3>Ingredients Extra Large - CC</h3>


          {/* // Test Start Ingredients Component*/}


          {isActive3 ? (
            <FiArrowUpCircle
              // className='bigger' 
              style={{ color: "#F76631", width: "24px", height: "24px", marginInlineStart: "auto" }} />

          ) : (
            <FiArrowDownCircle

              // className='bigger' 
              style={{ color: "#F76631", width: "24px", height: "24px", marginInlineStart: "auto" }} />
          )}




          {/* // Test End */}





          {/* <h2>{selected}</h2>
          <span
            className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"}
          /> */}




        </div>





        <div
          className="dropdown-content"
          style={{ display: isActive3 ? "block" : "none" }}
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
              <h1>🏁 React Final Form - Array Fields</h1>
              <a href="https://github.com/erikras/react-final-form#-react-final-form">
                Read Docs
              </a>
              <Form
                style={{ display: "table" }}

                onSubmit={onSubmit4}
                mutators={{
                  ...arrayMutators
                }}
                // initialValues={{ customers3: [{ name: "test", price: "test" }, { name: "test1", price: "test1" }] }}

                // initialValues={ingredients.parameters1}



                // initialValues={test1}
                initialValues={test4}



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
                        {/* <button
                          type="button"
                          onClick={() => push("customers3", undefined)}
                        >
                          Add
                        </button> */}

                        <button
                          type="button"
                          onClick={form.reset}
                          disabled={submitting || pristine}
                        >
                          Reset
                        </button>
                        {/* <button type="button" onClick={() => pop("customers3")}>
                          Remove Customer
                        </button> */}
                      </div>


                      {/* <div classname="center-form"> */}
                      <FieldArray name="customers3">
                        {({ fields }) =>
                          fields.map((name, index) => (
                            <div key={name}
                              style={{ width: "50%" }}>
                              <label
                                style={{ width: "25px" }}
                              > {index + 1}</label>



                              {/* <Field
                                name={`${name}.name`}
                                // component="input"
                                component={TextField}

                                placeholder="Ingredient"
                                style={{ width: "100px" }}


                              /> */}



                              <Field name={`${name}.name`} validate={composeValidators(required)}>
                                {({ input, meta }) => (
                                  <div>
                                    {/* <label>Price</label> */}
                                    <input style={{ width: "100px" }} {...input} type="text" placeholder="Ingredient" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                  </div>
                                )}
                              </Field>


                              {/* <Field
                                name={`${name}.price`}
                                // component="input"
                                component={TextField}
                                placeholder="e.g. 0.50, 1.00"
                                validate={composeValidators(required, mustBeNumber)}
                                // validate={required}

                                // style={{  width: "50px" }} 
                                className="field-ingredients1"
                                style={{ width: "100px" }}

                              /> */}


                              <Field name={`${name}.price`} validate={composeValidators(required, mustBeNumber)}>
                                {({ input, meta }) => (
                                  <div>
                                    {/* <label>Price</label> */}
                                    <input style={{ width: "70px" }} {...input} type="text" placeholder="Price" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                  </div>
                                )}
                              </Field>


                              {/* 
                               */}


                              {/* <GracefulField
                                name="price"
                                component="input"
                                // label="Price"
                                type="text"
                                format={formatPrice}
                                parse={parsePrice}
                                validate={requirePositiveNumber}
                              /> */}



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

                      {/* </div> */}


                      <div className="buttons">




                        <button type="submit"
                          disabled={submitting || pristine}
                        >
                          Save
                        </button>


                        {/* <button
                          type="button"
                          onClick={form.reset}
                          disabled={submitting || pristine}
                        >
                          Reset
                        </button> */}


                        <button
                          type="button"
                          onClick={() => push("customers3", undefined)}
                        >
                          Add
                        </button>


                      </div>
                      {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
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


      {/* ##############################################################################################################  */}



      {/* Test:2 ---------End */}







      <br />
      <div className="edit-user-action">
        {/* <button
          className="button button-muted w-100-mobile"
          disabled={isLoading}
          onClick={() => history.push(ADMIN_INGREDIENDTS_NEW)}
          type="button"
        >
          <ArrowLeftOutlined />
          &nbsp;
          Back to Settings
        </button> */}




        {/* <button
          className="button w-100-mobile"
          // disabled={isLoading}
          onClick={submitForm}
          type="button"
        >
          {isLoading ? <LoadingOutlined /> : <CheckOutlined />}
          &nbsp;
          {isLoading ? 'Loading' : 'Update Ingredients'}
        </button> */}




      </div>





    </div>
  );
};

EditForm.propTypes = {
  // isLoading: PropType.bool.isRequired,
  // authProvider: PropType.string.isRequired
};

export default EditForm;

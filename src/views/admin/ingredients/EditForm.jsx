import { ArrowLeftOutlined, CheckOutlined, LoadingOutlined } from '@ant-design/icons';
import { CustomInput, CustomMobileInput } from 'components/formik';
import { ADMIN_SETTINGS, ADMIN_INGREDIENDTS_NEW } from 'constants/routes';
import { useFormikContext } from 'formik';
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



// import { render } from "react-dom";

// Test: React Final Form 


import { render } from "react-dom";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";








const EditForm = ({ isLoading, authProvider }) => {
  const history = useHistory();
  const { values, submitForm, resetForm } = useFormikContext();




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

  const onSubmit = async values => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
  };


  // get the state from the database

  const test1 = {customers: ingredients?.parameters1?.map((person) => ({ name: person.name, price: person.price.toFixed(2) })) || []}
  console.log(test1)


  const test2= { customers: [{ name: "test", price: "test" }, { name: "test1", price: "test1" }] }
  // const test2=  [{ name: "test", price: "test" }, { name: "test1", price: "test1" }] 

  console.log(test2)


  // Test: React Final Form




  return (
    <div className="user-profile-details">



      {/* ############################################################################################################## */}

      <div className="dropdown-new">

        <div
          onClick={(e) => {
            setIsActive(!isActive);
          }}
          className="button button-muted w-100-mobile">


          <h3>Ingredients Small</h3>


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
              <h1>🏁 React Final Form - Array Fields</h1>
              <a href="https://github.com/erikras/react-final-form#-react-final-form">
                Read Docs
              </a>
              <Form
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




            {/* <h1>One</h1> */}










          </div>


        </div>
      </div>






      {/* ##############################################################################################################  */}



      {/* Test:2 ---------End */}







      <br />
      <div className="edit-user-action">
        <button
          className="button button-muted w-100-mobile"
          disabled={isLoading}
          onClick={() => history.push(ADMIN_INGREDIENDTS_NEW)}
          type="button"
        >
          <ArrowLeftOutlined />
          &nbsp;
          Back to Settings
        </button>




        <button
          className="button w-100-mobile"
          // disabled={isLoading}
          onClick={submitForm}
          type="button"
        >
          {isLoading ? <LoadingOutlined /> : <CheckOutlined />}
          &nbsp;
          {isLoading ? 'Loading' : 'Update Ingredients'}
        </button>




      </div>















    </div>
  );
};

EditForm.propTypes = {
  // isLoading: PropType.bool.isRequired,
  // authProvider: PropType.string.isRequired
};

export default EditForm;

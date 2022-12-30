import { ArrowLeftOutlined, CheckOutlined, LoadingOutlined } from '@ant-design/icons';
import { CustomInput, CustomMobileInput } from 'components/formik';
import { ADMIN_SETTINGS, ADMIN_INGREDIENDTS_NEW } from 'constants/routes';
import { Field, useFormikContext, FieldArray } from 'formik';
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







  return (
    <div className="user-profile-details">
      {/* <Field
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
      /> */}



      {/* Test:1 ---------Start FieldArray */}


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
                  arrayHelpers.push({ name: "", preis1: "" })
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

      {/* Test:1 ---------End */}




      {/* Test:2 ---------Start DropDownBox */}


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

            <div className='fieldarray-top' >
              <h4>Ingredients</h4>
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
                              // placeholder={`${"index"}.${param}`}
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
                        arrayHelpers.push({ name: "", preis1: "" })
                      }
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>
                )}
              />

            </div>







            {/* <h1>One</h1> */}










          </div>


        </div>
      </div>




    {/* ##############################################################################################################  */}


      <div className="dropdown-new">


        <div
          onClick={(e) => {
            setIsActive1(!isActive1);
          }}
          className="button button-muted w-100-mobile">



          <h3>Ingredients Medium</h3>


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





          <h2>{selected}</h2>
          <span
            className={isActive1 ? "fas fa-caret-up" : "fas fa-caret-down"}
          />
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

            <div className='fieldarray-top' >
              <h4>Ingredients</h4>
              <FieldArray

                name="parameters2"
                // disabled={isLoading}
                className="fieldarray"

                render={arrayHelpers => (

                  <div>
                    {values.parameters2?.length > 0 &&
                      values.parameters2.map((paramList, index) => (

                        <div key={index}>
                          {Object.keys(paramList).map(param => (

                            <Field
                              key={`${param}`}
                              name={`parameters2.${index}.${param}`}
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
                        arrayHelpers.push({ name: "", preis1: "" })
                      }
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>
                )}
              />

            </div>




            {/* <h1>One</h1> */}




          </div>


        </div>
      </div>



    {/* ##############################################################################################################  */}



      <div className="dropdown-new">


        <div
          onClick={(e) => {
            setIsActive2(!isActive2);
          }}
          className="button button-muted w-100-mobile">


          <h3>Ingredients Large</h3>


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



          <h2>{selected}</h2>
          <span
            className={isActive2 ? "fas fa-caret-up" : "fas fa-caret-down"}
          />
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

            <div className='fieldarray-top' >
              <h4>Ingredients</h4>
              <FieldArray

                name="parameters3"
                // disabled={isLoading}
                className="fieldarray"

                render={arrayHelpers => (

                  <div>
                    {values.parameters3?.length > 0 &&
                      values.parameters3.map((paramList, index) => (

                        <div key={index}>
                          {Object.keys(paramList).map(param => (

                            <Field
                              key={`${param}`}
                              name={`parameters3.${index}.${param}`}
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
                        arrayHelpers.push({ name: "", preis1: "" })
                      }
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>
                )}
              />

            </div>







            {/* <h1>One</h1> */}










          </div>


        </div>
      </div>


    {/* ##############################################################################################################  */}



      <div className="dropdown-new">


        <div
          onClick={(e) => {
            setIsActive3(!isActive3);
          }}
          className="button button-muted w-100-mobile">




          <h3>Ingredients Extra Large</h3>



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





          <h2>{selected}</h2>
          <span
            className={isActive3 ? "fas fa-caret-up" : "fas fa-caret-down"}
          />
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

            <div className='fieldarray-top' >
              <h4>Ingredients</h4>
              <FieldArray

                name="parameters4"
                // disabled={isLoading}
                className="fieldarray"

                render={arrayHelpers => (

                  <div>
                    {values.parameters4?.length > 0 &&
                      values.parameters4.map((paramList, index) => (

                        <div key={index}>
                          {Object.keys(paramList).map(param => (

                            <Field
                              key={`${param}`}
                              name={`parameters4.${index}.${param}`}
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
                        arrayHelpers.push({ name: "", preis1: "" })
                      }
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>
                )}
              />

            </div>




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

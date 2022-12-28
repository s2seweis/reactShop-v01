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




const EditForm = ({ isLoading, authProvider }) => {
  const history = useHistory();
  const { values, submitForm, resetForm } = useFormikContext();


  
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Öffnen");

  const ingredients = useSelector((state) => state.ingredients);




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





      <div className='fieldarray-top' >
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

      <pre>{JSON.stringify(values, null, 2)}</pre>



      <div className="dropdown-new">
        <div
          onClick={(e) => {
            setIsActive(!isActive);
          }}
          className="dropdown-btn-new"
        >
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

            <h1>One</h1>
            
          </div>
         
         
        </div>
      </div>






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

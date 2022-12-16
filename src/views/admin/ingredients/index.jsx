import { useDocumentTitle, useScrollTop } from 'hooks';
// import React from 'react';

import { Formik, Field, Form, FieldArray } from "formik";

import React, { useState } from "react";

// const parameters1 = { small: "", price1: "", medium: "", price2: "" };

const Ingredients = (parameters, isLoading) => {
  useDocumentTitle('Welcome | Admin Ingredients');
  useScrollTop();

  const initFormikValues = {

    parameters1: [

      {
        name: "Käse",
        preis1: "0,80",
        preis2: "1,10",
        preis3: "1,80",
        preis4: "3,00"
      },

      {
        name: "Salami",
        preis1: "0,80",
        preis2: "1,10",
        preis3: "1,80",
        preis4: "3,00"
      },

      {
        name: "Peperoniwurst",
        preis1: "0,80",
        preis2: "1,10",
        preis3: "1,80",
        preis4: "3,00"
      },

      {
        name: "Schinken",
        preis1: "0,80",
        preis2: "1,10",
        preis3: "1,80",
        preis4: "3,00"
      }
    ],

  };


  let [count, setCount] = useState(0);

  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    count = count - 1;
    setCount(count);
  }


  return (
    <div className="loader">
      <h2>Welcome to admin Ingredients</h2>

      <div>

        <Formik
          initialValues={initFormikValues}
          validateOnChange
        // validationSchema={FormSchema}
        // onSubmit={onSubmitForm}
        >
          {({ values, setValues }) => (
            <Form className="product-form">
              <div className="product-form-inputs">





                {/* Test: adding price and size variations, becoming a table, later will become an own component (refactoring) + using formik dynamic forms */}


                {/* Sizes */}












                {/* this becoming sizes !!!! */}






                {/* <h4>Add Sizes</h4> */}

                {/* <FormikFieldArrayForm parameters={{ paramLists: parameters1 }} /> */}
                <div className='fieldarray-top' >
                  <h4>Add Sizes</h4>
                  <FieldArray

                    name="parameters1"
                    disabled={isLoading}
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





                <br />

                <br />
                <br />
                <br />

              </div>
              {/* ----THUBMNAIL ---- */}




              <div className="counter-ingredients">
                <button onClick={decrementCount}>-</button>
                <div>{count}</div>
                <button onClick={incrementCount}>+</button>
              </div>


            </Form>
          )}






        </Formik>
      </div>
    </div>
  );
};

export default Ingredients;

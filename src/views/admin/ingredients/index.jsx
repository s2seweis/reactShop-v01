import { useDocumentTitle, useScrollTop } from 'hooks';
// import React from 'react';

import { Formik, Field, Form, FieldArray } from "formik";

import React, { useState } from "react";

// const parameters1 = { small: "", price1: "", medium: "", price2: "" };

import { toppings } from "../ingredients/toppings"

import Ingredients from "../../../components/common/Ingredients"


const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

const IngredientsForm = (parameters, isLoading) => {
  useDocumentTitle('Welcome | Admin IngredientsForm');
  useScrollTop();





  // const [checkedState, setCheckedState] = useState(
  //   new Array(toppings.length).fill(false)

  // );
  // console.log(checkedState)


  // const [total, setTotal] = useState(0);

  // console.log(total)


  // const handleOnChange = (position) => {
  //   const updatedCheckedState = checkedState.map((item, index) =>
  //     index === position ? !item : item
  //   );

  //   setCheckedState(updatedCheckedState);

  //   const totalPrice = updatedCheckedState.reduce(
  //     (sum, currentState, index) => {
  //       if (currentState === true) {
  //         return sum + toppings[index].price;
  //       }
  //       return sum;
  //     },
  //     0
  //   );

  //   console.log(totalPrice)


  //   setTotal(totalPrice);
  // };



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









  // Test: 3 ----------------Start





  const [isFooVisible, setIsFooVisible] = useState(false);
  const [isBarVisible, setIsBarVisible] = useState(false);

  const handleFooPress = () => {
    setIsFooVisible((isVisible) => !isVisible);
    setIsBarVisible(false);
  };

  const handleBarPress = () => {
    setIsBarVisible((isVisible) => !isVisible);
    setIsFooVisible(false);
  };








  // Test: 3 ----------------End

  return (
    <div className="loader">
      <h2>Welcome to admin IngredientsForm</h2>

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

        {/* Test: 2 -----------Start */}

        {/* <h3>Select Toppings</h3>
        <ul className="toppings-list">
          {toppings.map(({ name, price }, index) => {
            return (
              <li key={index}>
                <div className="toppings-list-item">
                  <div className="left-section">
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={name}
                      value={name}
                      checked={checkedState[index]}
                      onChange={() => handleOnChange(index)}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                  </div>
                  <div className="right-section">{getFormattedPrice(price)}</div>
                </div>
              </li>
            );
          })}
          <li>
            <div className="toppings-list-item">
              <div className="left-section">Total:</div>
              <div className="right-section">{getFormattedPrice(total)}</div>
            </div>
          </li>
        </ul> */}





        <div className="show_hide">
          <button onClick={handleFooPress}>Show Foo</button>
          <button onClick={handleBarPress}>Show Bar</button>
          {isFooVisible && <Ingredients />
          }
          {isBarVisible && <h1>Bar</h1>}
        </div>



        {/* Test: 2 -----------End */}



        {/* Test: 3 -----------Start */}



        {/* <div className='ingredients-new'>
          <Ingredients />
        </div> */}



        {/* Test: 3 -----------End */}




        {/* to do:
        on click/select sets the right topping sizes: m/l/xl/pp
        add/delete/edit/get toppings from database manually  */}



      </div>
    </div>
  );
};

export default IngredientsForm;

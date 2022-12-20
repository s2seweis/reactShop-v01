// import { useState } from "react";
import { toppings } from "../../views/admin/ingredients/toppings";

import { useDocumentTitle, useScrollTop } from 'hooks';
// import React from 'react';

import { Formik, Field, Form, FieldArray } from "formik";

import React, { useState } from "react";


// import "./styles.css";


const Ingredients = () => {

  const [checkedState, setCheckedState] = useState(
    new Array(toppings.length).fill(false));

  console.log(checkedState)





  const [total, setTotal] = useState(0);

  const [name, setName] = useState("");

  console.log(total)
  console.log(name)


  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum
            + toppings[index].price;
          console.log(sum);
        }
        return sum
          ;


      },
      0
    );

    const totalName = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum
            + "+" + toppings[index].name;
        }
        return sum
          ;
      },
      ""
    );

    // console.log(totalPrice)

    // console.log(totalName)


    setTotal(totalPrice);

    setName(totalName);
  };

  const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

  const getFormattedName = (name) => `${name}`;

  // const getFormattedName = (name) => `${name}`;

  // const checkedItems = checkedState.length
  //   ? checkedState.reduce((total, item) => {
  //     return total + " + " + item;
  //   })
  //   : "";

  // console.log(checkedItems);

  return (
    <div className="App">
      <h3>Select Toppings</h3>
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

                {/* <div className="right-section">{getFormattedName(name)}</div> */}
              </div>
            </li>
          );
        })}
        <li>
          <div className="toppings-list-item">
            <div className="left-section">Total:</div>
            <div className="right-section">{getFormattedPrice(total)}</div>
          </div>

          <div className="toppings-list-item-b">
            <div className="left-section">Name Total:</div>
            <div className="right-section">{getFormattedName(name)}</div>
          </div>






        </li>
      </ul>
    </div>
  );
};


export default Ingredients;

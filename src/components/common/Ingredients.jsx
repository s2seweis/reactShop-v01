// import { useState } from "react";
import { toppings } from "../../views/admin/ingredients/toppings";

// import { useDocumentTitle, useScrollTop } from 'hooks';
// import React from 'react';

import { Formik, Field, Form, FieldArray } from "formik";

import React, { useState } from "react";

import { displayMoney } from 'helpers/utils';

import {
  useBasket,
  useDocumentTitle,
  useProduct,
  useRecommendedProducts,
  useScrollTop
} from 'hooks';


import { Link, useParams } from 'react-router-dom';



// import "./styles.css";


// instead of {number} maybe better if selected then active and status true otherwise status false, boolean statement


const Ingredients = (option, option1, selectedSize, selectedColor, id) => {

  const [checkedState, setCheckedState] = useState(
    new Array(toppings.length).fill(false));

  // console.log(checkedState)
  console.log(option.option)
  console.log(option.option1)
  console.log(option.selectedSize)
  console.log(option.selectedColor)
  console.log(option.id)

  

const selectedColorNew = option.selectedColor

const id1 = option.id
console.log(id1)




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




  // Test: Start


  // const { id } = useParams();
  const { product, isLoading, error } = useProduct(option.id);
  const { addToBasket, isItemOnBasket } = useBasket(option.id);


  // const [selectedImage, setSelectedImage] = useState(product?.image || '');

  // const [selectedSize, setSelectedSize] = useState('');

  // const [selectedSizeNew, setSelectedSizeNew] = useState('');

  // const [selectedPrice, setSelectedPrice] = useState('');

  // const [selectedColor, setSelectedColor] = useState('');


  const handleAddToBasket = () => {
    addToBasket({
      ...product,
      selectedColorNew,
      selectedSize: option.selectedSize,


      selectedPrice: option.option,
      selectedSizeNew: option.option1,
    

    });
  

  };


  // Test: End

  return (
    <div className="App">
      <h3>Select Toppings3.1</h3>
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
            <div className="left-section">Total3.1:</div>
            <div className="right-section">{getFormattedPrice(total)}</div>
          </div>

          <div className="toppings-list-item-b">
            <div className="left-section">Name Total:</div>
            <div className="right-section">{getFormattedName(name)}</div>
          </div>



          <h1>{displayMoney(Number(option.option.trim()) + (total))}</h1>

          {/* {option1.option1} */}


          {/* Test:Start */}


          <div className="product-modal-action">
            <button
              className={`button button-small ${isItemOnBasket(product?.id1) ? 'button-border button-border-gray' : ''}`}
              onClick={handleAddToBasket}
              type="button"
            >
              {isItemOnBasket(product?.id1) ? 'Remove From Basket2' : 'Add To Basket'}
            </button>
          </div>



          {/* Test:Endt */}



        </li>
      </ul>
    </div>
  );
};


export default Ingredients;

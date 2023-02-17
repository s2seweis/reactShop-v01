// import { useState } from "react";
import { toppings1 } from "../../../views/admin/ingredients/toppings";

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

import { useDispatch, useSelector } from 'react-redux';




// import "./styles.css";


// instead of {number} maybe better if selected then active and status true otherwise status false, boolean statement


const Ingredients2 = (option, option1, selectedSize, selectedColor, id, isItemOnBasket, addToBasket) => {




  const { ingredients } = useSelector((state) => ({
    ingredients: state.ingredients,
  }));






  const toppings2 = ingredients?.customers1?.map((person) => ({ name: person.name, price: person.price })) || []






  const [checkedState, setCheckedState] = useState(
    new Array(toppings2?.length).fill(false));

  // console.log(checkedState)
  // console.log(option.option)
  // console.log(option.option1)
  // console.log(option.selectedSize)
  // console.log(option.selectedColor)
  // console.log(option.id)
  // console.log(option.isItemOnBasket)
  // console.log(option.addToBasket)



  const selectedColorNew = option.selectedColor
  const id1 = option.id














  const [total, setTotal] = useState(0);

  const [name, setName] = useState("");

  console.log(name)
  // console.log(total)




  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum
            + toppings2[index].price;
          // console.log(sum);
        }
        return sum
          ;


      },
      0
    );

    console.log(totalPrice)

    const totalName = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum
            + "+" + toppings2[index].name;
        }
        return sum
          ;
      },
      ""
    );




    setTotal(totalPrice);

    setName(totalName);
  };

  const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

  const getFormattedPrice1 = (price) => `$${price.toFixed(2)}`;


  const getFormattedName = (name) => `${name}`;


  // const getFormattedName = (name) => `${name}`;

  // const checkedItems = checkedState.length
  //   ? checkedState.reduce((total, item) => {
  //     return total + " + " + item;
  //   })
  //   : "";





  // Test: Start


  // const { id } = useParams();
  const { product, isLoading, error } = useProduct(id1);
  // const { addToBasket, isItemOnBasket } = useBasket(id1);


  // const [selectedImage, setSelectedImage] = useState(product?.image || '');

  // const [selectedSize, setSelectedSize] = useState('');

  // const [selectedSizeNew, setSelectedSizeNew] = useState('');

  // const [selectedPrice, setSelectedPrice] = useState('');

  // const [selectedColor, setSelectedColor] = useState('');

  console.log(product);


  const handleAddToBasket = () => {
    option.addToBasket({
      ...product,
      selectedColorNew,
      selectedSize: option.selectedSize,


      selectedPrice: option.option,
      selectedPriceTotal1: selectedProceTotal1,
      selectedPriceTotal2: selectedProceTotal2,

      selectedSizeNew: option.option1,

      toppings: name


      // selectedSizeNew: option.option1,


    });


  };

  console.log(option.option)
  console.log(selectedProceTotal1);
  console.log(selectedProceTotal2);
  // console.log(option1.option1)


// console.log(displayMoney(Number(option.option.trim()) + (total)))


const selectedProceTotal1 = displayMoney(Number(option.option.trim()) + (total))

const selectedProceTotal2 = (Number(option.option.trim()) + (total))

console.log(selectedProceTotal1)
console.log(selectedProceTotal2)


console.log((option.option.trim()) + (total))



{/* <h1>{displayMoney(Number(option.option.trim()) + (total))}</h1> */}



  // Test: End

  return (
    <div className="App">
      <h3>-1- working-</h3>
      <ul className="toppings-list">


        {toppings2.map(({ name, price }, index) => {
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
            <div className="left-section">Total3.1:</div>
            <div className="right-section">{getFormattedPrice(total)}</div>
          </div>

          <div className="toppings-list-item-b">
            <div className="left-section">Name Total1:</div>
            <div className="right-section">{getFormattedName(name)}</div>
          </div>




          <h1>{displayMoney(Number(option.option.trim()) + (total))}</h1>

          {/* <h1>{getFormattedPrice1(option.option)}</h1> */}

          <h2>{option1.option1}</h2>


          {/* Test:Start */}


          <div className="product-modal-action">
            <button
              className={`button button-small ${option.isItemOnBasket(product?.id) ? 'button-border button-border-gray' : ''}`}
              onClick={handleAddToBasket}
              type="button"
            >
              {option.isItemOnBasket(product?.id) ? 'Remove From Basket2' : 'Add To Basket'}
            </button>
          </div>



          {/* Test:Endt */}



        </li>
      </ul>
    </div>
  );
};


export default Ingredients2;



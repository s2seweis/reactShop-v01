import { ArrowLeftOutlined, ConsoleSqlOutlined, LoadingOutlined } from '@ant-design/icons';
import { ColorChooser, ImageLoader, MessageDisplay } from 'components/common';
import { ProductShowcaseGrid } from 'components/product';
import { RECOMMENDED_PRODUCTS, SHOP } from 'constants/routes';
import { displayMoney } from 'helpers/utils';

import {
  useBasket,
  useDocumentTitle,
  useProduct,
  useRecommendedProducts,
  useScrollTop
} from 'hooks';

import React, { useEffect, useRef, useState, FC } from 'react';

import { Link, useParams } from 'react-router-dom';

import Select from 'react-select';


import FormikFieldArrayForm from 'components/common/FormikFieldArrayForm';

// import $ from 'jquery';

import * as Yup from 'yup';

import ReactDOM from "react-dom";

import { Formik, Field, Form, FieldArray, ErrorMessage } from "formik";


import Ingredients2 from "../../components/common/Ingredients2"
import Ingredients from "../../components/common/Ingredients"


// Test:1 Bringing Ingredients into index


import { toppings1 } from "../../views/admin/ingredients/toppings";
import { string } from 'prop-types';


import { useDispatch, useSelector } from 'react-redux';





// Test:1 Bringing Ingredients into index








const ViewProduct = () => {

  useScrollTop();
  useDocumentTitle(`View ${product?.name || 'Item'}`);


  const { id } = useParams();
  // console.log(id);
  const { product, isLoading, error } = useProduct(id);
  // console.log(product);
  const { addToBasket, isItemOnBasket } = useBasket(id);
  // console.log(addToBasket);
  // console.log(isItemOnBasket);


  const [selectedImage, setSelectedImage] = useState(product?.image || '');

  const [selectedSize, setSelectedSize] = useState('');
  // console.log(selectedSize);

  const [selectedSizeNew, setSelectedSizeNew] = useState('');

  const [selectedPrice, setSelectedPrice] = useState('');

  const [selectedColor, setSelectedColor] = useState('');
  // console.log(selectedColor);


  const { ingredients } = useSelector((state) => ({
    ingredients: state.ingredients,
  }));


  const toppings2 = ingredients?.parameters1?.map((person) => ({ name: person.name, price: person.price })) || []
  console.log(toppings2)

  console.log(toppings1)






  const {
    recommendedProducts,
    fetchRecommendedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured
  } = useRecommendedProducts(6);

  const colorOverlay = useRef(null);
  // console.log(colorOverlay)


  useEffect(() => {
    setSelectedImage(product?.image);
  }, [product]);




  // Test:2 

  const onSelectedSizeChange = (newValue) => {
    setSelectedSize(newValue.value);
    // console.log(newValue.value.email)
    // console.log(newValue.value.name)
    // console.log(newValue.value)
    // console.log(newValue.label)
  };


  // Test:2 -----End




  const handleChange2 = (event) => {
    setOption(event.value)
    setOption1(event.label)
    // setOption2(event.number)
    // setOption3(event.number)
    // setOption(event.label)
    // console.log(event.value);
    // console.log(event.label);
    // console.log(event.value.email);
  }



  const [dropValue, setDropValue] = useState();

  const [option, setOption] = useState();
  // console.log(option)


  const [option1, setOption1] = useState();
  // console.log(option1)

  // Test: 1 ----Start

  // const [option2, setOption2] = useState();
  // console.log(option2)

  // const [option3, setOption3] = useState();
  // console.log(option3)






  // Test: 1 ----Start




  const onSelectedColorChange = (color) => {
    setSelectedColor(color);
    if (colorOverlay.current) {
      colorOverlay.current.value = color;
    }
  };


  const handleAddToBasket = () => {
    addToBasket({
      ...product,
      selectedColor,
      selectedSize: selectedSize || product.new[0],


      selectedPrice: option,
      selectedSizeNew: option1,
      // number: option2,
      // number3: option3

    });
    // console.log(option)
    // console.log(option1)
    // console.log(option2)
    // console.log(option3)

  };


  // Test:10 ------Start

  // const tickets = product?.tickets
  //   || []
  //   ;
  //   console.log(tickets)


  const tickets = product?.tickets.map(({ email, name, key, value, id, number, number1 }) => ({ [email]: name, [name]: email, ["number"]: number }))
    || []
    ;

  // console.log(tickets)










  // console.log(product?.tickets)

  // tickets.sort();

  // product?.tickets.sort()
  // console.log(tickets)

  // Test:10 ------End



  // tickets.sort((firstItem, secondItem) => firstItem.email - secondItem.email);



  const tickets1 = [
    { Name: 'Lazslo', Nachname: 'Jamf' },
    { Name: 'Pig', Nachname: 'Bodine' },
    { Name: 'Pirate', Nachname: 'Prentice' }
  ];

  // Test:11 ---------------------------Start




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






  // Test:11 ---------------------------End




  // Test: 1






  const [checkedState, setCheckedState] = useState(
    new Array(toppings2.length).fill(false));






  const [total, setTotal] = useState(0);

  const [name, setName] = useState("");




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

  const getFormattedName = (name) => `${name}`;


  const checkedItems = checkedState.length
    ? checkedState.reduce((total, item) => {
      return total + " + " + item;
    })
    : "";






  // Test: 1







  return (
    <main className="content">
      {isLoading && (
        <div className="loader">
          <h4>Loading Product...</h4>
          <br />
          <LoadingOutlined style={{ fontSize: '3rem' }} />
        </div>
      )}
      {error && (
        <MessageDisplay message={error} />
      )}
      {(product && !isLoading) && (
        <div className="product-view">
          <Link to={SHOP}>
            <h3 className="button-link d-inline-flex">
              <ArrowLeftOutlined />
              &nbsp; Back to shop1
            </h3>
          </Link>
          <div className="product-modal">
            {product.imageCollection.length !== 0 && (
              <div className="product-modal-image-collection">
                {product.imageCollection.map((image) => (
                  <div
                    className="product-modal-image-collection-wrapper"
                    key={image.id}
                    onClick={() => setSelectedImage(image.url)}
                    role="presentation"
                  >
                    <ImageLoader
                      className="product-modal-image-collection-img"
                      src={image.url}
                    />
                  </div>
                ))}
              </div>
            )}



            <div className="product-modal-image-wrapper">
              {selectedColor && <input type="color" disabled ref={colorOverlay} id="color-overlay" />}
              <ImageLoader
                alt={product.name}
                className="product-modal-image"
                src={selectedImage}
              />
            </div>



            <div className="product-modal-details">
              <br />
              <span className="text-subtle">{product.brand}</span>
              <h1 className="margin-top-0">{product.name}</h1>
              <span>{product.description}</span>
              <br />
              <br />
              <div className="divider" />
              <br />
              <div>
                <span className="text-subtle">Lens Width and Frame Size</span>
                <br />
                <br />


                {/* <Select
                  placeholder="--Select Size--"
                  onChange={onSelectedSizeChange}
                  options={product.sizes.sort((a, b) => (a < b ? -1 : 1)).map((size) => ({ label: `${size} mm`, value: size }))}
                  styles={{ menu: (provided) => ({ ...provided, zIndex: 10 }) }}
                /> */}

                <Select
                  placeholder="--Select Size--1"
                  onChange={onSelectedSizeChange}
                  options={product.sizes.map((size) => ({ label: `${size} mm`, value: size }))}
                  styles={{ menu: (provided) => ({ ...provided, zIndex: 10 }) }}
                />


              </div>




              <br />
              {product.availableColors.length >= 1 && (
                <div>
                  <span className="text-subtle">Choose Color</span>
                  <br />
                  <br />
                  <ColorChooser
                    availableColors={product.availableColors}
                    onSelectedColorChange={onSelectedColorChange}
                  />
                </div>
              )}







              {/* <h1>{displayMoney(option ? option : 0)}</h1> */}

              {/* <h1>{displayMoney(Number(option ? option : 0) + (total ? total : 0))}</h1> */}





              <div className="product-modal-action">
                <button
                  className={`button button-small ${isItemOnBasket(product.id) ? 'button-border button-border-gray' : ''}`}
                  onClick={handleAddToBasket}
                  type="button"
                >
                  {isItemOnBasket(product.id) ? 'Remove From Basket2' : 'Add To Basket1'}
                </button>
              </div>







              {/* Test: 10 -----Start "Its working like it should"  */}

              <div className='product-vari'>
                <Select
                  // placeholder="--Select Size--11"
                  onChange={handleChange2}
                  id="fruit-select"
                  // options={tickets}
                  options={product.tickets.map((size) => ({ label: `${size.name} `, value: size.email, number: size.number }))}

                />

              </div>

              {/* Test: 10 -----End




              {/* Test: 5 ---------Start */}


              {/* <h1>{product.tickets.index}</h1> */}


              {/* Test: 5 ------End */}






              {/* Test:11 -------------Start */}

              {/* ################################################################################# */}

              {/* <div className="show_hide">
                <button onClick={handleFooPress}>Show Foo</button>
                <button onClick={handleBarPress}>Show Bar</button>
                {isFooVisible &&



                  <div className="App">
                    <h3>Select Toppings1.1</h3>
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

                              <div className="right-section">{getFormattedName(name)}</div>
                            </div>
                          </li>
                        );
                      })}
                      <li>
                        <div className="toppings-list-item">
                          <div className="left-section">Total3:</div>
                          <div className="right-section">{getFormattedPrice(total)}</div>

                        </div>

                        <div className="toppings-list-item-b">
                          <div className="left-section">Name Total:</div>
                          <div className="right-section">{getFormattedName(name)}</div>
                        </div>


                      </li>
                    </ul>
                  </div>
                }



               


              </div> */}




              {/* ################################################################################# */}


              {/* <div className="show_hide">
                <button onClick={handleFooPress}>Show Foo</button>
                <button onClick={handleBarPress}>Show Bar</button>
                {isFooVisible &&



                  <div className="App">
                    <h3>Select Toppings1.1</h3>
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
                          <div className="left-section">Total1.1:</div>
                          <div className="right-section">{getFormattedPrice(total)}</div>
                        </div>

                        <div className="toppings-list-item-b">
                          <div className="left-section">Name Total:</div>
                          <div className="right-section">{getFormattedName(name)}</div>
                        </div>






                      </li>
                    </ul>
                  </div>



                }
                {isBarVisible && <h1>Bar</h1>}
              </div> */}





              {/* Test:11 -------------End */}

              <div> {option1?.trim() === "small" ?




                // <Ingredients 

                // option={option} 
                // option1={option1}  
                // selectedSize={selectedSize}  
                // selectedColor={selectedColor}  
                // product={product}  
                // id={id}  
                // addToBasket={addToBasket}  
                // isItemOnBasket={isItemOnBasket}  



                // /> 




                <div className="App">
                  <h3>Select Toppings3.1</h3>
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
                        <div className="left-section">Name Total1:</div>
                        <div className="right-section">{getFormattedName(name)}</div>
                      </div>



                      <h1>{displayMoney(Number(option.trim()) + (total))}</h1>

                      {/* {option1.option1} */}


                      {/* Test:Start */}


                      <div className="product-modal-action">
                        <button
                          className={`button button-small ${isItemOnBasket(product?.id) ? 'button-border button-border-gray' : ''}`}
                          onClick={handleAddToBasket}
                          type="button"
                        >
                          {isItemOnBasket(product?.id) ? 'Remove From Basket2' : 'Add To Basket'}
                        </button>
                      </div>



                      {/* Test:Endt */}



                    </li>
                  </ul>
                </div>




                : ""} </div>









              {/* down its working
              <div> {option1 === "100" ? <Ingredients /> : ""} </div> */}




              {/* <div> {option2 === "100" ?




              >>>>>>>>  <Ingredients /> <<<<<<<<


                <div className="App">
                  <h3>Select Toppings1.1</h3>
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
                        <div className="left-section">Total1.1:</div>
                        <div className="right-section">{getFormattedPrice(total)}</div>
                      </div>

                      <div className="toppings-list-item-b">
                        <div className="left-section">Name Total:</div>
                        <div className="right-section">{getFormattedName(name)}</div>
                      </div>






                    </li>
                  </ul>
                </div>




                : ""} </div> */}



              {/* #################################################################################  */}




              {/* <div> {option3 === "200" ? <Ingredients2 /> : ""} </div> */}



              <div> {option1?.trim() === "medium" ? <Ingredients2 option={option} /> : ""} </div>








            </div>
          </div>
          <div style={{ marginTop: '10rem' }}>
            <div className="display-header">
              <h1>Recommended</h1>
              <Link to={RECOMMENDED_PRODUCTS}>See All</Link>
            </div>
            {errorFeatured && !isLoadingFeatured ? (
              <MessageDisplay
                message={error}
                action={fetchRecommendedProducts}
                buttonLabel="Try Again"
              />
            ) : (
              <ProductShowcaseGrid products={recommendedProducts} skeletonCount={3} />
            )}
          </div>
        </div>
      )}
    </main>
  );

  // Test 1


};



export default ViewProduct;



// Review:
// Functions being called more than Me anticipated, results into too many console.log(), too many calls.
// Needs a better conditional Statement, better then {option2 === 100 ? Ingredients : ""}. => now using option 1 ,ab bit better already
// Instead of {number} maybe better if selected isactive then state true otherwise states false.
// Instead using the string, maybe calling direct the field of the array.


// In React we can access the child’s state using Refs.  we will assign a Refs for the child component in the parent component. then using Refs we can access the child’s state. not sure


// To render multiple JSX elements in React, you can loop through an array with the .map() method and return a single element.


// https://stackoverflow.com/questions/68885949/how-to-access-particular-child-state-from-parent-with-multiple-children
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


// Ingredients Child Component
import Ingredients1 from "../../components/common/ingredients/Ingredients1"
import Ingredients2 from "../../components/common/ingredients/ingredients2"
import Ingredients3 from "../../components/common/ingredients/ingredients3"
import Ingredients4 from "../../components/common/ingredients/ingredients4"



import { useDispatch, useSelector } from 'react-redux';














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

  const {
    recommendedProducts,
    fetchRecommendedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured
  } = useRecommendedProducts(6);

  const colorOverlay = useRef(null);


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
  console.log(option1)




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


    });


  };


  // Test:10 ------Start


  const tickets = product?.tickets.map(({ email, name, key, value, id, number, number1 }) => ({ [email]: name, [name]: email, ["number"]: number }))
    || []
    ;

  // console.log(tickets)



  // Test:10 ------End


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


              <div className="product-modal-action">
                <button
                  className={`button button-small ${isItemOnBasket(product.id) ? 'button-border button-border-gray' : ''}`}
                  onClick={handleAddToBasket}
                  type="button"
                >
                  {isItemOnBasket(product.id) ? 'Remove From Basket2' : 'Add To Basket1'}
                </button>
              </div>



              <div className='product-vari'>
                <Select
                  // placeholder="--Select Size--11"
                  onChange={handleChange2}
                  id="fruit-select"
                  // options={tickets}
                  options={product.tickets.map((size) => ({ label: `${size.name} `, value: size.email, number: size.number }))}

                />

              </div>


              {/* Test:Ingredients Child Component, bringing Parent state into it -------------Start */}

              <div> {option1?.trim() === "small" ?


                <Ingredients1

                  option={option}
                  option1={option1}
                  selectedSize={selectedSize}
                  selectedColor={selectedColor}
                  product={product}
                  id={id}
                  addToBasket={addToBasket}
                  isItemOnBasket={isItemOnBasket}


                /> : ""} </div>


              <div> {option1?.trim() === "medium" ?


                <Ingredients2

                  option={option}
                  option1={option1}
                  selectedSize={selectedSize}
                  selectedColor={selectedColor}
                  product={product}
                  id={id}
                  addToBasket={addToBasket}
                  isItemOnBasket={isItemOnBasket}


                /> : ""} </div>


              <div> {option1?.trim() === "large" ?


                <Ingredients3

                  option={option}
                  option1={option1}
                  selectedSize={selectedSize}
                  selectedColor={selectedColor}
                  product={product}
                  id={id}
                  addToBasket={addToBasket}
                  isItemOnBasket={isItemOnBasket}


                /> : ""} </div>

                
              <div> {option1?.trim() === "extra large" ?


                <Ingredients4

                  option={option}
                  option1={option1}
                  selectedSize={selectedSize}
                  selectedColor={selectedColor}
                  product={product}
                  id={id}
                  addToBasket={addToBasket}
                  isItemOnBasket={isItemOnBasket}


                /> : ""} </div>




              {/* <div> {option1?.trim() === "medium" ? <Ingredients2 option={option} /> : ""} </div>

              <div> {option1?.trim() === "large" ? <Ingredients3 option={option} /> : ""} </div>

              <div> {option1?.trim() === "extra large" ? <Ingredients4 option={option} /> : ""} </div> */}


              {/* Test:11 -------------End */}



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




};



export default ViewProduct;



import { ArrowLeftOutlined, LoadingOutlined } from '@ant-design/icons';
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

// import Ingredients from 'components/common/Ingredients';

import FormikFieldArrayForm from 'components/common/FormikFieldArrayForm';

// import $ from 'jquery';

import * as Yup from 'yup';

import ReactDOM from "react-dom";

import { Formik, Field, Form, FieldArray, ErrorMessage } from "formik";





const ViewProduct = (parameters, demo) => {

  const { id } = useParams();
  const { product, isLoading, error } = useProduct(id);
  const { addToBasket, isItemOnBasket } = useBasket(id);

  useScrollTop();
  useDocumentTitle(`View ${product?.name || 'Item'}`);

  const [selectedImage, setSelectedImage] = useState(product?.image || '');

  const [selectedSize, setSelectedSize] = useState('');

  const [selectedSizeNew, setSelectedSizeNew] = useState('');

  const [selectedPrice, setSelectedPrice] = useState('');

  const [selectedColor, setSelectedColor] = useState('');






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
    // setOption(event.label)
    // console.log(event.value);
    // console.log(event.label);
    // console.log(event.value.email);
    // console.log(event.value.name);
  }


  const [dropValue, setDropValue] = useState();

  const [option, setOption] = useState();
  console.log(option)

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
      selectedSizeNew: option1

    });
    console.log(option)
    console.log(option1)

  };


  // Test:10 ------Start

  // const tickets = product?.tickets
  //   || []
  //   ;
  //   console.log(tickets)


  const tickets = product?.tickets.map(({ email, name, key, value, id }) => ({ [email]: name, [name]: email }))
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





              <h1>{displayMoney(option ? option : 0)}</h1>




              <div className="product-modal-action">
                <button
                  className={`button button-small ${isItemOnBasket(product.id) ? 'button-border button-border-gray' : ''}`}
                  onClick={handleAddToBasket}
                  type="button"
                >
                  {isItemOnBasket(product.id) ? 'Remove From Basket' : 'Add To Basket'}
                </button>
              </div>



              {/* Test: 9 -----Start


              {/* <div className="ingredients">
                <Ingredients></Ingredients>
              </div> */}


              {/* Test: 9 -----End



              {/* Test: 10 -----Start "Its working like it should"  */}

              <div className='product-vari'>
                <Select
                  placeholder="--Select Size--"
                  onChange={handleChange2}
                  id="fruit-select"
                  // options={tickets}
                  options={product.tickets.map((size) => ({ label: `${size.name} mm`, value: size.email }))}

                />

              </div>

              {/* Test: 10 -----End


              {/* Test: 5 ---------Start */}


              <FormikFieldArrayForm parameters={{ paramLists: tickets }} />


              {/* Test: 5 ------End */}


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

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




import Ingredients from 'components/common/Ingredients';

import FormikFieldArrayForm from 'components/common/FormikFieldArrayForm';

// import $ from 'jquery';

// import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
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
  // console.log(selectedSize.name)



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

  const handleChange = (event) => {
    setOption(event.target?.value)
    // console.log(event.target.value);


  }

  const handleChange2 = (event) => {
    setOption(event.value)
    // setOption(event.label)
    console.log(event.value);
    console.log(event.label);
    console.log(event.value.email);
    console.log(event.value.name);


  }



  const [dropValue, setDropValue] = useState();

  const [option, setOption] = useState();
  // console.log(option)




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
      selectedSizeNew: text

    });
    console.log(option)
    console.log(text)

  };




  {/* Test ----------------Start */ }
  // https://javascript.plainenglish.io/how-to-retrieve-the-text-of-the-selected-option-element-in-a-select-element-with-javascript-6933e5d4457d


  // its working?



  const getSelectedText = (el) => {
    if (el?.selectedIndex === -1) {
      return null;
    }
    return el?.options[el.selectedIndex].text;
  }


  const select = document.querySelector('select')
  const text = getSelectedText(select);
  // console.log(text)

  {/* Test ----------------End */ }



  // Test: Start -----Dynamic Form - working

  // https://jasonwatmore.com/post/2020/09/28/react-formik-dynamic-form-example


  const initialValues = {
    numberOfTickets: product?.numberOfTickets
      ||
      '',
    tickets:
      product?.tickets
      ||
      []
  };
  // console.log(initialValues.numberOfTickets)
  // console.log(initialValues.tickets)




  // const validationSchema = Yup.object().shape({
  //   numberOfTickets: Yup.string()
  //     .required('Number of tickets is required'),
  //   tickets: Yup.array().of(
  //     Yup.object().shape({
  //       name: Yup.string()
  //         .required('Name is required'),
  //       email: Yup.string()
  //         .email('Email is invalid')
  //         .required('Email is required')
  //     })
  //   )
  // });

  // function onChangeTickets(e, field, values, setValues) {
  //   // update dynamic form
  //   const tickets = [...values.tickets];
  //   const numberOfTickets = e.target.value || 0;
  //   const previousNumber = parseInt(field.value || '0');
  //   if (previousNumber < numberOfTickets) {
  //     for (let i = previousNumber; i < numberOfTickets; i++) {
  //       tickets.push({ name: '', email: '' });
  //     }
  //   } else {
  //     for (let i = previousNumber; i >= numberOfTickets; i--) {
  //       tickets.splice(i, 1);
  //     }
  //   }
  //   setValues({ ...values, tickets });

  //   // call formik onChange method
  //   field.onChange(e);


  // }

  // function onSubmit(fields) {
  //   // display form field values on success
  //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
  //   console.log(JSON.stringify(fields, null, 4))

  // }

  // Test ------End


  // Test: 3 ---------Start


  // const people = [
  //   { id: 1, name: "Johnny", gender: "male", age: 30 },
  //   { id: 2, name: "Jenny", gender: "female", age: 28 },
  //   { id: 3, name: "Sam", gender: "male", age: 13 },
  //   { id: 4, name: "Dean", gender: "male", age: 8 }
  // ];


  // Test ------End


  // Test: 4 ---------Start


  // const arr = [
  //   { value: '', text: '--Choose an option--' },
  //   { value: 'apple1', text: 'Apple 🍏' },
  //   { value: 'banana1', text: 'Banana 🍌' },
  //   { value: 'kiwi1', text: 'Kiwi 🥝' },
  // ];

  // const handleChange3 = event => {
  //   console.log(event.target.value);
  // };

  // Test ------End



  // Test: 5 ---------Start




  // const parameters1 =  [{ email: "Sebastian", name: "Striker" }] ;

  const tickets = product?.tickets
    || []
    ;
  tickets.sort();
  // console.log(tickets)







  const options1 = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  // console.log(options1)

  // useEffect(()=>{
  //   // unique list update.
  //   setOption(product?.tickets)
  //  }, [product]);




  // const FormikFieldArrayForm = ({ parameters }) => (
  //   <div>

  //     <Formik
  //       initialValues={parameters}
  //       onSubmit={values =>
  //         setTimeout(() => {
  //           alert(JSON.stringify(values, null, 2));
  //         }, 5000)
  //       }
  //     >
  //       {({ values }) => (
  //         <Form>
  //           <FieldArray
  //             name="paramLists"
  //             render={arrayHelpers => (
  //               <div>
  //                 {values.paramLists.length > 0 &&
  //                   values.paramLists.map((paramList, index) => (
  //                     <div key={index}>
  //                       {Object.keys(paramList).map(param => (
  //                         <Field
  //                           key={`${param}`}
  //                           name={`paramLists.${index}.${param}`}
  //                           placeholder={`${index}.${param}`}
  //                         />
  //                       ))}
  //                       <button
  //                         type="button"
  //                         onClick={() => arrayHelpers.remove(index)}
  //                       >
  //                         {" "}
  //                         -{" "}
  //                       </button>
  //                     </div>
  //                   ))}
  //                 <button
  //                   type="button"
  //                   onClick={() =>
  //                     arrayHelpers.push({ email: "", name: "" })
  //                   }
  //                 >
  //                   {" "}
  //                   +{" "}
  //                 </button>
  //               </div>
  //             )}
  //           />

  //         </Form>
  //       )}
  //     </Formik>
  //   </div>
  // );




  // Test: 5 ------End



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


              {/* Test: 2 --------Start mapping over tickets */}

              <div>
                <span className="text-subtle">Lens1 Width and Frame Size</span>
                <br />
                <br />


                {/* <Select
                  placeholder="--Select Size--"
                  onChange={onSelectedSizeChange}
                  options={product.sizes.sort((a, b) => (a < b ? -1 : 1)).map((size) => ({ label: `${size} mm`, value: size }))}
                  styles={{ menu: (provided) => ({ ...provided, zIndex: 10 }) }}
                /> */}

                <Select
                  placeholder="--Select Size--2"
                  onChange={onSelectedSizeChange}
                  options={product.tickets.map((size) => ({ label: `${size} mm`, value: size }))}
                  // options={product.tickets.map((size) => ({ label: `${selectedSize.name} mm`, value: size }))}

                  styles={{ menu: (provided) => ({ ...provided, zIndex: 10 }) }}
                />


              </div>


              {/* Test: 2 --------End mapping over tickets */}





              {/* Test: --------------------Start */}


              {/* <div>
                <div className="dropdown">



                  <button className="button-variant" onClick={() => setDropValue(product?.sizes_prices.small)} href="#">Small</button>
                  <button className="button-variant" onClick={() => setDropValue(product?.sizes_prices.medium)} href="#">Medium</button>
                  <button className="button-variant" onClick={() => setDropValue(product?.sizes_prices.large)} href="#">Large</button>
                  <button className="button-variant" onClick={() => setDropValue(product?.sizes_prices.extra_large)} href="#"> Extra Large</button>

                </div>


                <button className="button-variant" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  {dropValue == null || dropValue == '' ? 'Pick a Size' : dropValue}
                </button>
              </div> */}


              {/* Test: --------------------Start */}




              {/* <select
                
                className="select-product-size"
                onChange={handleChange}
                id="mySelect"
              >
                <option value={0}  >Pick Your Size</option>
                <option value={selectedSize.email}>



                 
                  {selectedSize.name}




                </option>

                <option value={product?.prices_new.medium}>{product?.sizes_new.medium}</option>
                <option value={product?.prices_new.large}>{product?.sizes_new.large}</option>
                <option value={product?.prices_new.extra_large}>{product?.sizes_new.extra_large}</option>
              </select> */}




              {/* <button className="button-variant" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                {option == null || option == '' ? 'Pick!!' : option}
              </button> */}




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





              {/* <div className="ingredients">
                <Ingredients></Ingredients>
              </div> */}







              {/* Test:4 -------Start */}

              {/* working !!! - next => changing the productForm (array.map.string) */}



              <div className='product-vari'>
                <select onChange={handleChange} id="fruit-select" >
                  {product.tickets.map((option, index) => (
                    <option key={index} value={option.email}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>




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




              {/* Test:4 -------End */}

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




};



export default ViewProduct;

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


import { useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next'

import Ingredients from 'components/common/Ingredients';

import $ from 'jquery';


const defaultSelectValue = "Select a fruit"





const ViewProduct = (fruitDetector) => {




  const { id } = useParams();
  const { product, isLoading, error } = useProduct(id);
  const { addToBasket, isItemOnBasket } = useBasket(id);
  // console.log(product)

  useScrollTop();
  useDocumentTitle(`View ${product?.name || 'Item'}`);

  const [selectedImage, setSelectedImage] = useState(product?.image || '');

  const [selectedSize, setSelectedSize] = useState('');

  // Addind selected Price for Basket
  const [selectedPrice, setSelectedPrice] = useState('');

  // =>

  // making it to option and to setOption



  // console.log(selectedPrice)


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




  // Test:1 onSelectedSizeChange almost the same like handleChange

  const onSelectedSizeChange = (newValue) => {
    setSelectedSize(newValue.value);
    // console.log(newValue.value)
  };

  const handleChange = (event) => {
    setOption(event.target.value)

    // console.log(event.target.value)
  }



  // Test:1 -----end



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


      selectedPrice: option

    });
    console.log(option)
    // console.log(selectedPrice)

  };




  // const [size, setSize] = React.useState();
  // const [price, setPrice] = React.useState();
  // console.log(price)



  // Test ----------------




  // const myFunction = () => {
  //   var x = document.getElementById("mySelect").options[0].text;
  //   document.getElementById("demo").innerHTML = x;
  //   console.log(x)

  // }


  // const myFunction = () => {
  //   var x = document.getElementById("mySelect");
  //   var i = x.selectedIndex;
  //   document.getElementById("demo").innerHTML = x.options[i].text;
  //   console.log(x)

  // }


  // let log = document.getElementsById('test').selectedValue;
  // console.log('log')


  let log = document.getElementById('log');
  // console.log('log')



  // const value = React.useRef('');
  // console.log(value)




  const handleChange1 = (e) => {
    let innerText = e.target[e.target.options.selectedIndex].innerText;
    let value = e.target.value;
    // console.log(innerText)
    // console.log(value)



    log.innerHTML = `<table>
      <tr><th>value</th><th>innerText</th></tr>
      <tr><td>${value}</td><td>${innerText}</td></tr>
    </table>`;


    // console.log(innerText)
    // console.log(value)



  }



  // const ref = React.useRef();
  // log on second render
  // My name is Shubham, I work for  for the last 5 years.
  // console.log(ref.current?.innerText);



  // Test ----------------End


  const Welcome = (props) => {
    return <div>
      <p>Hello {props.name}!</p>
      {props.children
      }

    </div>
  };


  // Test ----------------End



  // export defaWelcomelt function PaperLetter(props) {
  //   const [clicked, setclicked] = useState(false);
  //   const letterRef = useRef();





  // const textInput = useRef(null);


  // const size = useRef(null);

  // const size = React.useRef();
  // const ref = React.useRef();



  // const size = React.useRef();





  // Test ----------------End


  const [selected, setSelected] = useState(defaultSelectValue)
  // console.log(selected);




  // Test ----------------End




  // var e = document.getElementById("ddlViewBy");

  // function onChange() {
  //   var value = e.value;
  //   var text = e.options[e.selectedIndex].text;
  //   console.log(value, text);
  // }

  // e.onchange = onChange;
  // onChange();







  // Test ----------------End







  var e = document.getElementById("ddlViewBy");
  // var e = document.getElementById("elementId");



  const handleChange2 = () => {
    // var value = e.value;
    // var text = e.options[e.selectedIndex].text;



    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    console.log(value);
    console.log(text);




  }



  {/* Test ----------------End */ }






  const [inputValue, setInputValue] = useState("");
  // console.log(inputValue);

  const count = useRef(0);
  // console.log(count);






  useEffect(() => {
    count.current = count.current + 1;
  });






  const ref = React.useRef();


  


  {/* Test ----------------End */ }

   const getSelectedText = (el) => {
    if (el?.selectedIndex === -1) {
      return null;
    }
    return el?.options[el.selectedIndex].text;
  }


  const select = document.querySelector('select')
  const text = getSelectedText(select);
  console.log(text)




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



            {/* <div className="product-modal-image-wrapper">
              {selectedColor && <input type="color" disabled ref={colorOverlay} id="color-overlay" />}
              <ImageLoader
                alt={product.name}
                className="product-modal-image"
                src={selectedImage}
              />
            </div> */}



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
                  placeholder="--Select Size--"
                  onChange={onSelectedSizeChange}
                  options={product.sizes.map((size) => ({ label: `${size} mm`, value: size }))}
                  styles={{ menu: (provided) => ({ ...provided, zIndex: 10 }) }}
                />


              </div>







              <div>
                <div className="dropdown">



                  <button className="button-variant" onClick={() => setDropValue(product?.sizes_prices.small)} href="#">Small</button>
                  <button className="button-variant" onClick={() => setDropValue(product?.sizes_prices.medium)} href="#">Medium</button>
                  <button className="button-variant" onClick={() => setDropValue(product?.sizes_prices.large)} href="#">Large</button>
                  <button className="button-variant" onClick={() => setDropValue(product?.sizes_prices.extra_large)} href="#"> Extra Large</button>

                </div>


                <button className="button-variant" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  {dropValue == null || dropValue == '' ? 'Pick a Size' : dropValue}
                </button>
              </div>




              <select
                // </Select>
                className="select-product-size"
                onChange={handleChange}
                id="mySelect"
              >
                <option value={0}  >Pick Your Size</option>
                <option value={product?.sizes_prices.small}>

                

                    small



                

                </option>

                <option value={product?.sizes_prices.medium}>medium</option>
                <option value={product?.sizes_prices.large}>large</option>
                <option value={product?.sizes_prices.extra_large}>extra large</option>
              </select>


              {/* <p id="demo"></p> */}

              <button className="button-variant" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                {option == null || option == '' ? 'Pick!!' : option}
              </button>







              <div className="vari">
                <select id="greet" onChange={handleChange1}>
                  <option value={product?.sizes_prices.small}>{product?.sizes_new.small} (innerText)</option>
                  <option value="value_goodbye">Goodbye innerText</option>
                  <option value="value_seeYou">See you... innerText</option>
                </select>


                <div id="log"></div>




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





              {/* Test w3_test------------------- */}

              {/* <div className="w3_test">
                <form>
                  <select id="mySelect">
                    <option>Apple</option>
                    <option>Orange</option>
                    <option>Pineapple</option>
                    <option>Banana</option>
                  </select>
                </form>

                <p className="w3_test">Click the button to display the text of the first option in the drop-down list.</p>

                <button onClick={myFunction}>Try it</button>

                <p id="demo"
                  className="w3_test"></p>

              </div> */}


              {/* Test ----------------End */}



              {/* <div className="w3_test">
                <form>
                  <select id="mySelect" onChange={myFunction}>
                    <option>Apple</option>
                    <option>Orange</option>
                    <option>Pineapple</option>
                    <option>Banana</option>
                  </select>
                </form>

                <p id="demo"></p>

              </div> */}





              <div className='w3_test'>

                <Welcome name="Sara">good day </Welcome>



                {/* Atempt:10 */}

                {/* <div ref={ref}>
                My name is Shubham, I work for <input type="text" /> for the last 5 years.
              </div> */}

              </div>




              {/* <select id="test">
                <option value="1">Test One</option>
                <option value="2">Test Two</option>
              </select> */}





              {/* Test ----------------End */}








              <div className='w3_test'>

                <>
                  <label htmlFor="fruits">Fruits</label>{' '}
                  <select
                    id="fruits"
                    name="fruits"
                    defaultValue={selected}
                    style={{ color: selected === defaultSelectValue ? "gray" : "black" }}
                    // onClick={() => { toggleFavorite(); collapseSidebar() }}

                    onChange={e => { setSelected(e.target.value) }}
                  >
                    <option>{defaultSelectValue}</option>
                    <option
                    >
                      Banana
                    </option>

                    <option>Apple</option>
                    <option>Orange</option>
                  </select>

                  <h2>Selected: {selected}</h2>
                </>

              </div>







              {/* Test ----------------End */}




              {/* <form>
                <select id="ddlViewBy">
                  <option value="1">test1</option>
                  <option value="2" selected="selected">test2</option>
                  <option value="3">test3</option>
                </select>
              </form> */}







              {/* Test ----------------End */}

              <div className='w3_test'>
                <form>
                  <select id="ddlViewBy"
                    onChange={handleChange2}
                  >
                    <option value="1">test1</option>
                    <option value="2" selected="selected">test2</option>
                    <option value="3">test3</option>
                  </select>
                </form>
              </div>

              {/* Test ----------------End */}





              <div className='w3_test'>
                <>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <h1>Render Count: {count.current}</h1>
                </>
              </div>


              {/* Test ----------------End */}




              {/* <div className='w3_test' ref={ref}>

                small



              </div> */}




              {/* Test ----------------End */}





              <div className="ingredients">
                <Ingredients></Ingredients>
              </div>


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

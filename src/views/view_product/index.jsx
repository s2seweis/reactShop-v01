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
import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Select from 'react-select';

import { useSelector } from 'react-redux';




const ViewProduct = () => {


  // const { basket, user } = useSelector((state) => ({
  //   basket: state.basket
  // }));


  const { id } = useParams();
  const { product, isLoading, error } = useProduct(id);
  const { addToBasket, isItemOnBasket } = useBasket(id);
  // console.log(product)

  useScrollTop();
  useDocumentTitle(`View ${product?.name || 'Item'}`);

  const [selectedImage, setSelectedImage] = useState(product?.image || '');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');





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

  const onSelectedSizeChange = (newValue) => {
    setSelectedSize(newValue.value);
    // console.log(setSelectedSize)

  };

  const onSelectedColorChange = (color) => {
    setSelectedColor(color);
    if (colorOverlay.current) {
      colorOverlay.current.value = color;
    }
  };

  const handleAddToBasket = () => {
    addToBasket({ ...product, selectedColor, selectedSize: selectedSize || product.new[0] });
  };




  const [size, setSize] = React.useState();
  const [price, setPrice] = React.useState();
  // console.log(price)

  const [material, setMaterial] = React.useState();

  // The optional chaining operator(?.) enables you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid

  const materialOptions = product?.sizesnew
    .map((p) => p.material)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((material) => ({ label: material, value: material }))
  console.log(materialOptions)

  const sizeOptions = product?.sizesnew
    .map((p) => p.size)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((size) => ({ label: size, value: size }));
    console.log(sizeOptions)

  const priceOptions = product?.sizesnew
    .filter((p) => size && p.size === size.value && material && p.material === material.value)
    .map((p) => p.price)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((price) => ({ label: price, value: price }));
    console.log(priceOptions?.value)

  let finalPrice = {}



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


                {/* ----Size */}
                {/* <Select
                  placeholder="--Select Size--"
                  onChange={setSize}
                  options={

                    product.sizesnew
                      .map((p) => p.size)
                      .filter((v, i, a) => a.indexOf(v) === i)
                      .map((size) => ({ label: size, value: size }))
                  }


                  styles={{ menu: (provided) => ({ ...provided, zIndex: 10 }) }}


                /> */}


                {/* ----Price */}
                {/* <Select
                  placeholder="--Select Size--"
                  onChange={setPrice}
                  options={

                    product.sizesnew
                      .filter((p) => size && p.size === size.value)
                      .map((p) => p.price)
                      .filter((v, i, a) => a.indexOf(v) === i)
                      .map((price) => ({ label: price, value: price }))
                  }


                  styles={{ menu: (provided) => ({ ...provided, zIndex: 10 }) }}


                /> */}


                {/* ----Material */}
                {/* <Select
                  placeholder="--Select Size--"
                  onChange={setMaterial}
                  options={

                    product.sizesnew
                      .filter(
                        (p) => size && p.size === size.value && price && p.price === price.value
                      )
                      .map((p) => p.material)
                      .filter((v, i, a) => a.indexOf(v) === i)
                      .map((material) => ({ label: material, value: material }))
                  }


                  styles={{ menu: (provided) => ({ ...provided, zIndex: 10 }) }}


                /> */}






                <Select value={material} onChange={setMaterial} options={materialOptions} />                
                <Select value={size} onChange={setSize} options={sizeOptions} />

              </div>



              <p className='prod__price'>
                {priceOptions?.length === 1 ? (
                  finalPrice = priceOptions.value,     console.log(priceOptions.value)



                ) : (
                  finalPrice = product.price, console.log(product.price)
                  


                )}
              </p>


              <strong> {finalPrice} </strong>





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





              {/* <h1>{displayMoney(product.price)}</h1>
              <h1>{displayMoney(price)}</h1>
              <h1>{displayMoney(product.price - product.price + selectedSize)}</h1> */}



           











              <div className="product-modal-action">
                <button
                  className={`button button-small ${isItemOnBasket(product.id) ? 'button-border button-border-gray' : ''}`}
                  onClick={handleAddToBasket}
                  type="button"
                >
                  {isItemOnBasket(product.id) ? 'Remove From Basket' : 'Add To Basket'}
                </button>
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

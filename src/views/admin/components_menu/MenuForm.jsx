/* eslint-disable jsx-a11y/label-has-associated-control */
import { CheckOutlined, LoadingOutlined } from '@ant-design/icons';
import { ImageLoader } from 'components/common';
import {
  CustomColorInput, CustomCreatableSelect, CustomInput, CustomTextarea, CustomMobileInput
} from 'components/formik';
import {
  Field, FieldArray, Form, Formik
} from 'formik';
import { useFileHandler } from 'hooks';
import PropType from 'prop-types';
import React from 'react';
import * as Yup from 'yup';

import { OrderItem } from 'components/basket';

import { useSelector } from 'react-redux';

import { displayActionMessage, displayDate, displayMoney } from 'helpers/utils';






import { useMediaQuery } from 'react-responsive';




import MediaQuery from 'react-responsive';




import * as Mui from '@material-ui/core';


import { ADMIN_MENUS } from 'constants/routes';

// import { ArrowLeftOutlined, CheckOutlined, LoadingOutlined } from '@ant-design/icons';

import { useHistory } from 'react-router-dom';





import {
  createTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Typography
} from "@material-ui/core";
import { HTML5_FMT } from 'moment/moment';





let theme = createTheme();
theme = responsiveFontSizes(theme);

const heading = "OUR WORK";
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";




// Default brand names that I used. You can use what you want
const brandOptions = [
  { value: 'Salt Maalat', label: 'Salt Maalat' },
  { value: 'Betsin Maalat', label: 'Betsin Maalat' },
  { value: 'Sexbomb', label: 'Sexbomb' },
  { value: 'Black Kibal', label: 'Black Kibal' }
];

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .required('Menu name is required.')
    .max(60, 'Menu name must only be less than 60 characters.'),
  brand: Yup.string()
    .required('Brand name is required.'),
  subtotal: Yup.number()
    .positive('Price is invalid.')
    .integer('Price should be an integer.')
    .required('Price is required.'),
  id: Yup.string()
    .required('Description is required.'),
  maxQuantity: Yup.number()
    .positive('Max quantity is invalid.')
    .integer('Max quantity should be an integer.')
    .required('Max quantity is required.'),
  keywords: Yup.array()
    .of(Yup.string())
    .min(1, 'Please enter at least 1 keyword for this menu.'),
  sizes: Yup.array()
    .of(Yup.number())
    .min(1, 'Please enter a size for this menu.'),
  // basket: Yup.array()
  //   .of(Yup.number())
  //   .min(1, 'Please enter a size for this menu.'),
  isFeatured: Yup.boolean(),
  isRecommended: Yup.boolean(),
  availableColors: Yup.array()
    .of(Yup.string().required())
    .min(1, 'Please add a default color for this menu.')
});

const MenuForm = ({ menu, onSubmit, isLoading, basket }) => {
  const initFormikValues = {
    name: menu?.name || '',
    brand: menu?.brand || '',
    subtotal: menu?.subtotal || 0,
    maxQuantity: menu?.maxQuantity || 0,
    id: menu?.id || '',
    keywords: menu?.keywords || [],
    basket: menu?.basket || [],
    sizes: menu?.sizes || [],
    isFeatured: menu?.isFeatured || false,
    isRecommended: menu?.isRecommended || false,
    mobile: menu.mobile || {},
    availableColors: menu?.availableColors || [],
    address: menu.address || '',


  };
  // React Responsive - Test 1

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  });

  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  const history = useHistory();


  // Test 2

  // const isMobileDevice = useMediaQuery({
  //   query: "(min-device-width: 480px)",
  // });

  // const isTabletDevice = useMediaQuery({
  //   query: "(min-device-width: 768px)",
  // });

  // const isLaptop = useMediaQuery({
  //   query: "(min-device-width: 1024px)",
  // });

  // const isDesktop = useMediaQuery({
  //   query: "(min-device-width: 1200px)",
  // });

  // const isBigScreen1 = useMediaQuery({
  //   query: "(min-device-width: 1201px )",
  // });



  const menus = useSelector((state) => state.menus);

  const {
    imageFile,
    isFileLoading,
    onFileChange,
    removeImage
  } = useFileHandler({ image: {}, imageCollection: menu?.imageCollection || [] });

  const onSubmitForm = (form) => {
    if (imageFile.image.file || menu.imageUrl) {
      onSubmit({
        ...form,
        quantity: 1,
        // due to firebase function billing policy, let's add lowercase version
        // of name here instead in firebase functions
        name_lower: form.name.toLowerCase(),
        dateAdded: new Date().getTime(),
        image: imageFile?.image?.file || menu.imageUrl,
        imageCollection: imageFile.imageCollection
      });
    } else {
      // eslint-disable-next-line no-alert
      alert('Menu thumbnail image is required.');
    }
  };

  return (
    <div>
      <Formik
        initialValues={initFormikValues}
        validateOnChange
        validationSchema={FormSchema}
        onSubmit={onSubmitForm}
      >
        {({ values, setValues }) => (
          <Form className="order-form">
            {/* <div className="product-form-inputs"> */}
            {/* <div className="d-flex"> */}


            {/* <div className="product-form-field">
                  <Field
                    disabled={isLoading}
                    name="name"
                    type="text"
                    label="* Product Name"
                    placeholder="Gago"
                    style={{ textTransform: 'capitalize' }}
                    component={CustomInput}
                  />
                </div> */}

            {/* &nbsp; */}


            {/* <div className="product-form-field">
                  <CustomCreatableSelect
                    defaultValue={{ label: values.brand, value: values.brand }}
                    name="brand"
                    iid="brand"
                    options={brandOptions}
                    disabled={isLoading}
                    placeholder="Select/Create Brand"
                    label="* Brand"
                  />
                </div> */}


            {/* </div> */}


            {/* <div className="product-form-field">
                <Field
                  disabled={isLoading}
                  name="id"
                  id="id"
                  rows={3}
                  label="* Product Description"
                  component={CustomTextarea}
                />
              </div> */}


            {/* Subtotal */}

            {/* <div className="d-flex"> */}
            {/* <div className="product-form-field">
                  <Field
                    disabled={isLoading}
                    name="subtotal"
                    id="subtotal"
                    type="number"
                    label="* Total"
                    component={CustomInput}
                  />
                </div> */}


            {/* &nbsp; */}
            {/* <div className="product-form-field">
                  <Field
                    disabled={isLoading}
                    name="maxQuantity"
                    type="number"
                    id="maxQuantity"
                    label="* Max Quantity"
                    component={CustomInput}
                  />
                </div> */}
            {/* </div> */}




            {/* <div className="d-flex"> */}

            {/* <div className="product-form-field">
                  <CustomCreatableSelect
                    defaultValue={values.keywords.map((key) => ({ value: key, label: key }))}
                    name="keywords"
                    iid="keywords"
                    isMulti
                    disabled={isLoading}
                    placeholder="Create/Select Keywords"
                    label="* Keywords"
                  />
                </div> */}


            {/* &nbsp; */}

            {/* <div className="product-form-field">
                  <CustomCreatableSelect
                    defaultValue={values.sizes.map((key) => ({ value: key, label: key }))}
                    name="sizes"
                    iid="sizes"
                    type="number"
                    isMulti
                    disabled={isLoading}
                    placeholder="Create/Select Sizes"
                    label="* Sizes (Millimeter)"
                  />
                </div> */}

            {/* </div> */}


            {/* <div className="product-form-field">
                <FieldArray
                  name="availableColors"
                  disabled={isLoading}
                  component={CustomColorInput}
                />
              </div> */}


            {/* <div className="product-form-field">
                <span className="d-block padding-s">Image Collection</span>
                {!isFileLoading && (
                  <label htmlFor="product-input-file-collection">
                    <input
                      disabled={isLoading}
                      hidden
                      id="product-input-file-collection"
                      multiple
                      onChange={(e) => onFileChange(e, { name: 'imageCollection', type: 'multiple' })}
                      readOnly={isLoading}
                      type="file"
                    />
                    Choose Images
                  </label>
                )}
              </div> */}


            {/* <div className="product-form-collection">
                <>
                  {imageFile.imageCollection.length >= 1 && (
                    imageFile.imageCollection.map((image) => (
                      <div
                        className="product-form-collection-image"
                        key={image.id}
                      >
                        <ImageLoader
                          alt=""
                          src={image.url}
                        />
                        <button
                          className="product-form-delete-image"
                          onClick={() => removeImage({ id: image.id, name: 'imageCollection' })}
                          title="Delete Image"
                          type="button"
                        >
                          <i className="fa fa-times-circle" />
                        </button>
                      </div>
                    ))
                  )}
                </>
              </div> */}


            <br />
            {/* <div className="d-flex"> */}


            {/* <div className="product-form-field">
                  <input
                    checked={values.isFeatured}
                    className=""
                    id="featured"
                    onChange={(e) => setValues({ ...values, isFeatured: e.target.checked })}
                    type="checkbox"
                  />
                  <label htmlFor="featured">
                    <h5 className="d-flex-grow-1 margin-0">
                      &nbsp; Add to Featured &nbsp;
                    </h5>
                  </label>
                </div> */}


            {/* <div className="product-form-field">
                  <input
                    checked={values.isRecommended}
                    className=""
                    id="recommended"
                    onChange={(e) => setValues({ ...values, isRecommended: e.target.checked })}
                    type="checkbox"
                  />
                  <label htmlFor="recommended">
                    <h5 className="d-flex-grow-1 margin-0">
                      &nbsp; Add to Recommended &nbsp;
                    </h5>
                  </label>
                </div> */}


            {/* </div> */}
            <br />
            <br />
            <br />


            {/* <div className="product-form-field product-form-submit">
                <button
                  className="button"
                  disabled={isLoading}
                  type="submit"
                >
                  {isLoading ? <LoadingOutlined /> : <CheckOutlined />}
                  &nbsp;
                  {isLoading ? 'Saving Menu' : 'Save Menu'}
                </button>
                
              </div> */}


            {/* </div> */}





            {/* orderItem */}







            <div className="user-profile-details">
              <Field
                disabled={isLoading}
                name="fullname"
                type="text"
                label="* Full Name"
                placeholder="Enter your full name"
                component={CustomInput}
                style={{ textTransform: 'capitalize' }}
              />
              {/* <Field
                disabled={authProvider !== 'password' || isLoading}
                name="email"
                type="email"
                label="* Email Address"
                placeholder="test@example.com"
                component={CustomInput}
              /> */}
              <Field
                disabled={isLoading}
                name="address"
                type="text"
                label="Address (Will be used for checkout)"
                placeholder="#245 Brgy. Maligalig, Arayat Pampanga, Philippines"
                component={CustomInput}
                style={{ textTransform: 'capitalize' }}
              />
              <CustomMobileInput
                defaultValue={values.mobile}
                name="mobile"
                disabled={isLoading}
                label="Mobile Number (Will be used for checkout)"
              />
              <br />
              <div className="edit-user-action">
                <button
                  className="button button-muted w-100-mobile"
                  disabled={isLoading}
                  onClick={() => history.push(ACCOUNT)}
                  type="button"
                >
                  {/* <ArrowLeftOutlined /> */}
                  &nbsp;
                  Back to Profile
                </button>
                {/* <button
                  className="button w-100-mobile"
                  disabled={isLoading}
                  onClick={submitForm}
                  type="button"
                >
                  {isLoading ? <LoadingOutlined /> : <CheckOutlined />}
                  &nbsp;
                  {isLoading ? 'Updating Profile' : 'Update Profile'}
                </button> */}
              </div>
            </div>










            <div className="order">


              <button
                className="button-back button-muted w-100-mobile"
                disabled={isLoading}
                onClick={() => history.push(ADMIN_MENUS)}
                type="button"
              >
                {/* <ArrowLeftOutlined /> */}
                &nbsp;
                Back to Profile
              </button>



              {/* invoice */}


              <div className="d-flex-address">

                <div className="address-item-line ">


                  <div className="order-form-field">



                    <h3>Invoice</h3>


                  </div>


                </div>

                <div className="address-item-line ">




                  <div className="order-form-field">
                    <h3>Payment:</h3>
                    {/* <br /> */}
                    {menu.payment ? (
                      <h5>{menu.payment.type}</h5>
                    ) : (
                      <h5 className="text-subtle text-italic">Address not found</h5>
                    )}

                  </div>



                </div>



              </div>



              {/* date/Id */}

              <div className="d-flex-address">

                <div className="address-item-line ">


                  <div className="order-form-field">



                    <h3>Order Date</h3>
                    {/* <p>&nbsp;</p> */}
                    <h5>
                      {menu.dateAdded ? displayDate(menu.dateAdded) : <Skeleton width={50} />}

                    </h5>
                  </div>


                </div>

                <div className="address-item-line ">


                  <div className="order-form-field">
                    {/* word-break: break-all; */}


                    <h3>Order ID</h3>
                    {/* <p>&nbsp;</p> */}
                    <h5>
                      {menu.id || <Skeleton width={50} />}
                    </h5>
                  </div>


                </div>



              </div>





              {/* Dispatcher & Receiver */}


              <div className="d-flex-address">

                <div className="address-item ">


                  <div className="order-form-field">



                    {/* <p>&nbsp;</p> */}
                    <h3>Dispatcher:</h3>
                    <h5>Danone Waters (UK & Ireland) Limited</h5>
                    <h5>6th Floor, Building 7 Chiswick Park</h5>
                    <h5>566 Chiswick High Road</h5>
                    <h5>London</h5>
                    <h5>W4 5YG</h5>
                  </div>


                </div>


                <div className="address-item ">
                  <div className="order-form-field">
                    <h3>Receiver:</h3>
                    {/* <br /> */}
                    {menu.shipping ? (
                      <h5>{menu.shipping.fullname}</h5>
                    ) : (
                      <h5 className="text-subtle text-italic">Address not found</h5>
                    )}

                  </div>

                  <div className="order-form-field">
                    <h3>Address:</h3>
                    {/* <br /> */}
                    {menu.shipping ? (
                      <h5>{menu.shipping.address}</h5>
                    ) : (
                      <h3 className="text-subtle text-italic">Address not found</h3>
                    )}
                  </div>




                  <div className="order-form-field">

                    <h3>Mobile:</h3>
                    {/* <br /> */}
                    {menu.shipping ? (
                      <h5>{menu.shipping.mobile.value}</h5>
                    ) : (
                      <h5 className="text-subtle text-italic">Address not found</h5>
                    )}
                  </div>



                </div>
              </div>


              <div className="order-form-field">
                <h3>Ordered Articles</h3>
                {/* <span>Rechnung</span> */}
                <p>&nbsp;</p>
                {values.basket.map((product) => (
                  <OrderItem
                    basket={basket}

                    key={product.id}
                    product={product}
                  />
                ))}

              </div>



              <div className="d-flex-total">

                <div className="address-item-line-2">




                  <div className="order-form-field-total">
                    <h2>Total:</h2>

                    {/* <h5 className="order-form-field">
                      {menu.subtotal || <Skeleton width={50} />}
                    </h5> */}


                  </div>



                </div>

                <div className="address-item-line-2">




                  <div className="order-form-field-total">
                    {/* <h3>Total:</h3> */}

                    <h2 className="order-form-field-total">


                      {menu.subtotal || <Skeleton width={50} />}
                    </h2>


                  </div>



                </div>



              </div>



              {/* instead of desktop, laptop, bigscrren, phone => we use div */}
              {/* React-Responsive Test 1 */}

              <div>
                <h1>Device Test! - React Responsive</h1>
                {isDesktopOrLaptop &&



                  <div className="address-item-line-1 ">
                    <div className="order-form-field-1">
                      <h5>Test 100</h5>
                    </div>
                  </div>


                }

                {isBigScreen &&


                  <p>You  have a huge screen</p>


                }
                {isTabletOrMobile &&


                  <div className="address-item-line-1 ">
                    <div className="order-form-field-4">
                      <h5>Test 1000</h5>
                    </div>
                  </div>


                }
                <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
                {isRetina && <p>You are retina</p>}
              </div>




              {/* Test 2 */}

              {/* <h1>React Responsive - a guide</h1>
              {isMobileDevice && <Mobile />}
              {isTabletDevice && <>
                <TabletMobile />
                {isDesktop && <Desktop />}
                {isLaptop && <Laptop />}
                {isBigScreen1 && <BigScreen />}
              </>}



              <div className="order-form-field-2">
                <h1>Device Test!</h1>
                <p>Whoops! I'm in big screen mode.</p>
                <p>This is the base of the pyramid</p>
              </div>

              <div className="order-form-field-3">
                <h1>Device Test!</h1>
                <p>Whoops! I'm in desktop mode.</p>
                <p>But if you see anything below me, i am now in Laptop mode</p>
              </div> */}







              {/* Material-UI */}

              {/* <MuiThemeProvider theme={theme}>
                <Typography variant="h3" gutterBottom> {heading} </Typography>
                <Typography variant="h4" gutterBottom> {text} </Typography>
              </MuiThemeProvider> */}




              {/* Responsive Div Conainers */}


              {/* test:
              grid-column-start: 1;
              grid-column-end: 4; */}

              {/* <h1>Div Test 1 - CSS</h1>


              <div className="container">

                <div className="container-red">

                  <div className="container-center">one</div>

                </div>


                <div className="container-blue">

                  <div className="container-center">two</div>

                </div>



                <div className="container-green">

                  <div className="container-center">three</div>

                </div>


                <div className="container-yellow">

                  <div className="container-center">four</div>

                </div>


                <div className="container-orange">

                  <div className="container-center">five</div>

                </div>



                <div className="container-pink">

                  <div className="container-center">six</div>

                </div>



              </div> */}



              {/* <h1>Div Test 2 - CSS</h1>

              <div class="wrapper">


                <div className="item1">
                  1
                </div>



                <div>2</div>

                <div className="item3">
                  3
                </div>



                <div className="item4">
                  4
                </div>
                <div>5</div>
                <div>6</div>
              </div> */}


              {/* <h1>Div Test 3 - CSS</h1> */}

              {/* <div class="container-test3">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
              </div> */}









              {/* <h1>Div Test -orderItem - CSS</h1> */}


              {/* <div className="container">

                <div className="container-red">

                  <div className="container-center">one</div>

                </div>


                <div className="container-blue">

                  <div className="container-center">two</div>

                </div>



                <div className="container-green">

                  <div className="container-center">three</div>

                </div>


                <div className="container-yellow">

                  <div className="container-center">four</div>

                </div>


                <div className="container-orange">

                  <div className="container-center">five</div>

                </div>



                <div className="container-pink">

                  <div className="container-center">six</div>

                </div>



              </div> */}



              {/* <div className="order-form-field"> */}
              {/* <span>Rechnung</span> */}
              {/* <p>&nbsp;</p>
                {values.basket.map((product) => (
                  <OrderItem
                    basket={basket}

                    key={product.id}
                    product={product}
                  />
                ))}

              </div> */}


            </div>





            {/* ----THUBMNAIL ---- */}
            {/* <div className="product-form-file">
              <div className="product-form-field">
                <span className="d-block padding-s">* Thumbnail</span>
                {!isFileLoading && (
                  <label htmlFor="product-input-file">
                    <input
                      disabled={isLoading}
                      hidden
                      id="product-input-file"
                      onChange={(e) => onFileChange(e, { name: 'image', type: 'single' })}
                      readOnly={isLoading}
                      type="file"
                    />
                    Choose Image
                  </label>
                )}
              </div>
              <div className="product-form-image-wrapper">
                {(imageFile.image.url || menu.image) && (
                  <ImageLoader
                    alt=""
                    className="product-form-image-preview"
                    src={imageFile.image.url || menu.image}
                  />
                )}
              </div>
            </div> */}
          </Form>
        )}
      </Formik>
    </div >
  );
};

MenuForm.propTypes = {
  menu: PropType.shape({
    name: PropType.string,
    brand: PropType.string,
    subtotal: PropType.number,
    maxQuantity: PropType.number,
    id: PropType.string,
    keywords: PropType.arrayOf(PropType.string),
    imageCollection: PropType.arrayOf(PropType.object),
    basket: PropType.arrayOf(PropType.object),
    sizes: PropType.arrayOf(PropType.string),
    image: PropType.string,
    imageUrl: PropType.string,
    isFeatured: PropType.bool,
    isRecommended: PropType.bool,
    address: PropType.string,
    mobile: PropType.object,


    // mobile: PropType.object,

    // shipping: PropType.shape({
    //   fullname: PropType.string,
    //   email: PropType.string,
    //   address: PropType.string,
    //   mobile: PropType.object,
    //   isInternational: PropType.bool,
    //   isDone: PropType.bool
    // }),

    availableColors: PropType.arrayOf(PropType.string)
  }).isRequired,
  onSubmit: PropType.func.isRequired,
  isLoading: PropType.bool.isRequired
};

export default MenuForm;

import * as ACTION from 'constants/constants';
import { takeLatest } from 'redux-saga/effects';
import authSaga from './authSaga';
import productSaga from './productSaga';
import settingSaga from './settingSaga';
import orderSaga from './orderSaga';
import postSaga from './postSaga';
import user1Saga from './user1Saga';
import checkoutSaga from './checkoutSaga';
import profileSaga from './profileSaga';
import basketSaga from './basketSaga';

function* rootSaga() {
  yield takeLatest([
    ACTION.SIGNIN,
    ACTION.SIGNUP,
    ACTION.SIGNUP_SUCCESS,
    ACTION.SIGNOUT,
    ACTION.SIGNIN_WITH_GOOGLE,
    ACTION.SIGNIN_WITH_FACEBOOK,
    ACTION.SIGNIN_WITH_GITHUB,
    ACTION.ON_AUTHSTATE_CHANGED,
    ACTION.ON_AUTHSTATE_SUCCESS,
    ACTION.ON_AUTHSTATE_FAIL,
    ACTION.SET_AUTH_PERSISTENCE,
    ACTION.RESET_PASSWORD
  ], authSaga);

  yield takeLatest([
    ACTION.ADD_PRODUCT,
    ACTION.SEARCH_PRODUCT,
    ACTION.REMOVE_PRODUCT,
    ACTION.EDIT_PRODUCT,
    ACTION.GET_PRODUCTS
  ], productSaga);

  yield takeLatest([
    ACTION.SET_ORDER_DETAILS,
    ACTION.SET_CHECKOUT_BASKET_DETAILS,
    ACTION.SET_CHECKOUT_SHIPPING_DETAILS,
    ACTION.SET_CHECKOUT_PAYMENT_DETAILS,
    ACTION.RESET_CHECKOUT
  ], checkoutSaga);

  yield takeLatest([
    ACTION.ADD_ORDER,
    ACTION.SEARCH_ORDER,
    ACTION.REMOVE_ORDER,
    ACTION.EDIT_ORDER,
    ACTION.GET_ORDERS
  ], orderSaga);

  yield takeLatest([
    ACTION.ADD_POST,
    ACTION.SEARCH_POST,
    ACTION.REMOVE_POST,
    ACTION.EDIT_POST,
    ACTION.GET_POSTS
  ], postSaga);

  yield takeLatest([
    ACTION.ADD_USER1,
    ACTION.SEARCH_USER1,
    ACTION.REMOVE_USER1,
    ACTION.EDIT_USER1,
    ACTION.GET_USERS1
  ], user1Saga);

  yield takeLatest([
    ACTION.UPDATE_EMAIL,
    ACTION.UPDATE_PROFILE
  ], profileSaga);

  yield takeLatest([
    ACTION.UPDATE_EMAIL,
    ACTION.UPDATE_SETTINGS,
    ACTION.ADD_SETTING,
    ACTION.GET_SETTING,



  ], settingSaga);

  yield takeLatest([
    ACTION.CLEAR_BASKET
  ], basketSaga);
}

export default rootSaga;

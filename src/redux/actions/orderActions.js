import {
  PLACE_ORDER_INIT,
  PLACE_ORDER, 
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_FAIL
} from 'constants/constants';


// import firebase from '../../firebase/firebase'

// import * as actionTypes from './actionTypes'

// const db = firebase.firestore()


export const placeOrderInitialize = () => ({
  type: PLACE_ORDER_INIT
});


export const placeOrderInit = (order) => ({
  type: PLACE_ORDER,
  payload: order

});


export const placeOrderSuccess = (order) => ({
  type: PLACE_ORDER_SUCCESS,
  payload: order

});


export const placeOrderFail = (error) => ({
  type: PLACE_ORDER_FAIL,
  payload: error
});


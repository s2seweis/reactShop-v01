import {
  // ADD_PRODUCT,
  ADD_ORDER,

  // ADD_PRODUCT_SUCCESS,
  ADD_ORDER_SUCCESS,

  // CANCEL_GET_PRODUCTS,
  CANCEL_GET_ORDERS,

  CLEAR_SEARCH_STATE,

  // EDIT_PRODUCT,
  EDIT_ORDER,

  // EDIT_PRODUCT_SUCCESS,
  EDIT_ORDER_SUCCESS,

  // GET_PRODUCTS,
  GET_ORDERS,
  
  // GET_PRODUCTS_SUCCESS,
  GET_ORDERS_SUCCESS,

  // REMOVE_PRODUCT,
  REMOVE_ORDER,

  // REMOVE_PRODUCT_SUCCESS,
  REMOVE_ORDER_SUCCESS,

  // SEARCH_PRODUCT,
  SEARCH_ORDER,
  
  // SEARCH_PRODUCT_SUCCESS,
  SEARCH_ORDER_SUCCESS

} from 'constants/constants';

// export const getProducts = (lastRef) => ({
// type: GET_PRODUCTS,
// payload: lastRef
// });

export const getOrders = (lastRef) => ({
  type: GET_ORDERS,
  payload: lastRef
});

// export const getProductsSuccess = (products) => ({
//   type: GET_PRODUCTS_SUCCESS,
//   payload: products
// });

export const getOrdersSuccess = (orders) => ({
  type: GET_ORDERS_SUCCESS,
  payload: orders
});

// export const cancelGetProducts = () => ({
//   type: CANCEL_GET_PRODUCTS
// });

export const cancelGetOrders = () => ({
  type: CANCEL_GET_ORDERS
});

// export const addProduct = (product) => ({
//   type: ADD_PRODUCT,
//   payload: product
// });

export const addOrder= (order) => ({
  type: ADD_ORDER,
  payload: order
});

// export const searchProduct = (searchKey) => ({
//   type: SEARCH_PRODUCT,
//   payload: {
//     searchKey
//   }
// });

export const searchOrder = (searchKey) => ({
  type: SEARCH_ORDER,
  payload: {
    searchKey
  }
});

// export const searchProductSuccess = (products) => ({
//   type: SEARCH_PRODUCT_SUCCESS,
//   payload: products
// });

export const searchOrderSuccess = (orders) => ({
  type: SEARCH_ORDER_SUCCESS,
  payload: orders
});

export const clearSearchState = () => ({
  type: CLEAR_SEARCH_STATE
});

// export const addProductSuccess = (product) => ({
//   type: ADD_PRODUCT_SUCCESS,
//   payload: product
// });

export const addOrderSuccess = (order) => ({
  type: ADD_ORDER_SUCCESS,
  payload: order
});

// export const removeProduct = (id) => ({
//   type: REMOVE_PRODUCT,
//   payload: id
// });

export const removeOrder = (id) => ({
  type: REMOVE_ORDER,
  payload: id
});

// export const removeProductSuccess = (id) => ({
//   type: REMOVE_PRODUCT_SUCCESS,
//   payload: id
// });

export const removeOrderSuccess = (id) => ({
  type: REMOVE_ORDER_SUCCESS,
  payload: id
});

// export const editProduct = (id, updates) => ({
//   type: EDIT_PRODUCT,
//   payload: {
//     id,
//     updates
//   }
// });

export const editOrder = (id, updates) => ({
  type: EDIT_ORDER,
  payload: {
    id,
    updates
  }
});

// export const editProductSuccess = (updates) => ({
//   type: EDIT_PRODUCT_SUCCESS,
//   payload: updates
// });

export const editOrderSuccess = (updates) => ({
  type: EDIT_ORDER_SUCCESS,
  payload: updates
});


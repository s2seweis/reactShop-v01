import authReducer from './authReducer';
import basketReducer from './basketReducer';
import checkoutReducer from './checkoutReducer';
import filterReducer from './filterReducer';
import miscReducer from './miscReducer';

import productReducer from './productReducer';
import menuReducer from './menuReducer';

import profileReducer from './profileReducer';
import userReducer from './userReducer';

const rootReducer = {
  products: productReducer,
  menus: menuReducer,
  basket: basketReducer,
  auth: authReducer,
  profile: profileReducer,
  filter: filterReducer,
  users: userReducer,
  checkout: checkoutReducer,
  app: miscReducer
};

export default rootReducer;

import authReducer from './authReducer';
import basketReducer from './basketReducer';
import checkoutReducer from './checkoutReducer';
import filterReducer from './filterReducer';
import miscReducer from './miscReducer';

import productReducer from './productReducer';
import settingReducer from './settingReducer';
import menuReducer from './menuReducer';
import postReducer from './postReducer';


import user1Reducer from './user1Reducer';

import profileReducer from './profileReducer';

const rootReducer = {
  products: productReducer,
  settings: settingReducer,
  menus: menuReducer,
  posts: postReducer,
  

  users1: user1Reducer,

  basket: basketReducer,
  auth: authReducer,
  profile: profileReducer,
  filter: filterReducer,
  checkout: checkoutReducer,
  app: miscReducer
};

export default rootReducer;

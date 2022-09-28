import {

  CLEAR_SETTING,
  SET_SETTING,
  UPDATE_SETTING_SUCCESS,
  GET_SETTINGS_SUCCESS

} from 'constants/constants';


// import profile from 'static/profile.jpg';
// import banner from 'static/banner.jpg';

// const initState = {
//   fullname: 'Pedro Juan',
//   email: 'juanpedro@gmail.com',
//   address: '',
//   mobile: {},
//   avatar: profile,
//   banner,
//   dateJoined: 1954234787348
// };

// const initState = {
//   // lastRefKey: null,
//   total: 0,
//   items: []
// };

export default (state = {
  // lastRefKey: null,
  // total: 0,
  items: [],
  // searchedSettings: initState
}, action) => {
  switch (action.type) {


    case GET_SETTINGS_SUCCESS:
      return {
        ...state,
        // lastRefKey: action.payload.lastKey,
        total: action.payload.total,
        items: [...action.payload.settings],



        
        



      };


    case SET_SETTING:
      return action.payload;
    case UPDATE_SETTING_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case CLEAR_SETTING:
      return {};
    default:
      return state;
  }
};

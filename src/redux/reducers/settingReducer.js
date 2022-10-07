import { 
  
  CLEAR_SETTINGS, 
  SET_SETTING, 
  UPDATE_SETTINGS_SUCCESS,
  ADD_SETTING_SUCCESS, 
  ADD_SETTING,
  GET_SETTING_SUCCESS,
  GET_SETTING

} from 'constants/constants';


// import profile from 'static/profile.jpg';
// import banner from 'static/banner.jpg';

// const initState = {
//   fullname: '',
//   email: 'juanpedro@gmail.com',
//   address: '',
//   mobile: {},
//   avatar: profile,
//   banner,
//   dateJoined: 1954234787348
// };









export default (state = {}, action) => {
  switch (action.type) {





    // case GET_SETTING_SUCCESS:
    //   return action.payload;
      
    case GET_SETTING_SUCCESS:
      return { 
        ...state,
        ...action.payload   
      };

   



    case ADD_SETTING:
      return {
        ...state,
        setting: action.payload
        // ...action.payload
      };

      

    case ADD_SETTING_SUCCESS:
      return {
        ...state,
        ...action.payload
      };


    case UPDATE_SETTINGS_SUCCESS:
      return {
        ...state,
        ...action.payload
      };

      

    case CLEAR_SETTINGS:
      return {};
    default:
      return state;
  }
};

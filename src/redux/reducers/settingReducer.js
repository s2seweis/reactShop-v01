import { 
  
  CLEAR_SETTINGS, 
  SET_SETTINGS, 
  UPDATE_SETTINGS_SUCCESS 

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

export default (state = {}, action) => {
  switch (action.type) {
    case SET_SETTINGS:
      return action.payload;
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

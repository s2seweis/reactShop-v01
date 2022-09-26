import {

  ADD_SETTING_SUCCESS,
  CLEAR_SEARCH_STATE, 
  EDIT_SETTING_SUCCESS,
  GET_SETTINGS_SUCCESS, 
  REMOVE_SETTING_SUCCESS,
  SEARCH_SETTING_SUCCESS
  
} from 'constants/constants';

const initState = {
  lastRefKey: null,
  total: 0,
  items: []
};

export default (state = {
  lastRefKey: null,
  total: 0,
  items: [],
  searchedSettings: initState
}, action) => {
  switch (action.type) {
    case GET_SETTINGS_SUCCESS:
      return {
        ...state,
        lastRefKey: action.payload.lastKey,
        total: action.payload.total,
        items: [...state.items, ...action.payload.settings]
      };
    case ADD_SETTING_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case SEARCH_SETTING_SUCCESS:
      return {
        ...state,
        searchedSettings: {
          lastRefKey: action.payload.lastKey,
          total: action.payload.total,
          items: [...state.searchedSettings.items, ...action.payload.settings]
        }
      };
    case CLEAR_SEARCH_STATE:
      return {
        ...state,
        searchedSettings: initState
      };
    case REMOVE_SETTING_SUCCESS:
      return {
        ...state,
        items: state.items.filter((setting) => setting.id !== action.payload)
      };
    case EDIT_SETTING_SUCCESS:
      return {
        ...state,
        items: state.items.map((setting) => {
          if (setting.id === action.payload.id) {
            return {
              ...setting,
              ...action.payload.updates
            };
          }
          return setting;
        })
      };
    default:
      return state;
  }
};

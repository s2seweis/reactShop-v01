import {
  ADD_USER1_SUCCESS,
  CLEAR_SEARCH_STATE, EDIT_USER1_SUCCESS,
  GET_USERS1_SUCCESS, REMOVE_USER1_SUCCESS,
  SEARCH_USER1_SUCCESS
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
  searchedUsers1: initState
}, action) => {
  switch (action.type) {
    case GET_USERS1_SUCCESS:
      return {
        ...state,
        lastRefKey: action.payload.lastKey,
        total: action.payload.total,
        items: [...state.items, ...action.payload.users1]
      };
    case ADD_USER1_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case SEARCH_USER1_SUCCESS:
      return {
        ...state,
        searchedUsers1: {
          lastRefKey: action.payload.lastKey,
          total: action.payload.total,
          items: [...state.searchedUsers1.items, ...action.payload.users1]
        }
      };
    case CLEAR_SEARCH_STATE:
      return {
        ...state,
        searchedUsers1: initState
      };
    case REMOVE_USER1_SUCCESS:
      return {
        ...state,
        items: state.items.filter((user1) => user1.id !== action.payload)
      };
    case EDIT_USER1_SUCCESS:
      return {
        ...state,
        items: state.items.map((user1) => {
          if (user1.id === action.payload.id) {
            return {
              ...user1,
              ...action.payload.updates
            };
          }
          return user1;
        })
      };
    default:
      return state;
  }
};

// okay

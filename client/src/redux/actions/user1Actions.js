import {
 
  ADD_USER1,
  ADD_USER1_SUCCESS,
  CANCEL_GET_USERS1,
  CLEAR_SEARCH_STATE,
  EDIT_USER1,
  EDIT_USER1_SUCCESS,
  GET_USERS1,
  GET_USERS1_SUCCESS,
  REMOVE_USER1,
  REMOVE_USER1_SUCCESS,
  SEARCH_USER1,
  SEARCH_USER1_SUCCESS

} from 'constants/constants';



export const getUsers1 = (lastRef) => ({
  type: GET_USERS1,
  payload: lastRef
});

export const getUsers1Success = (users1) => ({
  type: GET_USERS1_SUCCESS,
  payload: users1
});

export const cancelGetUsers1 = () => ({
  type: CANCEL_GET_USERS1
});

export const addUser1 = (user1) => ({
  type: ADD_USER1,
  payload: user1
});

export const searchUser1 = (searchKey) => ({
  type: SEARCH_USER1,
  payload: {
    searchKey
  }
});

export const searchUser1Success = (users1) => ({
  type: SEARCH_USER1_SUCCESS,
  payload: users1
});

export const clearSearchState = () => ({
  type: CLEAR_SEARCH_STATE
});

export const addUser1Success = (user1) => ({
  type: ADD_USER1_SUCCESS,
  payload: user1
});

export const removeUser1 = (id) => ({
  type: REMOVE_USER1,
  payload: id
});

export const removeUser1Success = (id) => ({
  type: REMOVE_USER1_SUCCESS,
  payload: id
});

export const editUser1 = (id, updates) => ({
  type: EDIT_USER1,
  payload: {
    id,
    updates
  }
});

export const editUser1Success = (updates) => ({
  type: EDIT_USER1_SUCCESS,
  payload: updates
});

